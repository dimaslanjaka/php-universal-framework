/// <reference path="../../../../../libs/js/Codemirror.d.ts" />
/// <reference path="../../../../../libs/js/globals.d.ts" />
/// <reference path="../../../../../libs/js/Object.d.ts" />
/// <reference path="../../../../../libs/src/smartform/src/js/_a_Object.d.ts" />
/// <reference path="../../../../../libs/js/Date.d.ts" />
/// <reference path="../../../../../libs/js/alert.d.ts" />
/// <reference path="../../../../../libs/js/lib.dom.d.ts" />
/// <reference path="../../../../../libs/src/smartform/src/js/globals.d.ts" />
/// <reference path="../../../../../libs/src/smartform/src/js/index.d.ts" />
/// <reference types="crypto-js" />
/// <reference types="codemirror" />
/// <reference types="jquery" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="@types/google.analytics" />
/// <reference types="datatables.net" />
/// <reference lib="dom" />
declare class BotDetector {
    static Tests: {
        KEYUP: string;
        MOUSE: string;
        SWIPE: string;
        SWIPE_TOUCHSTART: string;
        SWIPE_TOUCHMOVE: string;
        SWIPE_TOUCHEND: string;
        SCROLL: string;
        GESTURE: string;
        GYROSCOPE: string;
        DEVICE_MOTION: string;
        DEVICE_ORIENTATION: string;
        DEVICE_ORIENTATION_MOZ: string;
    };
    isBot: boolean;
    tests: {};
    detected: boolean;
    cases: {};
    callback: any;
    timeout: any;
    allMatched: boolean;
    lastRotationData: any;
    constructor(args: any);
    update(notify?: boolean): void;
    bindEvent(e: any, type: any, handler?: any): void;
    unbindEvent(e: any, type: any, handle?: any): void;
    monitor(): void;
}
declare const CryptoJSAesJson: {
    stringify: (cipherParams: CryptoJS.lib.CipherParams) => string;
    parse: (jsonStr: string) => CryptoJS.lib.CipherParams;
};
/**
 * AES encrypt
 * @see /src/shim/Cipher.php
 * @param text
 * @param key
 * @returns
 */
declare function aesEncrypt(text: string, key: string | CryptoJS.lib.WordArray): string;
/**
 * AES decrypt
 * @see /src/shim/Cipher.php
 * @param encrypted
 * @param key
 * @returns
 */
declare function aesDecrypt(encrypted: string, key: string | CryptoJS.lib.WordArray): any;
declare const CodeMirrorAddon: {
    "CodeMirror-comment-comment": {
        js: string;
    };
    "CodeMirror-comment-continuecomment": {
        js: string;
    };
    "CodeMirror-dialog-dialog": {
        css: string;
        js: string;
    };
    "CodeMirror-display-autorefresh": {
        js: string;
    };
    "CodeMirror-display-fullscreen": {
        css: string;
        js: string;
    };
    "CodeMirror-display-panel": {
        js: string;
    };
    "CodeMirror-display-placeholder": {
        js: string;
    };
    "CodeMirror-display-rulers": {
        js: string;
    };
    "CodeMirror-edit-closebrackets": {
        js: string;
    };
    "CodeMirror-edit-closetag": {
        js: string;
    };
    "CodeMirror-edit-continuelist": {
        js: string;
    };
    "CodeMirror-edit-matchbrackets": {
        js: string;
    };
    "CodeMirror-edit-matchtags": {
        js: string;
    };
    "CodeMirror-edit-trailingspace": {
        js: string;
    };
    "CodeMirror-fold-brace-fold": {
        js: string;
    };
    "CodeMirror-fold-comment-fold": {
        js: string;
    };
    "CodeMirror-fold-foldcode": {
        js: string;
    };
    "CodeMirror-fold-foldgutter": {
        css: string;
        js: string;
    };
    "CodeMirror-fold-indent-fold": {
        js: string;
    };
    "CodeMirror-fold-markdown-fold": {
        js: string;
    };
    "CodeMirror-fold-xml-fold": {
        js: string;
    };
    "CodeMirror-hint-anyword-hint": {
        js: string;
    };
    "CodeMirror-hint-css-hint": {
        js: string;
    };
    "CodeMirror-hint-html-hint": {
        js: string;
    };
    "CodeMirror-hint-javascript-hint": {
        js: string;
    };
    "CodeMirror-hint-show-hint": {
        css: string;
        js: string;
    };
    "CodeMirror-hint-sql-hint": {
        js: string;
    };
    "CodeMirror-hint-xml-hint": {
        js: string;
    };
    "CodeMirror-lint-coffeescript-lint": {
        js: string;
    };
    "CodeMirror-lint-css-lint": {
        js: string;
    };
    "CodeMirror-lint-html-lint": {
        js: string;
    };
    "CodeMirror-lint-javascript-lint": {
        js: string;
    };
    "CodeMirror-lint-json-lint": {
        js: string;
    };
    "CodeMirror-lint-lint": {
        css: string;
        js: string;
    };
    "CodeMirror-lint-yaml-lint": {
        js: string;
    };
    "CodeMirror-merge-merge": {
        css: string;
        js: string;
    };
    "CodeMirror-mode-loadmode": {
        js: string;
    };
    "CodeMirror-mode-multiplex": {
        js: string;
    };
    "CodeMirror-mode-multiplex_test": {
        js: string;
    };
    "CodeMirror-mode-overlay": {
        js: string;
    };
    "CodeMirror-mode-simple": {
        js: string;
    };
    "CodeMirror-runmode-colorize": {
        js: string;
    };
    "CodeMirror-runmode-runmode-standalone": {
        js: string;
    };
    "CodeMirror-runmode-runmode": {
        js: string;
    };
    "CodeMirror-runmode-runmode.node": {
        js: string;
    };
    "CodeMirror-scroll-annotatescrollbar": {
        js: string;
    };
    "CodeMirror-scroll-scrollpastend": {
        js: string;
    };
    "CodeMirror-scroll-simplescrollbars": {
        css: string;
        js: string;
    };
    "CodeMirror-search-jump-to-line": {
        js: string;
    };
    "CodeMirror-search-match-highlighter": {
        js: string;
    };
    "CodeMirror-search-matchesonscrollbar": {
        css: string;
        js: string;
    };
    "CodeMirror-search-search": {
        js: string;
    };
    "CodeMirror-search-searchcursor": {
        js: string;
    };
    "CodeMirror-selection-active-line": {
        js: string;
    };
    "CodeMirror-selection-mark-selection": {
        js: string;
    };
    "CodeMirror-selection-selection-pointer": {
        js: string;
    };
    "CodeMirror-tern-tern": {
        css: string;
        js: string;
    };
    "CodeMirror-tern-worker": {
        js: string;
    };
    "CodeMirror-wrap-hardwrap": {
        js: string;
    };
};
declare let loadedTheme: any;
/**
 * CodeMirror script and style loader
 * @param opt
 */
declare function loadCodeMirrorScript(opt: {
    /**
     * @link https://codemirror.net/mode/
     */
    mode: CodeMirrorConfig["modes"];
    addons?: CodeMirrorConfig["addons"];
    theme?: CodeMirrorConfig["theme"];
    override?: CodeMirror.EditorConfiguration;
    callback?: () => any;
}): void;
/**
 * CodeMirror element initializer
 * @param opt
 */
declare function initCodeMirror(opt: {
    callback?: (el: HTMLTextAreaElement) => any;
    mode: CodeMirrorConfig["mode"];
    element: HTMLTextAreaElement;
    override?: CodeMirror.EditorConfiguration;
}): CodeMirror.EditorFromTextArea;
declare function codeMirrorRandomTheme(): any;
/**
 * Cookie Helper
 * @author Dimas Lanjaka <dimaslanjaka@gmail.com>
 * @see http://localhost/src/Cookie/helper.php
 */
