interface Object {
    length: number;
    void;

    [str: string]: any;

    /**
     * Iterate Object
     * @param callback function each element
     * @example
     * var a = {'a','n'};
     * a.each(function(el){
     *  console.log(el); //a, n each iteration
     * })
     */
    each(callback: function(any)): any;


    /**
     * Check is empty
     */
    isEmpty(): boolean;
}

interface ObjectConstructor {
    /**
     * Count size length of object
     */
    size: (obj: any) => number;

    [pair: any]: any;

    /**
     * Is Object Has Property of key ?
     * @param key
     */
    hasOwnProperty(key: any): boolean;

    /**
     * check if has child and go for callback
     * @param str  match child property
     * @param callback function callback
     * @author Dimas Lanjaka <dimaslanjaka@gmail.com>
     */
    child(str: string | number, callback: Function): any;

    /**
     * check object has child, if not exist return alternative value
     * @param str match child property
     * @param alternative default value callback
     * @author Dimas Lanjaka <dimaslanjaka@gmail.com>
     */
    alt(str: any, alternative: string | number | boolean): any;

    /**
     * Check object has child
     * @param str
     */
    has(str: string | number): any;
}

interface ObjectConstructorAjax {
    /**
     * Ajax container always empty
     */
    tid?: any;

    /**
     * Add ajax request
     * @param opt JQuery ajax settings
     */
    addReq(opt: JQueryAjaxSettings): void;

    /**
     * Remove request options
     */
    removeReq(opt: ObjectConstructor): void;

    /**
     * Run initializer ajax scheduler
     */
    run(): void;

    /**
     * Stop current scheduler
     */
    stop(): void;
}
