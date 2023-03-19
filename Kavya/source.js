(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],3:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);

},{"./Source":1,"./Tracker":2}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./base"), exports);
__exportStar(require("./models"), exports);

},{"./base":3,"./models":47}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],6:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],7:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],8:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],9:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],10:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],11:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],12:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],13:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],14:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],15:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],16:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],17:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],18:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],19:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],20:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],21:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],22:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],23:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Button"), exports);
__exportStar(require("./Form"), exports);
__exportStar(require("./Header"), exports);
__exportStar(require("./InputField"), exports);
__exportStar(require("./Label"), exports);
__exportStar(require("./Link"), exports);
__exportStar(require("./MultilineLabel"), exports);
__exportStar(require("./NavigationButton"), exports);
__exportStar(require("./OAuthButton"), exports);
__exportStar(require("./Section"), exports);
__exportStar(require("./Select"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./WebViewButton"), exports);
__exportStar(require("./FormRow"), exports);
__exportStar(require("./Stepper"), exports);

},{"./Button":8,"./Form":9,"./FormRow":10,"./Header":11,"./InputField":12,"./Label":13,"./Link":14,"./MultilineLabel":15,"./NavigationButton":16,"./OAuthButton":17,"./Section":18,"./Select":19,"./Stepper":20,"./Switch":21,"./WebViewButton":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["UNKNOWN"] = "_unknown";
    LanguageCode["BENGALI"] = "bd";
    LanguageCode["BULGARIAN"] = "bg";
    LanguageCode["BRAZILIAN"] = "br";
    LanguageCode["CHINEESE"] = "cn";
    LanguageCode["CZECH"] = "cz";
    LanguageCode["GERMAN"] = "de";
    LanguageCode["DANISH"] = "dk";
    LanguageCode["ENGLISH"] = "gb";
    LanguageCode["SPANISH"] = "es";
    LanguageCode["FINNISH"] = "fi";
    LanguageCode["FRENCH"] = "fr";
    LanguageCode["WELSH"] = "gb";
    LanguageCode["GREEK"] = "gr";
    LanguageCode["CHINEESE_HONGKONG"] = "hk";
    LanguageCode["HUNGARIAN"] = "hu";
    LanguageCode["INDONESIAN"] = "id";
    LanguageCode["ISRELI"] = "il";
    LanguageCode["INDIAN"] = "in";
    LanguageCode["IRAN"] = "ir";
    LanguageCode["ITALIAN"] = "it";
    LanguageCode["JAPANESE"] = "jp";
    LanguageCode["KOREAN"] = "kr";
    LanguageCode["LITHUANIAN"] = "lt";
    LanguageCode["MONGOLIAN"] = "mn";
    LanguageCode["MEXIAN"] = "mx";
    LanguageCode["MALAY"] = "my";
    LanguageCode["DUTCH"] = "nl";
    LanguageCode["NORWEGIAN"] = "no";
    LanguageCode["PHILIPPINE"] = "ph";
    LanguageCode["POLISH"] = "pl";
    LanguageCode["PORTUGUESE"] = "pt";
    LanguageCode["ROMANIAN"] = "ro";
    LanguageCode["RUSSIAN"] = "ru";
    LanguageCode["SANSKRIT"] = "sa";
    LanguageCode["SAMI"] = "si";
    LanguageCode["THAI"] = "th";
    LanguageCode["TURKISH"] = "tr";
    LanguageCode["UKRAINIAN"] = "ua";
    LanguageCode["VIETNAMESE"] = "vn";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaStatus = void 0;
var MangaStatus;
(function (MangaStatus) {
    MangaStatus[MangaStatus["ONGOING"] = 1] = "ONGOING";
    MangaStatus[MangaStatus["COMPLETED"] = 0] = "COMPLETED";
    MangaStatus[MangaStatus["UNKNOWN"] = 2] = "UNKNOWN";
    MangaStatus[MangaStatus["ABANDONED"] = 3] = "ABANDONED";
    MangaStatus[MangaStatus["HIATUS"] = 4] = "HIATUS";
})(MangaStatus = exports.MangaStatus || (exports.MangaStatus = {}));

},{}],27:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],28:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],29:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],30:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],31:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],32:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],33:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],34:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],35:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],36:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],37:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOperator = void 0;
var SearchOperator;
(function (SearchOperator) {
    SearchOperator["AND"] = "AND";
    SearchOperator["OR"] = "OR";
})(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = void 0;
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],40:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],41:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
/**
 * An enumerator which {@link SourceTags} uses to define the color of the tag rendered on the website.
 * Five types are available: blue, green, grey, yellow and red, the default one is blue.
 * Common colors are red for (Broken), yellow for (+18), grey for (Country-Proof)
 */