declare class Cookies {
    private static logged;
    /**
     * Get cookie value by cookie name
     * @param c_name
     * @returns null if cookie not exists
     */
    static get(c_name: string): string | Object | null;
    /**
     * Check cookie exists
     * @param c_name cookie name
     */
    static has(c_name: string): boolean;
    /**
     * Create cookie expiring in days
     * @param name cookie name
     * @param value cookie value
     * @param expire
     * @param expire_type d = days, m = minutes, s = seconds, default seconds
     * @param path
     * @param callback
     */
    static set(name: string, value: any, expire: number | string, expire_type?: string | null, path?: string | any | null, callback?: any | Function | null): any;
    /**
     * Delete Cookie
     * @param name cookie name
     */
    static del(name: string): void;
    /**
     * Get all cookies
     */
    static all(): {};
    /**
     * Call function if cookie name not set
     * @param name
     * @param value
     * @param expire Expires number (minutes)
     * @param callback Function callback to be executed one time
     */
    static one(name: string, value: any, expire: number, callback: Function): void;
    private static logging;
    /**
     * decompress cookie
     * @param str
     */
    private static decompress;
    /**
     * compress cookie
     * @param str
     */
    private static compress;
}
/**
 * Get key
 * @param {string} passphrase
 * @param {string} salt
 */
declare function getKey(passphrase: string, salt: string): CryptoJS.lib.WordArray;
/**
 * Encrypt function
 * @param {string} passphrase
 * @param {string} plainText
 */
declare function userJSEncrypt(passphrase: string, plainText: string): string;
/**
 * Decrypt function
 * @param {string} passphrase
 * @param {string} encryptedText
 */
declare function userJSDecrypt(passphrase: string, encryptedText: string): string;
/**
 * Crypto get key
 * @param {String} passphrase
 * @param {String} salt
 */
declare function CryptoK(passphrase: string, salt: string): CryptoJS.lib.WordArray;
/**
 * Crypto encrypt
 * @param {String} passphrase
 * @param {String} plainText
 * @param {String} salt
 * @param {String} iv
 */
declare function CryptoE(passphrase: string, plainText: string, salt: string, iv: string): string;
/**
 * Crypto decrypt
 * @param {String} passphrase
 * @param {String} encryptedText
 * @param {String} salt
 * @param {String} iv
 */
declare function CryptoD(passphrase: string, encryptedText: string, salt: string, iv: string): string;
/**
 * @todo CryptoJS
 * @package https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js
 */
declare var salt: string;
declare var iv: string;
declare var iterations: string;
/**
 * @class Generate unique id
 */
declare class GeneratorID {
    private rand;
    constructor();
    /**
     * Increase new id
     */
    genId(): number;
    getId(): string;
}
/**
 * @param {createElementOpt} options
 */
declare function createElement(options: createElementOpt): HTMLElement | DocumentFragment;
declare function createElement(params: createElementOpt): any;
declare class html {
    static create(options: any): any;
}
/**
 * Detect is mobile
 */
declare function isMobile(): boolean;
declare function get_device(): {
    screen: string;
    browser: string;
    browserVersion: string;
    browserMajorVersion: number;
    mobile: boolean;
    os: string;
    osVersion: string | RegExpExecArray | number[];
    cookies: boolean;
    flashVersion: string;
};
/** Add one or more listeners to an element
 * @param element - DOM element to add listeners to
 * @param eventNames - space separated list of event names, e.g. 'click change'
 * @param listener - function to attach for each event as a listener
 */
declare function setEventListener(element: HTMLElement, eventNames: "click" | "mouseover" | "submit" | "change", listener: EventListenerOrEventListenerObject): void;
interface serializeArrayResult {
    name: string;
    value: string;
}
/**
 * Serialize all form data into an array of key/value pairs
 * (c) 2020 Chris Ferdinandi, MIT License, [https://gomakethings.com]{@link https://gomakethings.com}
 * @param form The form to serialize
 * @return The serialized form data
 * @see [Codepen Demo]{@link https://codepen.io/cferdinandi/pen/VwvMdOG}
 * @see [Source Code]{@link https://vanillajstoolkit.com/helpers/serializearray/}
 * @example
 * var form = document.querySelector('#FormID');
 * var data = serializeArray(form);
 * console.log(data);
 */
declare function serializeArray(form: HTMLFormElement): serializeArrayResult[];
/**
 * Transform {@link serializeArray} into object key value
 * @param obj
 * @see serializeArray
 * @returns
 */
declare function serializeArray2Object(obj: serializeArrayResult[]): object;
declare class STORAGE {
    /**
     * Reflection class constructor
     * @see https://stackoverflow.com/questions/43431550/async-await-class-constructor
     * @param callback
     * @example
     * var myObj = new myClass();
     * myObj.init(function() {
     *    // inside here you can use myObj
     * });
     */
    init(callback: Function): void;
    /**
     * get localstorage by key
     * @param key
     */
    get(key: string): any;
    /**
     * Set localstorage key value
     * @param key
     * @param value
     */
    set(key: string, value: any): void;
    /**
     * Check localstorage key exists
     * @param key
     */
    has(key: string): boolean;
    /**
     * Extend or set localstorage key
     * @param key
     * @param value
     */
    extend(key: string, value: string): void;
    /**
     * Remove localstorage key
     * @param key
     */
    remove(key: string): void;
}
/**
 * localStorage helper
 */
declare function storage(): STORAGE;
/**
 * Join object to separated string
 * @param obj Object
 * @returns Joined string
 */
declare function object_join(obj: object): string;
/**
 * Extend Object
 * @param arg1
 * @param arg2
 * @returns
 */
declare function extend_object<T1 extends object, T2 extends object>(arg1: T1, arg2: T2): T1 & T2;
interface ipapi_response {
    ip: "114.4.83.195";
    city: "Jakarta";
    region: "Jakarta";
    region_code: "JK";
    country: "ID";
    country_code: "ID";
    country_code_iso3: "IDN";
    country_capital: "Jakarta";
    country_tld: ".id";
    country_name: "Indonesia";
    continent_code: "AS";
    in_eu: false;
    postal: null;
    latitude: -6.1741;
    longitude: 106.8296;
    timezone: "Asia/Jakarta";
    utc_offset: "+0700";
    country_calling_code: "+62";
    currency: "IDR";
    currency_name: "Rupiah";
    languages: "id,en,nl,jv";
    country_area: 1919440.0;
    country_population: 242968342.0;
    asn: "AS4761";
    org: "INDOSAT Internet Network Provider";
}
declare const cookie_ip: string;
declare const cookie_indicator: string;
/**
 * IP Address class
 * @class get, check, validate ip address
 */
declare class ip {
    static storage: STORAGE;
    /**
     * Gets ip
     * @param callback function callback(ip) or null return ip
     * @returns {String} ip or callback
     */
    static get(callback?: Function): string;
    /**
     * Retrieve ip from ipapi.co
     */
    static ipapi(): JQuery.jqXHR<any>;
    /**
     * Retrieve api from l2.io
     */
    static l2io(): JQuery.jqXHR<any>;
    /**
     * Retrieve ip from cloudflare.com
     */
    static cloudflare(): JQuery.jqXHR<any>;
    /**
     * Check if the ip has been applied
     * @private
     */
    private static status;
    /**
     * Checks ip
     * @returns promises
     */
    private static check;
    /**
     * Save ip to cookie and localstorage
     * @param ip
     * @private
     */
    private static save;
    /**
     * Reflection class constructor
     * @see https://stackoverflow.com/questions/43431550/async-await-class-constructor
     * @param callback
     * @example
     * var myObj = new myClass();
     * myObj.init(function() {
     *    // inside here you can use myObj
     * });
     */
    init(callback: Function): void;
}
/**
 * Get unique id of machine
 */
