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
	getKavitaAPI,
	log,
	getSeriesDetails
} from './Common';
import { searchRequest } from './Search';

export const KavyaInfo: SourceInfo = {
	version: '1.0.3',
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

	// @ts-ignore
	getMangaForm(mangaId: string): Form {
		return createForm({
			sections: async () => {
				const kavitaAPI = await getKavitaAPI(this.stateManager);

				const request = createRequestObject({
					url: `${kavitaAPI.url}/Series/${mangaId}`,
					method: 'GET',
				});
				const response = await this.requestManager.schedule(request, 1);
				const result = JSON.parse(response?.data);

				return [
					createSection({
						id: 'seriesInfo',
						header: 'Info',
						rows: async () => [
							createLabel({
								id: 'seriesId',
								label: 'SeriesID',
								value: mangaId
							}),
							createLabel({
								id: 'libraryId',
								label: 'LibraryID',
								value: `${result.libraryId}`
							}),
							createLabel({
								id: 'pagesRead',
								label: 'Pages Read',
								value: `${result.pagesRead} / ${result.pages}`
							})
						]
					}),
					createSection({
						id: 'userReview',
						header: 'Rating & Review',
						rows: async () => [
							//@ts-ignore
							createStepper({
								id: 'rating',
								label: 'Rating',
								value: result.userRating ?? 0,
								min: 0,
								max: 5,
								step: 1
							}),
							createInputField({
								id: 'review',
								// @ts-ignore
								label: undefined,
								placeholder: 'Review',
								value: result.userReview ?? '',
								maskInput: false
							})
						]
					})
				]
			},
			onSubmit: async (values) => {
				const kavitaAPI = await getKavitaAPI(this.stateManager);

				await this.requestManager.schedule(createRequestObject({
                    url: `${kavitaAPI.url}/Series/update-rating`,
					data: JSON.stringify({seriesId: mangaId, userRating: values.rating, userReview: values.review}),
                    method: 'POST'
                }), 1);
			},
			validate: async () => true
		})
	}

	async getTrackedManga(mangaId: string): Promise<TrackedManga> {
		return createTrackedManga({
			id: mangaId,
			mangaInfo: createMangaInfo({
				...(await getSeriesDetails(mangaId, this.requestManager, this.stateManager)),
				// @ts-ignore
				status: 'Reading'
			})
		})
	}

	async processActionQueue(actionQueue: TrackerActionQueue): Promise<void> {
		const chapterReadActions = await actionQueue.queuedChapterReadActions();
		const kavitaAPI = await getKavitaAPI(this.stateManager);

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
						url: `${kavitaAPI.url}/Reader/chapter-info`,
						param: `?chapterId=${readAction.sourceChapterId}`,
						method: 'GET',
					})

					const chapterResponse = await this.requestManager.schedule(chapterRequest, 1)
					const chapterResult = JSON.parse(chapterResponse?.data);

					const progressRequest = createRequestObject({
						url: `${kavitaAPI.url}/Reader/progress`,
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