var TagType;
(function (TagType) {
    TagType["BLUE"] = "default";
    TagType["GREEN"] = "success";
    TagType["GREY"] = "info";
    TagType["YELLOW"] = "warning";
    TagType["RED"] = "danger";
})(TagType = exports.TagType || (exports.TagType = {}));

},{}],43:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],44:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],45:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],46:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],47:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Chapter"), exports);
__exportStar(require("./HomeSection"), exports);
__exportStar(require("./DynamicUI"), exports);
__exportStar(require("./ChapterDetails"), exports);
__exportStar(require("./Manga"), exports);
__exportStar(require("./MangaTile"), exports);
__exportStar(require("./RequestObject"), exports);
__exportStar(require("./SearchRequest"), exports);
__exportStar(require("./TagSection"), exports);
__exportStar(require("./SourceTag"), exports);
__exportStar(require("./Languages"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./MangaUpdate"), exports);
__exportStar(require("./PagedResults"), exports);
__exportStar(require("./ResponseObject"), exports);
__exportStar(require("./RequestManager"), exports);
__exportStar(require("./RequestHeaders"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./SourceStateManager"), exports);
__exportStar(require("./RequestInterceptor"), exports);
__exportStar(require("./TrackedManga"), exports);
__exportStar(require("./SourceManga"), exports);
__exportStar(require("./TrackedMangaChapterReadAction"), exports);
__exportStar(require("./TrackerActionQueue"), exports);
__exportStar(require("./SearchField"), exports);
__exportStar(require("./RawData"), exports);
__exportStar(require("./SearchFilter"), exports);

},{"./Chapter":5,"./ChapterDetails":6,"./Constants":7,"./DynamicUI":23,"./HomeSection":24,"./Languages":25,"./Manga":26,"./MangaTile":27,"./MangaUpdate":28,"./PagedResults":29,"./RawData":30,"./RequestHeaders":31,"./RequestInterceptor":32,"./RequestManager":33,"./RequestObject":34,"./ResponseObject":35,"./SearchField":36,"./SearchFilter":37,"./SearchRequest":38,"./SourceInfo":39,"./SourceManga":40,"./SourceStateManager":41,"./SourceTag":42,"./TagSection":43,"./TrackedManga":44,"./TrackedMangaChapterReadAction":45,"./TrackerActionQueue":46}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManager = void 0;
class CacheManager {
    constructor() {
        this.cachedData = {};
    }
    getHash(str) {
        let hash = 0;
        let chr;
        for (let i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
    getCachedData(str) {
        var _a;
        const time = new Date();
        const key = this.getHash(str);
        this.cachedData = Object.fromEntries(Object.entries(this.cachedData).filter(([_, value]) => 0 < (time.getTime() - value.time.getTime()) && (time.getTime() - value.time.getTime()) < 180 * 1000));
        return (_a = this.cachedData[key]) === null || _a === void 0 ? void 0 : _a.data;
    }
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    setCachedData(str, data) {
        this.cachedData[this.getHash(str)] = { time: new Date(), data: data };
    }
}
exports.CacheManager = CacheManager;

},{}],49:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.getOptions = exports.getAuthorizationString = exports.getKavitaAPIUrl = exports.DEFAULT_VALUES = exports.searchRequestToString = exports.reqeustToString = exports.getSeriesDetails = exports.getServerUnavailableMangaTiles = exports.KavitaRequestInterceptor = exports.KAVITA_PUBLICATION_STATUS = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
//
// Kavya Common Class & Methods
//
exports.KAVITA_PUBLICATION_STATUS = [
    paperback_extensions_common_1.MangaStatus.ONGOING,
    paperback_extensions_common_1.MangaStatus.HIATUS,
    paperback_extensions_common_1.MangaStatus.COMPLETED,
    paperback_extensions_common_1.MangaStatus.ABANDONED,
    paperback_extensions_common_1.MangaStatus.COMPLETED
];
class KavitaRequestInterceptor {
    constructor(stateManager) {
        this.stateManager = stateManager;
        this.authorization = '';
    }
    isServerAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.authorization === '') {
                yield this.updateAuthorization();
            }
            return this.authorization.startsWith('Bearer ');
        });
    }
    updateAuthorization() {
        return __awaiter(this, void 0, void 0, function* () {
            this.authorization = yield getAuthorizationString(this.stateManager);
        });
    }
    interceptResponse(response) {
        return __awaiter(this, void 0, void 0, function* () {
            return response;
        });
    }
    interceptRequest(request) {
        return __awaiter(this, void 0, void 0, function* () {
            request.headers = {
                'Authorization': this.authorization,
                'Content-Type': typeof request.data === 'string' ? 'application/json' : 'text/html'
            };
            return request;
        });
    }
}
exports.KavitaRequestInterceptor = KavitaRequestInterceptor;
function getServerUnavailableMangaTiles() {
    // This tile is used as a placeholder when the server is unavailable
    return [
        createMangaTile({
            id: 'placeholder-id',
            title: createIconText({ text: 'Server' }),
            image: '',
            subtitleText: createIconText({ text: 'unavailable' }),
        }),
    ];
}
exports.getServerUnavailableMangaTiles = getServerUnavailableMangaTiles;
function getSeriesDetails(mangaId, requestManager, stateManager) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        const kavitaAPIUrl = yield getKavitaAPIUrl(stateManager);
        const seriesRequest = createRequestObject({
            url: `${kavitaAPIUrl}/Series/${mangaId}`,
            method: 'GET',
        });
        const metadataRequest = createRequestObject({
            url: `${kavitaAPIUrl}/Series/metadata`,
            param: `?seriesId=${mangaId}`,
            method: 'GET',
        });
        const promises = [];
        promises.push(requestManager.schedule(seriesRequest, 1));
        promises.push(requestManager.schedule(metadataRequest, 1));
        const responses = yield Promise.all(promises);
        const seriesResult = typeof ((_a = responses[0]) === null || _a === void 0 ? void 0 : _a.data) === 'string' ? JSON.parse((_b = responses[0]) === null || _b === void 0 ? void 0 : _b.data) : (_c = responses[0]) === null || _c === void 0 ? void 0 : _c.data;
        const metadataResult = typeof ((_d = responses[1]) === null || _d === void 0 ? void 0 : _d.data) === 'string' ? JSON.parse((_e = responses[1]) === null || _e === void 0 ? void 0 : _e.data) : (_f = responses[1]) === null || _f === void 0 ? void 0 : _f.data;
        // exclude people tags for now
        const tagNames = ['genres', 'tags'];
        const tagSections = [];
        for (const tagName of tagNames) {
            const tags = [];
            for (const tag of metadataResult[tagName]) {
                tags.push(createTag({
                    id: `${tagName}-${tag.id}`,
                    label: tag.title
                }));
            }
            tagSections.push(createTagSection({
                id: tagName,
                label: tagName,
                tags: tags
            }));
        }
        return {
            id: mangaId,
            titles: [seriesResult.name],
            image: `${kavitaAPIUrl}/image/series-cover?seriesId=${mangaId}`,
            rating: seriesResult.userRating,
            status: (_g = exports.KAVITA_PUBLICATION_STATUS[metadataResult.publicationStatus]) !== null && _g !== void 0 ? _g : paperback_extensions_common_1.MangaStatus.UNKNOWN,
            artist: typeof metadataResult.pencillers[0] === 'undefined' ? '' : metadataResult.pencillers[0].name,
            author: typeof metadataResult.writers[0] === 'undefined' ? '' : metadataResult.writers[0].name,
            desc: metadataResult.summary.replace(/<[^>]+>/g, ''),
            tags: tagSections,
            lastUpdate: new Date(seriesResult.lastChapterAdded)
        };
    });
}
exports.getSeriesDetails = getSeriesDetails;
function reqeustToString(request) {
    return JSON.stringify({
        url: request.url,
        data: request.data,
        method: request.method
    });
}
exports.reqeustToString = reqeustToString;
function searchRequestToString(searchQuery) {
    var _a;
    return JSON.stringify({
        title: searchQuery.title,
        tags: (_a = searchQuery.includedTags) === null || _a === void 0 ? void 0 : _a.map(tag => tag.id)
    });
}
exports.searchRequestToString = searchRequestToString;
//
// Kavya Setting State Methods
//
// rome-ignore lint/suspicious/noExplicitAny: <explanation>
exports.DEFAULT_VALUES = {
    kavitaAddress: 'https://demo.kavitareader.com',
    kavitaAPIUrl: 'https://demo.kavitareader.com/api',
    kavitaAPIKey: '',
    showOnDeck: true,
    showRecentlyUpdated: true,
    showNewlyAdded: true,
    excludeBookTypeLibrary: false,
    enableRecursiveSearch: false,
    displayReadInstedOfUnread: true,
    pageSize: 40
};
function getKavitaAPIUrl(stateManager) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        return (_a = (yield stateManager.retrieve('kavitaAPIUrl'))) !== null && _a !== void 0 ? _a : exports.DEFAULT_VALUES.kavitaAPIUrl;
    });
}
exports.getKavitaAPIUrl = getKavitaAPIUrl;
function getAuthorizationString(stateManager) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const apiUri = (_a = (yield stateManager.retrieve('kavitaAPIUrl'))) !== null && _a !== void 0 ? _a : exports.DEFAULT_VALUES.kavitaAPIUrl;
        const apiKey = (_b = (yield stateManager.keychain.retrieve('kavitaAPIKey'))) !== null && _b !== void 0 ? _b : exports.DEFAULT_VALUES.kavitaAPIKey;
        const manager = createRequestManager({
            requestsPerSecond: 4,
            requestTimeout: 20000
        });
        const request = createRequestObject({
            url: `${apiUri}/Plugin/authenticate`,
            param: `?apiKey=${apiKey}&pluginName=Kavya`,
            method: 'POST',
        });
        const response = yield manager.schedule(request, 1);
        const token = typeof response.data === 'string' ? JSON.parse(response.data).token : undefined;
        return token ? `Bearer ${token}` : '';
    });
}
exports.getAuthorizationString = getAuthorizationString;
function getOptions(stateManager) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        const showOnDeck = (_a = (yield stateManager.retrieve('showOnDeck'))) !== null && _a !== void 0 ? _a : exports.DEFAULT_VALUES.showOnDeck;
        const showRecentlyUpdated = (_b = (yield stateManager.retrieve('showRecentlyUpdated'))) !== null && _b !== void 0 ? _b : exports.DEFAULT_VALUES.showRecentlyUpdated;
        const showNewlyAdded = (_c = (yield stateManager.retrieve('showNewlyAdded'))) !== null && _c !== void 0 ? _c : exports.DEFAULT_VALUES.showNewlyAdded;
        const excludeBookTypeLibrary = (_d = (yield stateManager.retrieve('excludeBookTypeLibrary'))) !== null && _d !== void 0 ? _d : exports.DEFAULT_VALUES.excludeBookTypeLibrary;
        const enableRecursiveSearch = (_e = (yield stateManager.retrieve('enableRecursiveSearch'))) !== null && _e !== void 0 ? _e : exports.DEFAULT_VALUES.enableRecursiveSearch;
        const displayReadInstedOfUnread = (_f = (yield stateManager.retrieve('displayReadInstedOfUnread'))) !== null && _f !== void 0 ? _f : exports.DEFAULT_VALUES.displayReadInstedOfUnread;
        const pageSize = (_g = (yield stateManager.retrieve('pageSize'))) !== null && _g !== void 0 ? _g : exports.DEFAULT_VALUES.pageSize;
        return { showOnDeck, showRecentlyUpdated, showNewlyAdded, excludeBookTypeLibrary, enableRecursiveSearch, displayReadInstedOfUnread, pageSize };
    });
}
exports.getOptions = getOptions;
//
// Kavya Logging Methods
//
function log(message) {
    console.log(`[Kavya] ${message}`);
}
exports.log = log;

},{"paperback-extensions-common":4}],50:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kavya = exports.KavyaInfo = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const CacheManager_1 = require("./CacheManager");
const Common_1 = require("./Common");
const Search_1 = require("./Search");
exports.KavyaInfo = {
    version: '1.0.0',
    name: 'Kavya Tracker',
    icon: 'icon.png',
    author: 'ACK72',
    authorWebsite: 'https://github.com/ACK72',
    description: 'Kavya Tracker for syncing read chapters to the Kavita',
    contentRating: paperback_extensions_common_1.ContentRating.EVERYONE,
    websiteBaseURL: 'https://www.kavitareader.com/',
    sourceTags: [
        {
            text: 'Tracker',
            type: paperback_extensions_common_1.TagType.BLUE,
        },
    ],
};
class Kavya extends paperback_extensions_common_1.Tracker {
    constructor() {
        super(...arguments);
        this.stateManager = createSourceStateManager({});
        this.cacheManager = new CacheManager_1.CacheManager();
        this.interceptor = new Common_1.KavitaRequestInterceptor(this.stateManager);
        this.requestManager = createRequestManager({
            requestsPerSecond: 5,
            requestTimeout: 20000,
            interceptor: this.interceptor
        });
    }
    getSourceMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            return createSection({
                id: 'information',
                header: 'Informations',
                rows: () => __awaiter(this, void 0, void 0, function* () {
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
                    ];
                })
            });
        });
    }
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    getSearchResults(searchQuery, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, Search_1.searchRequest)(searchQuery, metadata, this.requestManager, this.interceptor, this.stateManager, this.cacheManager);
        });
    }
    // @ts-ignore
    getMangaForm(mangaId) {
        return createForm({
            sections: () => __awaiter(this, void 0, void 0, function* () {
                const kavitaAPIUrl = yield (0, Common_1.getKavitaAPIUrl)(this.stateManager);
                const request = createRequestObject({
                    url: `${kavitaAPIUrl}/Series/${mangaId}`,
                    method: 'GET',
                });
                const response = yield this.requestManager.schedule(request, 1);
                const result = JSON.parse(response === null || response === void 0 ? void 0 : response.data);
                return [
                    createSection({
                        id: 'seriesInfo',
                        header: 'Info',
                        rows: () => __awaiter(this, void 0, void 0, function* () {
                            return [
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
                            ];
                        })
                    }),
                    createSection({
                        id: 'userReview',
                        header: 'Rating & Review',
                        rows: () => __awaiter(this, void 0, void 0, function* () {
                            var _a, _b;
                            return [
                                //@ts-ignore
                                createStepper({
                                    id: 'rating',
                                    label: 'Rating',
                                    value: (_a = result.userRating) !== null && _a !== void 0 ? _a : 0,
                                    min: 0,
                                    max: 5,
                                    step: 1
                                }),
                                createInputField({
                                    id: 'review',
                                    // @ts-ignore
                                    label: undefined,
                                    placeholder: 'Review',
                                    value: (_b = result.userReview) !== null && _b !== void 0 ? _b : '',
                                    maskInput: false
                                })
                            ];
                        })
                    })
                ];
            }),
            onSubmit: (values) => __awaiter(this, void 0, void 0, function* () {
                const kavitaAPIUrl = yield (0, Common_1.getKavitaAPIUrl)(this.stateManager);
                yield this.requestManager.schedule(createRequestObject({
                    url: `${kavitaAPIUrl}/Series/update-rating`,
                    data: JSON.stringify({ seriesId: mangaId, userRating: values.rating, userReview: values.review }),
                    method: 'POST'
                }), 1);
            }),
            validate: () => __awaiter(this, void 0, void 0, function* () { return true; })
        });
    }
    getTrackedManga(mangaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return createTrackedManga({
                id: mangaId,
                mangaInfo: createMangaInfo(Object.assign(Object.assign({}, (yield (0, Common_1.getSeriesDetails)(mangaId, this.requestManager, this.stateManager))), { 
                    // @ts-ignore
                    status: 'Reading' }))
            });
        });
    }
    processActionQueue(actionQueue) {
        return __awaiter(this, void 0, void 0, function* () {
            const chapterReadActions = yield actionQueue.queuedChapterReadActions();
            const kavitaAPIUrl = yield (0, Common_1.getKavitaAPIUrl)(this.stateManager);
            for (const readAction of chapterReadActions) {
                if (readAction.sourceId !== 'Kavya') {
                    (0, Common_1.log)(`Manga ${readAction.mangaId} from source ${readAction.sourceId} can not be used as it does not come from Kavya. Discarding`);
                    yield actionQueue.discardChapterReadAction(readAction);
                }
                else {
                    if (!(yield this.interceptor.isServerAvailable())) {
                        yield actionQueue.retryChapterReadAction(readAction);
                        continue;
                    }
                    try {
                        const chapterRequest = createRequestObject({
                            url: `${kavitaAPIUrl}/Reader/chapter-info`,
                            param: `?chapterId=${readAction.sourceChapterId}`,
                            method: 'GET',
                        });
                        const chapterResponse = yield this.requestManager.schedule(chapterRequest, 1);
                        const chapterResult = JSON.parse(chapterResponse === null || chapterResponse === void 0 ? void 0 : chapterResponse.data);
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
                        });
                        const progressResponse = yield this.requestManager.schedule(progressRequest, 1);
                        if (progressResponse.status < 400) {
                            yield actionQueue.discardChapterReadAction(readAction);
                        }
                        else {
                            yield actionQueue.retryChapterReadAction(readAction);
                        }
                    }
                    catch (error) {
                        (0, Common_1.log)(`Tracker action for manga id ${readAction.mangaId} failed with error: ${error}`);
                        yield actionQueue.retryChapterReadAction(readAction);
                    }
                }
            }
        });
    }
}
exports.Kavya = Kavya;

},{"./CacheManager":48,"./Common":49,"./Search":51,"paperback-extensions-common":4}],51:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRequest = void 0;
const Common_1 = require("./Common");
// rome-ignore lint/suspicious/noExplicitAny: <explanation>
const KAVITA_PERSON_ROLES = {
    '1': 'other',
    '2': 'artist',
    '3': 'writers',
    '4': 'penciller',
    '5': 'inker',
    '6': 'colorist',
    '7': 'letterer',
    '8': 'coverArtist',
    '9': 'editor',
    '10': 'publisher',
    '11': 'character',
    '12': 'translators' // KavitaAPI /api/series/all uses 'translators' instead of 'translator'
};
function searchRequest(searchQuery, 
// rome-ignore lint/suspicious/noExplicitAny: <explanation>
metadata, requestManager, interceptor, stateManager, cacheManager) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        // This function is also called when the user search in an other source. It should not throw if the server is unavailable.
        if (!(yield interceptor.isServerAvailable())) {
            (0, Common_1.log)('searchRequest failed because server settings are invalid');
            return createPagedResults({
                results: (0, Common_1.getServerUnavailableMangaTiles)(),
            });
        }
        const kavitaAPIUrl = yield (0, Common_1.getKavitaAPIUrl)(stateManager);
        const { enableRecursiveSearch, excludeBookTypeLibrary, pageSize } = yield (0, Common_1.getOptions)(stateManager);
        const page = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.page) !== null && _a !== void 0 ? _a : 0;
        const excludeLibraryIds = [];
        if (excludeBookTypeLibrary) {
            const request = createRequestObject({
                url: `${kavitaAPIUrl}/Library`,
                method: 'GET'
            });
            const response = yield requestManager.schedule(request, 1);
            const result = JSON.parse(response.data);
            for (const library of result) {
                if (library.type === 2) {
                    excludeLibraryIds.push(library.id);
                }
            }
        }
        const titleSearchIds = [];
        const tagSearchTiles = [];
        const titleSearchTiles = [];
        // rome-ignore lint/suspicious/noExplicitAny: <explanation>
        let result;
        if (cacheManager.getCachedData((0, Common_1.searchRequestToString)(searchQuery)) !== undefined) {
            result = cacheManager.getCachedData((0, Common_1.searchRequestToString)(searchQuery));
        }
        else {
            if (typeof searchQuery.title === 'string' && searchQuery.title !== '') {
                const titleRequest = createRequestObject({
                    url: `${kavitaAPIUrl}/Search/search`,
                    param: `?queryString=${encodeURIComponent(searchQuery.title)}`,
                    method: 'GET'
                });
                // We don't want to throw if the server is unavailable
                const titleResponse = yield requestManager.schedule(titleRequest, 1);
                const titleResult = JSON.parse(titleResponse.data);
                for (const manga of titleResult.series) {
                    if (excludeLibraryIds.includes(manga.libraryId)) {
                        continue;
                    }
                    titleSearchIds.push(manga.seriesId);
                    titleSearchTiles.push(createMangaTile({
                        id: `${manga.seriesId}`,
                        title: createIconText({ text: manga.name }),
                        image: `${kavitaAPIUrl}/image/series-cover?seriesId=${manga.seriesId}`
                    }));
                }
                if (enableRecursiveSearch) {
                    const tagNames = ['persons', 'genres', 'tags'];
                    for (const tagName of tagNames) {
                        for (const item of titleResult[tagName]) {
                            let titleTagRequest;
                            switch (tagName) {
                                case 'persons':
                                    titleTagRequest = createRequestObject({
                                        url: `${kavitaAPIUrl}/Series/all`,
                                        data: JSON.stringify({ [KAVITA_PERSON_ROLES[item.role]]: [item.id] }),
                                        method: 'POST'
                                    });
                                    break;
                                default:
                                    titleTagRequest = createRequestObject({
                                        url: `${kavitaAPIUrl}/Series/all`,
                                        data: JSON.stringify({ [tagName]: [item.id] }),
                                        method: 'POST'
                                    });
                            }
                            const titleTagResponse = yield requestManager.schedule(titleTagRequest, 1);
                            const titleTagResult = JSON.parse(titleTagResponse.data);
                            for (const manga of titleTagResult) {
                                if (!titleSearchIds.includes(manga.id)) {
                                    titleSearchIds.push(manga.id);
                                    titleSearchTiles.push(createMangaTile({
                                        id: `${manga.id}`,
                                        title: createIconText({ text: manga.name }),
                                        image: `${kavitaAPIUrl}/image/series-cover?seriesId=${manga.id}`
                                    }));
                                }
                            }
                        }
                    }
                }
            }
            if (typeof searchQuery.includedTags !== 'undefined') {
                // rome-ignore lint/suspicious/noExplicitAny: <explanation>
                let body = {};
                const peopleTags = [];
                searchQuery.includedTags.forEach((tag) => __awaiter(this, void 0, void 0, function* () {
                    var _c, _d, _e, _f, _g;
                    switch (tag.id.split('-')[0]) {
                        case 'people':
                            peopleTags.push(tag.label);
                            break;
                        default:
                            body[(_c = tag.id.split('-')[0]) !== null && _c !== void 0 ? _c : ''] = (_e = body[(_d = tag.id.split('-')[0]) !== null && _d !== void 0 ? _d : '']) !== null && _e !== void 0 ? _e : [];
                            body[(_f = tag.id.split('-')[0]) !== null && _f !== void 0 ? _f : ''].push(parseInt((_g = tag.id.split('-')[1]) !== null && _g !== void 0 ? _g : '0'));
                    }
                }));
                const peopleRequest = createRequestObject({
                    url: `${kavitaAPIUrl}/Metadata/people`,
                    method: 'GET'
                });
                const peopleResponse = yield requestManager.schedule(peopleRequest, 1);
                const peopleResult = JSON.parse(peopleResponse.data);
                for (const people of peopleResult) {
                    if (peopleTags.includes(people.name)) {
                        body[KAVITA_PERSON_ROLES[people.role]] = (_b = body[KAVITA_PERSON_ROLES[people.role]]) !== null && _b !== void 0 ? _b : [];
                        body[KAVITA_PERSON_ROLES[people.role]].push(people.id);
                    }
                }
                const tagRequst = createRequestObject({
                    url: `${kavitaAPIUrl}/Series/all`,
                    data: JSON.stringify(body),
                    method: 'POST'
                });
                const tagResponse = yield requestManager.schedule(tagRequst, 1);
                const tagResult = JSON.parse(tagResponse.data);
                for (const manga of tagResult) {
                    tagSearchTiles.push(createMangaTile({
                        id: `${manga.id}`,
                        title: createIconText({ text: manga.name }),
                        image: `${kavitaAPIUrl}/image/series-cover?seriesId=${manga.id}`,
                    }));
                }
            }
            result = (tagSearchTiles.length > 0 && titleSearchTiles.length > 0) ? tagSearchTiles.filter((value) => titleSearchTiles.some((target) => target.image === value.image)) : titleSearchTiles.concat(tagSearchTiles);
            cacheManager.setCachedData((0, Common_1.searchRequestToString)(searchQuery), result);
        }
        result = result.slice(page * pageSize, (page + 1) * pageSize);
        metadata = result.length === 0 ? undefined : { page: page + 1 };
        return createPagedResults({
            results: result,
            metadata: metadata
        });
    });
}
exports.searchRequest = searchRequest;

},{"./Common":49}]},{},[50])(50)
});