declare function get_unique_id(): string | Object;
/**
 * Automatically expand a textarea as the user types
 * (c) 2021 Chris Ferdinandi, MIT License, [https://gomakethings.com]{@link https://gomakethings.com}
 * @param field The textarea
 */
declare function autoExpand(field: HTMLFormElement): void;
/**
 * get url parameter by name
 * @param name parameter name
 * @param url url target, null for current location.href
 * @see https://stackoverflow.com/a/901144
 * @returns
 * @example
 * ```js
 * // query string: ?foo=lorem&bar=&baz
 * var foo = getParameterByName('foo'); // "lorem"
 * var bar = getParameterByName('bar'); // "" (present with empty value)
 * var baz = getParameterByName('baz'); // "" (present with no value)
 * var qux = getParameterByName('qux'); // null (absent)
 * ```
 */
declare function getParameterByName(name: string, url?: string | null): string;
/**
 * Autofill datetime-local value
 */
declare function datetimelocal(v?: string | number): void;
/**
 * @class Timer constructor
 * @example
 * const time = new Timer(() => console.log('hi'), 1000);
 * console.log(time instanceof Timer); // true
 */
declare class Timer {
    private timeId;
    constructor(callback: Function, time: number);
    clear(): void;
}
declare function array_filter(array: []): never[];
/**
 * pick random from array
 * @param {Array<any>} arrays
 * @param {boolean} unique Unique the arrays
 */
declare function array_rand(arrays: any[], unique: any): {
    index: number;
    value: any;
};
/**
 * Array unique
 * @param {Array<any>} arrays
 */
declare function array_unique(arrays: any[]): any[];
/**
 * Unset array
 * @param {Array<any>} arrayName
 * @param {String|number} key
 */
declare function array_unset(arrayName: {
    [x: string]: any;
}, key: any): any[];
/**
 * PHP shuffle array equivalent
 * @param array
 * @example
 * var arr = [2, 11, 37, 42];
 * shuffle(arr);
 * console.log(arr); //return random
 */
declare function shuffle(array: Array<any>): any[];
declare function arrayCompare(a1: Array<any>, a2: Array<any>): boolean;
/**
 * in_array PHP equivalent
 * @param needle string etc
 * @param haystack
 */
declare function inArray(needle: any, haystack: Array<any>): boolean;
/**
 * in_array PHP equivalent
 * @param needle string etc
 * @param haystack
 */
declare function in_array(needle: any, haystack: Array<any>): boolean;
/**
 * get all keys
 * @param haystack string etc
 */
declare function array_keys(haystack: any): string[];
/**
 * Shuffles array in place.
 * @param a items An array containing the items.
 */
declare function array_shuffle(a: Array<any>): any[];
/**
 * Deep merge two or more objects into the first.
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param objects  The objects to merge together
 * @returns Merged values of defaults and options
 */
declare function deepAssign(...objects: object[]): object;
declare function datetime_local(date: any): string;
declare interface Number {
    getMS(type: string): number;
    /**
     * Get X Hour from date
     * @return number ms from Date().getTime()
     * @example
     * get `1 hour from current Date()`
     * 1.addHour()
     * get `1 hour from spesific Date()`
     * 1.addHour(new Date('2020-06-04 01:10:53'))
     */
    addHour(source: Date | null): number;
    /**
     * add zero leading
     * @param add
     * @param target
     */
    AddZero(add: number, target: string): number;
}
/**
 * Odd or Even (Ganjil Genap);
 * @param n
 * @param type odd or even
 */
declare function oddoreven(n: string, type: string): boolean;
/**
 * strpad / startwith zero [0]
 * @param {number} val
 */
declare function strpad(val: number): string | number;
/**
 * More accurately check the type of a JavaScript object
 * (c) 2021 Chris Ferdinandi, MIT License, [https://gomakethings.com]{@link https://gomakethings.com}
 * @param  {Object} obj The object
 * @return {String}     The object type
 * @see [Codepen]{@link https://codepen.io/cferdinandi/pen/aXzNze}
 * @see [Source]{@link https://vanillajstoolkit.com/helpers/truetypeof/}
 */
declare function trueTypeOf(obj: object): string;
declare const siteConfig: {
    google: {
        key: string;
        recaptcha: {
            key: string;
        };
        analystics: {
            id: string;
        };
    };
};
declare let root: any;
/**
 * Is Node ?
 */
declare function isnode(): any;
/**
 * Class reflection
 * @see https://stackoverflow.com/a/1250766
 * @param obj
 */
declare function getNativeClass(obj: any): any;
/**
 * Class reflection
 * @see https://stackoverflow.com/a/1250766
 * @param obj
 */
declare function getAnyClass(obj: any): any;
/**
 * call_user_func
 * @param functionName function name
 */
declare function ___call(functionName: string, context?: Window, args?: any): void;
/**
 * call_user_func
 * @param functionName
 * @param context
 * @param args
 */
declare function call_user_func(functionName: string, context: Window & typeof globalThis, args: any): any;
/**
 * Make function async
 * @param callback
 */
declare function async_this(callback: Function): Promise<any>;
/**
 * call_user_func
 * @param func function name
 */
declare function __call(func: string): void;
/**
 * check empty
 * @param str
 */
declare function empty(str: string | object | Array<any> | boolean | null | undefined | number): number | boolean;
/**
 * Get current function name
 */
declare function getFuncName(): string;
/**
 * Is Development Mode
 */
declare function is_development(): boolean;
/**
 * Generate random string with length
 * @param length length to generate
 * @global
 * @see https://dev.to/oyetoket/fastest-way-to-generate-random-strings-in-javascript-2k5a
 */
declare const generateRandomString: (length?: number) => string;
/**
 * Create uniqueid with prefix or suffix
 * @param prefix
 * @param suffix
 */
declare function uniqid(prefix: any, suffix: any): string;
/**
 * Get unique array
 * @param {any} value
 * @param {any} index
 * @param {any[]} self
 * @example dataArray.filter(onlyUnique)
 */
declare function onlyUnique(value: any, index: any, self: any[]): boolean;
/**
 * Parse string to float/number
 * @param total_amount_string string including numbers
 */
declare function parseNumber(total_amount_string: string): number;
declare function typedKeys<T>(o: T): (keyof T)[];
/**
 * Console Controller
 */
interface Console {
    olog: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
}
declare let console_callback: any;
/**
 * Get stacktrace
 */
declare function stacktrace(): any;
declare function pageid(length: number): string;
declare const randstr: (length?: number) => string;
/**
 * check string is json
 * @param {string} str
 * @description check validate json
 */
declare function isJSON(str: string): boolean;
declare function processAjaxForm(xhr: JQueryXHR, callback: string | Function): void;
/**
 * Custom ajax
 * @param settings ajax settings object
 */
declare function ajx(settings: JQueryAjaxSettings, success: null | Function, failed: null | Function, complete: null | Function): JQuery.jqXHR<any>;
/**
 * Handling form with ajax
 * @requires data-success success function name
 * @requires data-error error function name
 * @requires data-complete complete function name
 */
declare function AjaxForm(): void;
/**
 * process page asynchronously
 * @param source_cache url
 */
declare function async_process(source_cache: string): void;
/**
 * default ajax jquery request with unique ID
 * @param settings Jquery ajax settings
 */
declare function jAjax(settings: JQueryAjaxSettings): JQuery.jqXHR<any>;
declare let AjaxSchedulerInit: NodeJS.Timer | any;
declare let AjaxSchedulerRequests: Array<any>;
declare let AjaxSchedulerRunning: Boolean;
/**
 * AJAX MANAGER
 * @todo handle ajax request queue
 * @see https://bit.ly/2Tz0wrf
 */
