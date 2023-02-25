import {
	ContentRating,
	Form,
	PagedResults,
	SearchRequest,
	Section,
	SourceInfo,
	TagType,
	TrackedManga,
	Tracker,
	TrackerActionQueue
} from 'paperback-extensions-common'
import { CacheManager } from './CacheManager';
import {
	KavitaRequestInterceptor,
	getKavitaAPIUrl,
	log,
	getSeriesDetails
} from './Common';
import { searchRequest } from './Search';

export const KavyaInfo: SourceInfo = {
	version: '0.1.3',
	name: 'Kavya Tracker',
	icon: 'icon.png',
	author: 'ACK72',
	authorWebsite: 'https://github.com/ACK72',
	description: 'Kavya Tracker for syncing read chapters to the Kavita',
	contentRating: ContentRating.EVERYONE,
	websiteBaseURL: 'https://www.kavitareader.com/',
	sourceTags: [
		{
			text: 'Tracker',
			type: TagType.BLUE,
		},
	],
}

export class Kavya extends Tracker {
	stateManager = createSourceStateManager({});

	cacheManager = new CacheManager();
	interceptor = new KavitaRequestInterceptor(this.stateManager);

	requestManager = createRequestManager({
		requestsPerSecond: 5,
		requestTimeout: 20000,
		interceptor: this.interceptor
	})

	async getSourceMenu(): Promise<Section> {
		return createSection({
			id: 'information',
			header: 'Informations',
			rows: async () => {
				return [
					createLabel({
						label: 'This tracker sync read chapters from the app to the Kavita server.',
						value: '',
						id: 'description'
					}),
					createLabel({
						label: 'Use the source settings menu to set your server credentials.',
						value: '',
						id: 'settings'
					})
				]
			}
		})
	}

	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	async getSearchResults(searchQuery: SearchRequest, metadata: any): Promise<PagedResults> {
		return await searchRequest(searchQuery, metadata, this.requestManager, this.interceptor, this.stateManager, this.cacheManager);
	}

	getMangaForm(_: string): Form {
		return createForm({
			sections: async () => [],
			onSubmit: () => {
				return Promise.resolve()
			},
			validate: async () => true 
		})
	}
	
	async getTrackedManga(mangaId: string): Promise<TrackedManga> {
		return createTrackedManga({
			id: mangaId,
			mangaInfo: createMangaInfo(
				await getSeriesDetails(mangaId, this.requestManager, this.stateManager)
			)
		})
	}

	async processActionQueue(actionQueue: TrackerActionQueue): Promise<void> {
		const chapterReadActions = await actionQueue.queuedChapterReadActions();
		const kavitaAPIUrl = await getKavitaAPIUrl(this.stateManager);

		for (const readAction of chapterReadActions) {
			if (readAction.sourceId !== 'Kavya') {
				log(`Manga ${readAction.mangaId} from source ${readAction.sourceId} can not be used as it does not come from Kavya. Discarding`)
				await actionQueue.discardChapterReadAction(readAction)
			} else {
				if (!(await this.interceptor.isServerAvailable())) {
					await actionQueue.retryChapterReadAction(readAction);
					continue;
				}
					
				try {
					const chapterRequest = createRequestObject({
						url: `${kavitaAPIUrl}/Reader/chapter-info`,
						param: `?chapterId=${readAction.sourceChapterId}`,
						method: 'GET',
					})

					const chapterResponse = await this.requestManager.schedule(chapterRequest, 1)
					const chapterResult = JSON.parse(chapterResponse?.data);
					
					const progressRequest = createRequestObject({
						url: `${kavitaAPIUrl}/Reader/progress`,
						data: JSON.stringify({
							volumeId: chapterResult.volumeId,
							chapterId: parseInt(readAction.sourceChapterId),
							pageNum: chapterResult.pages,
							seriesId: chapterResult.seriesId,
							libraryId: chapterResult.libraryId
						}),
						method: 'POST',
					})

					const progressResponse = await this.requestManager.schedule(progressRequest, 1)

					if(progressResponse.status < 400) {
						await actionQueue.discardChapterReadAction(readAction)
					} else {
						await actionQueue.retryChapterReadAction(readAction)
					}
				} catch(error) {
					log(`Tracker action for manga id ${readAction.mangaId} failed with error: ${error}`)
					await actionQueue.retryChapterReadAction(readAction)
				}
			}
		}
	}
}