declare class ajaxScheduler {
    /**
     * Add ajax to queues
     * @param opt
     */
    static add(opt: JQueryAjaxSettings): void;
    /**
     * Remove ajax from queues
     * @param opt
     */
    static remove(opt: Object): void;
    /**
     * Run Ajax Scheduler
     */
    static run(): boolean;
    /**
     * Stop ajax scheduler
     */
    static stop(): void;
}
/**
 * RUN AJAX Scheduler
 * @param url
 * @param method POST, GET, HEAD, DELETE, OPTIONS, PATCH, PROPATCH
 * @param data
 * @param success
 * @param failed
 * @param complete
 * @description ajax request one by one
 * @todo scheduling any jquery ajax
 */
declare function ajaxRun(url: string, method: string, data: object, success: Function, failed: Function, complete: Function): void;
declare function ajaxFormSchedule(): void;
declare function ajax(): {
    (): any;
    x(): any;
    send(url: any, callback: any, method: any, data: any, async: any): void;
    get(url: any, data: any, callback: any, async: any): void;
    post(url: any, data: any, callback: any, async: any): void;
};
declare namespace ajax {
    function x(): any;
    function send(url: any, callback: any, method: any, data: any, async: any): void;
    function get(url: any, data: any, callback: any, async: any): void;
    function post(url: any, data: any, callback: any, async: any): void;
}
/**
 * Bootstrap Alert Generator
 * @example createAlert(
 "[title] Opps!",
 "[description] Something went wrong",
 "[details] Here is a bunch of text about some stuff that happened.",
 "[mode|bg-color] danger",
 true, false,
 { position: "fixed", bottom: "15px", right: "15px" });
 */
declare function createAlert(
/**
 * Title alert
 */
title: string, 
/**
 * Summary description
 */
summary: string, 
/**
 * Another description
 */
details: string, 
/**
 * basic class bootstrap or you can insert color name
 */
severity: "success" | "error" | "warning" | "info" | "danger", 
/**
 * can be closed ?
 */
dismissible: boolean, 
/**
 * auto closed ?
 */
autoDismiss: boolean, 
/**
 * Fill `CSSProperties` object or insert CSS object string
 * @example {position: 'fixed', top: '5px', right: '5px'}
 * @example 'position:fixed;top:10px;left:10px;'
 */
options: React.CSSProperties | string): void;
/**
 * Create style css dynamic
 * @example css = 'h1 { background: red; }'
 * @example arributes = {id: 'customStyle', media: 'all'}
 * @param css
 */
declare function createStyle(css: string, attributes?: {}): void;
declare let gtag: Window["gtag"] | UniversalAnalytics.ga;
declare let ORIGIN: any;
declare let IP: string;
declare class dimas {
    /**
     * get current url without querystrings
     */
    static url: any;
    static ip: any;
    /**
     * framework captcha
     */
    static captcha: {
        /**
         * DO NOT ASSIGN THIS
         */
        check: NodeJS.Timer;
        /**
         * Get current captcha id
         */
        id(header_name: string | null): string;
        /**
         * Get current captcha from backend
         * And process it by jsonpCallback
         */
        get(header_name: null | string): void;
        callback(arg?: any): void;
        /**
         * Captcha JSONP callback
         */
        jspCallback(res: {
            captcha: string;
        }): void;
        listener_started: any;
        /**
         * Form Captcha listener
         */
        listen(): JQuery<Document>;
    };
    static setIp(ip: any): void;
    static getIp(): any;
    /**
     * Count Array/Object/String length
     * @param {any[]|string|object} data
     */
    count(data: any[] | string | object): number;
    /**
     * Make async function
     * @param callback
     */
    async(callback: any): Promise<unknown>;
    /**
     * Check if variable is number / numeric
     * @param {String|Number} v
     */
    isNumber(v: string | number): boolean;
    /**
     * Check if valid url
     * @param url url address
     */
    isURL(url: string): boolean;
    /**
     * Check url is valid and reachable
     * @param url url address
     * @param callback callback function
     */
    isURLReachable(url: string, callback: (arg0: boolean, arg1: string) => any): void;
    /**
     * Get Query name from current url
     */
    getquery(variable: any): string | false;
    recode(content: string, passcode: string): string;
    /**
     * Countdown trigger
     * @param {JQuery} elm
     */
    pctdRUN(elm: JQuery): any;
    /**
     * Progress Countdown
     * @param {JQuery} elm
     */
    pctd(elm: JQuery): void;
    /**
     * Parseurl just like as parse_url at php
     */
    parseurl(url: string): {
        protocol: string;
        host: string;
        hostname: string;
        port: string;
        pathname: string;
        search: string;
        searchObject: {};
        hash: string;
        protohost: string;
    };
}
/**
 * Framework object initializer
 */
declare function framework(): dimas;
declare class app {
    static base: string;
    static setbase(path: string): void;
    static direct(...args: string[]): void;
    static load(...args: any[]): void;
}
/**
 * base64 encoding
 * @param {string} str string raw
 */
declare function base64_encode(str: string): string;
/**
 * Check if base64 is valid
 * @param {string} str
 */
declare function base64_valid(str: string): boolean;
/**
 * base64 decoding
 * @param {string} str base64 string
 */
declare function base64_decode(str: string): string;
declare function b64EncodeUnicode(str: any): string;
declare function b64DecodeUnicode(str: any): string;
declare namespace Base64 {
    const _keyStr: string;
    function encode(input: any): string;
    function decode(input: any): string;
    function _utf8_encode(string: any): string;
    function _utf8_decode(utftext: any): string;
}
/**
 * Random HEX
 * @returns HEX number without HASH(#)
 */
declare function randomHex(): string;
/**
 * open in new tab
 * @param url
 * @param name
 */
declare function openInNewTab(url: string, name: string): void;
/**
 * Disabling button
 * @param t element of button
 */
declare function disable_button(t: JQuery<HTMLButtonElement> | HTMLButtonElement): void;
/**
 * Enabling button
 * @param t element of button
 */
declare function enable_button(t: JQuery<HTMLButtonElement> | HTMLButtonElement): void;
/**
 * @see https://gist.githubusercontent.com/tmrk/4aa3cf285360526a98b2115d63e0cafd/raw/5e74803dcf33923257d081433ec92ba93765e3f3/countries.js
 * @global
 * iso countries
 */
declare const isoCountries: {
    name: string;
    alpha2: string;
    alpha3: string;
    num3: string;
    subregion: string;
    region: string;
    continent: string;
}[];
/**
 * @author Phil Teare
 * @global
 * iso languanges using wikipedia data
 */
declare const isoLangs: {
    ab: {
        name: string;
        nativeName: string;
    };
    aa: {
        name: string;
        nativeName: string;
    };
    af: {
        name: string;
        nativeName: string;
    };
    ak: {
        name: string;
        nativeName: string;
    };
    sq: {
        name: string;
        nativeName: string;
    };
    am: {
        name: string;
        nativeName: string;
    };
    ar: {
        name: string;
        nativeName: string;
    };
    an: {
        name: string;
        nativeName: string;
    };
    hy: {
        name: string;
        nativeName: string;
    };
    as: {
        name: string;
        nativeName: string;
    };
    av: {
        name: string;
        nativeName: string;
    };
    ae: {
        name: string;
        nativeName: string;
    };
    ay: {
        name: string;
        nativeName: string;
    };
    az: {
        name: string;
        nativeName: string;
    };
    bm: {
        name: string;
        nativeName: string;
    };
    ba: {
        name: string;
        nativeName: string;
    };
    eu: {
        name: string;
        nativeName: string;
    };
    be: {
        name: string;
        nativeName: string;
    };
    bn: {
        name: string;
        nativeName: string;
    };
    bh: {
        name: string;
        nativeName: string;
    };
    bi: {
        name: string;
        nativeName: string;
    };
    bs: {
        name: string;
        nativeName: string;
    };
    br: {
        name: string;
        nativeName: string;
    };
    bg: {
        name: string;
        nativeName: string;
    };
    my: {
        name: string;
        nativeName: string;
    };
    ca: {
        name: string;
        nativeName: string;
    };
    ch: {
        name: string;
        nativeName: string;
    };
    ce: {
        name: string;
        nativeName: string;
    };
    ny: {
        name: string;
        nativeName: string;
    };
    zh: {
        name: string;
        nativeName: string;
    };
    cv: {
        name: string;
        nativeName: string;
    };
    kw: {
        name: string;
        nativeName: string;
    };
    co: {
        name: string;
        nativeName: string;
    };
    cr: {
        name: string;
        nativeName: string;
    };
    hr: {
        name: string;
        nativeName: string;
    };
    cs: {
        name: string;
        nativeName: string;
    };
    da: {
        name: string;
        nativeName: string;
    };
    dv: {
        name: string;
        nativeName: string;
    };
    nl: {
        name: string;
        nativeName: string;
    };
    en: {
        name: string;
        nativeName: string;
    };
    eo: {
        name: string;
        nativeName: string;
    };
    et: {
        name: string;
        nativeName: string;
    };
    ee: {
        name: string;
        nativeName: string;
    };
    fo: {
        name: string;
        nativeName: string;
    };
    fj: {
        name: string;
        nativeName: string;
    };
    fi: {
        name: string;
        nativeName: string;
    };
    fr: {
        name: string;
        nativeName: string;
    };
    ff: {
        name: string;
        nativeName: string;
    };
    gl: {
        name: string;
        nativeName: string;
    };
    ka: {
        name: string;
        nativeName: string;
    };
    de: {
        name: string;
        nativeName: string;
    };
    el: {
        name: string;
        nativeName: string;
    };
    gn: {
        name: string;
        nativeName: string;
    };
    gu: {
        name: string;
        nativeName: string;
    };
    ht: {
        name: string;
        nativeName: string;
    };
    ha: {
        name: string;
        nativeName: string;
    };
    he: {
        name: string;
        nativeName: string;
    };
    hz: {
        name: string;
        nativeName: string;
    };
    hi: {
        name: string;
        nativeName: string;
    };
    ho: {
        name: string;
        nativeName: string;
    };
    hu: {
        name: string;
        nativeName: string;
    };
    ia: {
        name: string;
        nativeName: string;
    };
    id: {
        name: string;
        nativeName: string;
    };
    ie: {
        name: string;
        nativeName: string;
    };
    ga: {
        name: string;
        nativeName: string;
    };
    ig: {
        name: string;
        nativeName: string;
    };
    ik: {
        name: string;
        nativeName: string;
    };
    io: {
        name: string;
        nativeName: string;
    };
    is: {
        name: string;
        nativeName: string;
    };
    it: {
        name: string;
        nativeName: string;
    };
    iu: {
        name: string;
        nativeName: string;
    };
    ja: {
        name: string;
        nativeName: string;
    };
    jv: {
        name: string;
        nativeName: string;
    };
    kl: {
        name: string;
        nativeName: string;
    };
    kn: {
        name: string;
        nativeName: string;
    };
    kr: {
        name: string;
        nativeName: string;
    };
    ks: {
        name: string;
        nativeName: string;
    };
    kk: {
        name: string;
        nativeName: string;
    };
    km: {
        name: string;
        nativeName: string;
    };
    ki: {
        name: string;
        nativeName: string;
    };
    rw: {
        name: string;
        nativeName: string;
    };
    ky: {
        name: string;
        nativeName: string;
    };
    kv: {
        name: string;
        nativeName: string;
    };
    kg: {
        name: string;
        nativeName: string;
    };
    ko: {
        name: string;
        nativeName: string;
    };
    ku: {
        name: string;
        nativeName: string;
    };
    kj: {
        name: string;
        nativeName: string;
    };
    la: {
        name: string;
        nativeName: string;
    };
    lb: {
        name: string;
        nativeName: string;
    };
    lg: {
        name: string;
        nativeName: string;
    };
    li: {
        name: string;
        nativeName: string;
    };
    ln: {
        name: string;
        nativeName: string;
    };
    lo: {
        name: string;
        nativeName: string;
    };
    lt: {
        name: string;
        nativeName: string;
    };
    lu: {
        name: string;
        nativeName: string;
    };
    lv: {
        name: string;
        nativeName: string;
    };
    gv: {
        name: string;
        nativeName: string;
    };
    mk: {
        name: string;
        nativeName: string;
    };
    mg: {
        name: string;
        nativeName: string;
    };
    ms: {
        name: string;
        nativeName: string;
    };
    ml: {
        name: string;
        nativeName: string;
    };
    mt: {
        name: string;
        nativeName: string;
    };
    mi: {
        name: string;
        nativeName: string;
    };
    mr: {
        name: string;
        nativeName: string;
    };
    mh: {
        name: string;
        nativeName: string;
    };
    mn: {
        name: string;
        nativeName: string;
    };
    na: {
        name: string;
        nativeName: string;
    };
    nv: {
        name: string;
        nativeName: string;
    };
    nb: {
        name: string;
        nativeName: string;
    };
    nd: {
        name: string;
        nativeName: string;
    };
    ne: {
        name: string;
        nativeName: string;
    };
    ng: {
        name: string;
        nativeName: string;
    };
    nn: {
        name: string;
        nativeName: string;
    };
    no: {
        name: string;
        nativeName: string;
    };
    ii: {
        name: string;
        nativeName: string;
    };
    nr: {
        name: string;
        nativeName: string;
    };
    oc: {
        name: string;
        nativeName: string;
    };
    oj: {
        name: string;
        nativeName: string;
    };
    cu: {
        name: string;
        nativeName: string;
    };
    om: {
        name: string;
        nativeName: string;
    };
    or: {
        name: string;
        nativeName: string;
    };
    os: {
        name: string;
        nativeName: string;
    };
    pa: {
        name: string;
        nativeName: string;
    };
    pi: {
        name: string;
        nativeName: string;
    };
    fa: {
        name: string;
        nativeName: string;
    };
    pl: {
        name: string;
        nativeName: string;
    };
    ps: {
        name: string;
        nativeName: string;
    };
    pt: {
        name: string;
        nativeName: string;
    };
    qu: {
        name: string;
        nativeName: string;
    };
    rm: {
        name: string;
        nativeName: string;
    };
    rn: {
        name: string;
        nativeName: string;
    };
    ro: {
        name: string;
        nativeName: string;
    };
    ru: {
        name: string;
        nativeName: string;
    };
    sa: {
        name: string;
        nativeName: string;
    };
    sc: {
        name: string;
        nativeName: string;
    };
    sd: {
        name: string;
        nativeName: string;
    };
    se: {
        name: string;
        nativeName: string;
    };
    sm: {
        name: string;
        nativeName: string;
    };
    sg: {
        name: string;
        nativeName: string;
    };
    sr: {
        name: string;
        nativeName: string;
    };
    gd: {
        name: string;
        nativeName: string;
    };
    sn: {
        name: string;
        nativeName: string;
    };
    si: {
        name: string;
        nativeName: string;
    };
    sk: {
        name: string;
        nativeName: string;
    };
    sl: {
        name: string;
        nativeName: string;
    };
    so: {
        name: string;
        nativeName: string;
    };
    st: {
        name: string;
        nativeName: string;
    };
    es: {
        name: string;
        nativeName: string;
    };
    su: {
        name: string;
        nativeName: string;
    };
    sw: {
        name: string;
        nativeName: string;
    };
    ss: {
        name: string;
        nativeName: string;
    };
    sv: {
        name: string;
        nativeName: string;
    };
    ta: {
        name: string;
        nativeName: string;
    };
    te: {
        name: string;
        nativeName: string;
    };
    tg: {
        name: string;
        nativeName: string;
    };
    th: {
        name: string;
        nativeName: string;
    };
    ti: {
        name: string;
        nativeName: string;
    };
    bo: {
        name: string;
        nativeName: string;
    };
    tk: {
        name: string;
        nativeName: string;
    };
    tl: {
        name: string;
        nativeName: string;
    };
    tn: {
        name: string;
        nativeName: string;
    };
    to: {
        name: string;
        nativeName: string;
    };
    tr: {
        name: string;
        nativeName: string;
    };
    ts: {
        name: string;
        nativeName: string;
    };
    tt: {
        name: string;
        nativeName: string;
    };
    tw: {
        name: string;
        nativeName: string;
    };
    ty: {
        name: string;
        nativeName: string;
    };
    ug: {
        name: string;
        nativeName: string;
    };
    uk: {
        name: string;
        nativeName: string;
    };
    ur: {
        name: string;
        nativeName: string;
    };
    uz: {
        name: string;
        nativeName: string;
    };
    ve: {
        name: string;
        nativeName: string;
    };
    vi: {
        name: string;
        nativeName: string;
    };
    vo: {
        name: string;
        nativeName: string;
    };
    wa: {
        name: string;
        nativeName: string;
    };
    cy: {
        name: string;
        nativeName: string;
    };
    wo: {
        name: string;
        nativeName: string;
    };
    fy: {
        name: string;
        nativeName: string;
    };
    xh: {
        name: string;
        nativeName: string;
    };
    yi: {
        name: string;
        nativeName: string;
    };
    yo: {
        name: string;
        nativeName: string;
    };
    za: {
        name: string;
        nativeName: string;
    };
};
/**
 * Get ISO Langs
 * @returns
 */
declare function getIsoLangs(): any;
/**
 * Select2 Language Country
 */
declare function select2Langs(selectLang: JQuery<HTMLSelectElement> | JQuery<HTMLElement>, select2Opt?: Select2.Options<Select2.DataFormat | Select2.GroupedDataFormat, any>): void;
/**
 * Get Countries ISO
 * @returns
 */
declare function getIsoCountries(): {
    name: string;
    alpha2: string;
    alpha3: string;
    num3: string;
    subregion: string;
    region: string;
    continent: string;
}[];
/**
 * Select2 Country
 * @requires jQuery
 * @param selectCountry
 * @param select2Opt Select2 Options
 * @example
 * select2Country($("#selectID"), {placeholder:"Select Your Country"})
 */
declare function select2Country(select2Country: JQuery<HTMLSelectElement> | JQuery<HTMLElement>, select2Opt?: Select2.Options<Select2.DataFormat | Select2.GroupedDataFormat, any>): void;
/**
 * Disable debugger
 */
declare function bannedebug(): void;
/**
 * Detect debugger using flooding loop
 */
declare function debug_detect(): void;
/**
 * restrict debug
 * @param {Boolean} restrict
 */
declare function restrict_mode(restrict: boolean): void;
declare var debug_run: any;
declare var restrict: boolean;
/**
 * Disqus loader which verifies the existence of `#disqus_thread` on
 * the web page and then prepares the disqus embed script to hook in
 * the document
 * @param disqus_shortname disqus username/shortname
 */
declare function load_disqus(disqus_shortname: string): void;
declare const distance_already_calculated: string[];
/**
 * find distance
 * @param target
 * @param callback
 */
declare function calculateDistance(target: string, callback: (arg0: number) => any): JQuery<Document>;
/**
 * calculate distance mouse x element
 * @param elem
 * @param mouseX
 * @param mouseY
 */
declare function calculatorDistance(elem: JQuery, mouseX: number, mouseY: number): number;
/**
 * Encode HTML string to HTML entities
 * @param {String} str
 */
declare function prepEntities(str: string): string;
declare var entityMap: {
    "160": string;
    "161": string;
    "162": string;
    "163": string;
    "164": string;
    "165": string;
    "166": string;
    "167": string;
    "168": string;
    "169": string;
    "8364": string;
};
/**
 * php equivalent http_build_query
 * @param obj
 */
declare function http_build_query(obj: Object): string;
/**
 * Check current framework running at localhost
 */
declare function is_localhost(): RegExpMatchArray;
/**
 * Force HTTPS
 */
declare function forceSSL(): void;
/**
 * json decode fails return false
 * @param obj
 * @returns
 */
declare function json_decode(obj: string): boolean | object;
interface HTMLScriptAttribute {
    async?: boolean;
    defer?: boolean;
    /**
     * Script Type
     * @example
     * {type: "text/javascript"} // type="text/javascript"
     */
    type?: "application/json" | "text/plain" | "application/javascript" | "text/javascript";
}
interface LoadScriptOptions {
    url: string | string[];
    /**
     * Html script attributes
     */
    options?: HTMLScriptAttribute | null;
    /**
     * Callback after all scripts loaded
     */
    callback?: null | Function;
}
declare const LoadScriptLoaded: any[];
/**
 * Load script asynchronously
 * @param urls
 * @param callback
 */
declare function LoadScript(config: LoadScriptOptions): typeof LoadScriptLoaded;
declare const loadedCss: string[];
/**
 * Load CSS async
 * @param href
 * @param callback
 */
declare function loadCSS(href: string | string[], callback?: any): void;
/**
 * Resize iframe to fit content
 * @param iFrame
 */
declare function resizeIFrameToFitContent(iFrame: HTMLIFrameElement, options?: {
    width?: boolean;
    height?: boolean;
}): void;
declare const guxid: string;
/**
 * Get current unique global page user id
 */
declare function guid(): string;
/**
 * Generate UUID v4
 */
declare function uuidv4(): string;
declare function setInputFilter(textbox: any, inputFilter: any): void;
declare var INPT: NodeListOf<Element>;
declare var index: number;
declare var element: Element;
/**
 * Rupiah currency auto format
 */
declare function rp(angka: number, prefix?: string | any): string;
/**
 * Auto height textarea
 */
declare function autoHeight_(element: HTMLElement | JQuery<HTMLElement>): JQuery<any>;
/**
 * unique id generator
 * @param length digit number string
 * @returns random string
 */
declare function makeid(length: any): string;
declare function makeid(length: number): string;
/**
 * this will check the checked radio in a group, and return the value
 * @param el
 * @returns
 * @see https://stackoverflow.com/a/30389680
 * @example
 * var checkedbooking = getCheckedValue(document.getElementsByName('booking_type'));
 * console.log(checkedbooking); // {index: NumberIndexRadio, value: valueOfRadio}
 */
declare function getCheckedValue(el: any): {};
/**
 * Set all forms to be saved with method vanilla
 * @todo save input fields into browser for reusable form
 * @param show_debug debug process saving and restoration
 */
declare function formsaver(show_debug?: boolean): void;
/**
 * Local Storage key
 */
declare const storageKey: string;
declare let formFieldBuild: any;
declare const formSaved: string;
/**
 * Element Indexer
 */
declare const formField: any;
declare const uniqueid: string;
/**
 * check if running in browser
 */
declare const isBrowser: Function;
/**
 * Element Counter
 */
declare let Count: number;
declare class lStorage extends Storage {
    constructor(prefix?: string);
    prefix: string;
    has(key: any): boolean;
    /**
     * See {@link localStorage.getItem}
     * @param key
     * @returns
     */
    get(key: any): any;
    set(key: any, value: any): void;
    extend(key: any, value: any): void;
    remove(key: any): void;
}
declare namespace formSaver2Storage {
    /**
     * See {@see localstorage.setItem}
     * @param key
     * @param value
     */
    function set(key: any, value: any): void;
    /**
     * See {@see localstorage.setItem}
     * @param key
     * @param value
     */
    function set(key: any, value: any): void;
    function get(key: any): string;
    function get(key: any): string;
    function IsJsonString(str: any): boolean;
    function IsJsonString(str: any): boolean;
}
declare class formSaver2 {
    /**
     * Get Offsets Element
     * @param el
     * @returns
     */
    static offset(el: any): any;
    /**
     * jQuery event listener
     */
    static jquery_listener(): void;
    /**
     * Pure javascript event listener
     */
    static vanilla_listener(el: any, callback: any): void;
    /**
     * Is element has attribute ?
     * @param el
     * @param name
     * @returns
     */
    static hasAttribute(el: any, name: any): any;
    static convertElement(el: any): any;
    /**
     * Restore form value
     * @param el
     * @param debug
     * @returns
     */
    static restore(el: any, debug?: boolean): void;
    /**
     * Save values form
     * @param el
     * @returns
     */
    static save(el: any, debug?: boolean): void;
    static delete(el: any, debug?: boolean): void;
    /**
     * Is Select2 Initialized ?
     * @param el
     * @returns
     */
    static is_select2(el: any): Select2.Select2;
    /**
     * Is jQuery loaded?
     * @returns
     */
    static is_jquery(): boolean;
    static get_identifier(el: any): string;
    constructor(el: any, options: any);
}
declare function linkify(string: string, buildHashtagUrl: linkifyConfig["hashtagUrlBuilder"], includeW3: linkifyConfig["includeW3"], target: linkifyConfig["target"], noFollow: linkifyConfig["noFollow"]): string;
/**
 * Add integers, wrapping at 2^32.
 * This uses 16-bit operations internally to work around bugs in interpreters.
 *
 * @param {number} x First integer
 * @param {number} y Second integer
 * @returns {number} Sum
 */
declare function safeAdd(x: number, y: number): number;
/**
 * Bitwise rotate a 32-bit number to the left.
 *
 * @param {number} num 32-bit number
 * @param {number} cnt Rotation count
 * @returns {number} Rotated number
 */
declare function bitRotateLeft(num: number, cnt: number): number;
/**
 * Basic operation the algorithm uses.
 *
 * @param {number} q q
 * @param {number} a a
 * @param {number} b b
 * @param {number} x x
 * @param {number} s s
 * @param {number} t t
 * @returns {number} Result
 */
declare function md5cmn(q: number, a: number, b: number, x: number, s: number, t: number): number;
/**
 * Basic operation the algorithm uses.
 *
 * @param {number} a a
 * @param {number} b b
 * @param {number} c c
 * @param {number} d d
 * @param {number} x x
 * @param {number} s s
 * @param {number} t t
 * @returns {number} Result
 */
declare function md5ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;
/**
 * Basic operation the algorithm uses.
 *
 * @param {number} a a
 * @param {number} b b
 * @param {number} c c
 * @param {number} d d
 * @param {number} x x
 * @param {number} s s
 * @param {number} t t
 * @returns {number} Result
 */
declare function md5gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;
/**
 * Basic operation the algorithm uses.
 *
 * @param {number} a a
 * @param {number} b b
 * @param {number} c c
 * @param {number} d d
 * @param {number} x x
 * @param {number} s s
 * @param {number} t t
 * @returns {number} Result
 */
declare function md5hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;
/**
 * Basic operation the algorithm uses.
 *
 * @param {number} a a
 * @param {number} b b
 * @param {number} c c
 * @param {number} d d
 * @param {number} x x
 * @param {number} s s
 * @param {number} t t
 * @returns {number} Result
 */
declare function md5ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;
/**
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 *
 * @param {Array} x Array of little-endian words
 * @param {number} len Bit length
 * @returns {Array<number>} MD5 Array
 */
declare function binlMD5(x: any[], len: number): Array<number>;
/**
 * Convert an array of little-endian words to a string
 *
 * @param {Array<number>} input MD5 Array
 * @returns {string} MD5 string
 */
declare function binl2rstr(input: Array<number>): string;
/**
 * Convert a raw string to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 *
 * @param {string} input Raw input string
 * @returns {Array<number>} Array of little-endian words
 */
declare function rstr2binl(input: string): Array<number>;
/**
 * Calculate the MD5 of a raw string
 *
 * @param {string} s Input string
 * @returns {string} Raw MD5 string
 */
declare function rstrMD5(s: string): string;
/**
 * Calculates the HMAC-MD5 of a key and some data (raw strings)
 *
 * @param {string} key HMAC key
 * @param {string} data Raw input string
 * @returns {string} Raw MD5 string
 */
declare function rstrHMACMD5(key: string, data: string): string;
/**
 * Convert a raw string to a hex string
 *
 * @param {string} input Raw input string
 * @returns {string} Hex encoded string
 */
declare function rstr2hex(input: string): string;
/**
 * Encode a string as UTF-8
 *
 * @param {string} input Input string
 * @returns {string} UTF8 string
 */
declare function str2rstrUTF8(input: string): string;
/**
 * Encodes input string as raw MD5 string
 *
 * @param {string} s Input string
 * @returns {string} Raw MD5 string
 */
declare function rawMD5(s: string): string;
/**
 * Encodes input string as Hex encoded string
 *
 * @param {string} s Input string
 * @returns {string} Hex encoded string
 */
declare function hexMD5(s: string): string;
/**
 * Calculates the raw HMAC-MD5 for the given key and data
 *
 * @param {string} k HMAC key
 * @param {string} d Input string
 * @returns {string} Raw MD5 string
 */
declare function rawHMACMD5(k: string, d: string): string;
/**
 * Calculates the Hex encoded HMAC-MD5 for the given key and data
 *
 * @param {string} k HMAC key
 * @param {string} d Input string
 * @returns {string} Raw MD5 string
 */
declare function hexHMACMD5(k: string, d: string): string;
/**
 * Calculates MD5 value for a given string.
 * If a key is provided, calculates the HMAC-MD5 value.
 * Returns a Hex encoded string unless the raw argument is given.
 *
 * @param {string} string Input string
 * @param {string} [key] HMAC key
 * @param {boolean} [raw] Raw output switch
 * @returns {string} MD5 output
 */
declare function md5(string: string, key?: string, raw?: boolean): string;
interface progressBarTimer {
    warningThreshold: number;
}
/**
 * @see https://github.com/imalliar/jquery.progressBarTimer
 */
declare var progressBarTimer: progressBarTimer;
interface JQueryStatic {
    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @param context A DOM Element, Document, or jQuery to use as context
     * @see {@link https://api.jquery.com/jQuery/#jQuery-selector-context}
     */
    (selector: string, context?: Element | JQuery | string): JQuery;
}
declare const reCaptcha: {
    /**
     * @type {Number} counter executions
     */
    gexec_count: number;
    key: string;
    api: string;
    /**
     * Set recaptcha site key
     * @param {String} key
     */
    set_key: (key: string) => any;
    /**
     * Start recaptcha
     */
    start: () => void;
    /**
     * Initialize Recaptcha by defining jquery
     */
    init: () => void;
    retry_count: number;
    /**
     * load or refreshing google recaptcha
     */
    exec: (action: any, retry?: boolean, callback?: (arg0: string) => void) => void;
    /**
     * Insert reCaptcha Token
     * @param {String} token
     */
    insert: (token: string) => void;
    /**
     * Distribute reCaptcha Token
     * @param {String} token
     */
    distribute_token: (token: string) => void;
    /**
     * Get token recaptcha
     */
    get: () => string;
    /**
     * Button Controller
     * @param {Boolean} reCaptcha_disable
     * @param {Function} callback
     */
    reCaptcha_buttons: (reCaptcha_disable: boolean, callback: Function) => void;
};
/**
 * Hidden reCaptcha v3 object initializer
 */
declare function recaptcha(): {
    /**
     * @type {Number} counter executions
     */
    gexec_count: number;
    key: string;
    api: string;
    /**
     * Set recaptcha site key
     * @param {String} key
     */
    set_key: (key: string) => any;
    /**
     * Start recaptcha
     */
    start: () => void;
    /**
     * Initialize Recaptcha by defining jquery
     */
    init: () => void;
    retry_count: number;
    /**
     * load or refreshing google recaptcha
     */
    exec: (action: any, retry?: boolean, callback?: (arg0: string) => void) => void;
    /**
     * Insert reCaptcha Token
     * @param {String} token
     */
    insert: (token: string) => void;
    /**
     * Distribute reCaptcha Token
     * @param {String} token
     */
    distribute_token: (token: string) => void;
    /**
     * Get token recaptcha
     */
    get: () => string;
    /**
     * Button Controller
     * @param {Boolean} reCaptcha_disable
     * @param {Function} callback
     */
    reCaptcha_buttons: (reCaptcha_disable: boolean, callback: Function) => void;
};
declare const requirejs_vendor = "/node_modules";
declare const require_config: RequireConfig;
interface RequireConfig {
    css: object;
}
declare const dtpackage: () => string[];
declare const requirejs_ignited = false;
/**
 * Load requirejs
 */
declare function load_requirejs(): Promise<unknown>;
/**
 * Load Modules From node_modules folder
 * @param name
 * @param callback
 */
declare function load_module(name: string | string[], callback: Function): void;
/**
 * Datatables loader
 * @param callback
 */
declare function load_datatables(callback: Function): void;
declare let datatables_ignited: boolean;
/**
 * Datatables init
 * @todo disable error warning
 * @todo add refresh button
 */
declare function datatables_init(): Promise<unknown>;
declare const optimized_ids: any[];
/**
 * Optimize Material Datatables
 * @param id id table
 * @param callback additional function to optimizer
 */
declare function datatables_optimize(id: string, callback?: Function): void;
/**
 * Scroll up after click pagination dt
 * @param target
 */
declare function pagination_up(target: JQuery): void;
/**
 * Optimize Datatables Columns Options
 * @param data
 * @param exclude
 */
declare function datatables_colums_options(data?: DataTables.ColumnSettings, exclude?: string[]): void;
declare class ctable {
    private can_edit;
    private instance;
    private editable_run;
    constructor(config?: ctableOpt);
    create(id: string, where: string, data: string[]): void;
    add(table: string, data: any[]): void;
    private editable;
}
interface ctableOpt {
    editable?: boolean;
}
declare function currentUID(): string;
/**
 * Get uid saved in browser
 */
declare function getUID(): string;
/**
 * Signing the uid
 * @param {String} UID
 */
declare function sign_uid(UID: string): void;
/**
 * Check UID
 * @return {string} uid
 * @param {Function|any} callback
 */
declare function checkUID(callback: Function | any): string;
declare function isExpireUID(): boolean;
declare function AddMinutesToDate(date: any, minutes: any): Date;
declare function genUID(): string;
/**
 *  Save uid
 * @param {Object} data
 */
declare function saveUID(data: any): void;
declare var UIDvalue: string;
declare var UIDcalled: boolean;
/**
 * User framework
 */
declare class user {
    key: string;
    /**
     * Get all userdata
     */
    all(): undefined | object | any;
    /**
     * get userdata
     */
    get(key: string): any;
    /**
     * User login
     * @param user
     * @param pass
     * @param callback
     * @example
     * userClass().login('username', 'password', function (err, data) {
        console.log(arguments);
        if (!err){
            console.log('login successful');
        }
    });
     */
    login(user: string, pass: string, callback?: (err: boolean, data: object) => any): void;
    /**
     * fetch userdata
     * @param callback
     * @returns
     */
    fetch(callback: Function | null): JQuery.jqXHR<any>;
}
/**
 * textarea focus
 * @param {String} id
 * @param {String} placeholder
 */
declare function tafocus(id: string, placeholder: string): void;
/**
 * format new lines
 * @param {String} placeholder
 */
declare function formatNewLines(placeholder: string): string;
/**
 * Count newLines
 * @param {String} placeholder
 */
declare function countNewLines(placeholder: string): string | number;
/**
 * find duplicate array
 * @param {Array<any>} arr
 * @param {Function} callback
 */
declare function findDups(arr: Array<any>, callback: Function): any;
declare function makeid(length: any): string;
/**
 * Auto Generate ID
 * @param {Number} length
 */
declare function makeid(length: number): string;
/**
 * load or refreshing google recaptcha
 */
declare function gexec(action: any, retry: any, callback: any): void;
/**
 * Get token recaptcha
 */
declare function geToken(): string;
/**
 * Javascript caller
 * @param {String} url
 * @param {Function} callback
 */
declare function JavaScriptCaller(url: string, callback: Function): void;
/**
 * get currency symbol from navigator
 */
declare function get_currency_symbol(): string;
/**
 * Create JSON
 * @param {any} jsObj
 * @param {boolean} tabs
 */
declare function createJSON(jsObj: any, tabs: boolean): string;
/**
 * Loading.io
 * @param {string} text
 * @param {Function} callback
 * @param {"enable" | "enabled" | "disable" | "disabled"} mode
 */
declare function loadingio(text: string, callback: Function, mode: "enable" | "enabled" | "disable" | "disabled", ...args: any[]): void;
/**
 function target(a) {
    alert(a);
}

 var o = {
    suffix: " World",
    target: function(s) { alert(s + this.suffix); }
};

 __call("target", "Hello");

 __call.call(o, "target", "Hello");
 */
/**
 * parse proxy from string
 * @param {string} str
 * @return {Array<any>} proxy list filtered
 */
declare function parse_proxy(str: string): Array<any>;
/**
 * Add class if not exists
 * @param {Element} element element from DOM
 * @param {string} className class name
 */
declare function toogleClass(element: Element, className: string): boolean;
/**
 * jQuery pseudo builder
 * @param {string} string
 */
declare function pseudo_builder(string: string): string;
/**
 * Loop key value of object
 * @param {Object} object
 * @param {Function} callback
 */
declare function foreach(object: any, callback: Function): void;
/**
 * Get multiple random element from array
 * @param {Array<any>} arr array sources
 * @param {Number} n maximum element to be in result
 * @param {Function} callback function to process result
 */
declare function getRandom(arr: Array<any>, n: number, callback: Function): any;
/**
 * @todo Auto replace placeholder textarea newLines
 */
declare var textAreas: HTMLCollectionOf<HTMLTextAreaElement>;
/** Query URL */
declare function getLocationHash(): void;
/** Progress bar */
declare var elm: JQuery<HTMLElement>;
/**
 * @type {JQuery<HTMLElement>} L
 */
declare var L: JQuery<HTMLElement>;
/**
 * links new tab form submit
 */
declare var aform: JQuery<HTMLElement>;
declare function socket_start(host: any): void;
declare function socket_server(host: any): EventSource;
declare function socket_stop(): void;
declare function socket_check(): any;
/**
 * Simple Websocket javascript
 * @todo Live Data
 * @description Don't miss data that changes even for a second
 * @author Dimas Lanjaka <dimaslanjaka[at]gmail.com
 * @see https://www.webmanajemen.com/p/simple-websocket.html Simple Web Socket
 */
declare var socket: any;
/**
 * ZLIB packer
 * @see http://localhost/src/ZLIB.php
 * @requires pako `npm i pako @types/pako`
 */
declare class ZLIB {
    /**
     * Base64 decode from php
     * @param {Uint8Array} arr
     */
    static atos(arr: Uint8Array): string;
    static decompress(str: any): string;
    static compress(str: any): any;
}
