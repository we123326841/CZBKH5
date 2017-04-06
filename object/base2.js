// timestamp: Tue, 01 May 2007 19:13:00
/*
 base2.js - copyright 2007, Dean Edwards
 http://www.opensource.org/licenses/mit-license
 */
// You know, writing a javascript library is awfully time consuming.
//////////////////// BEGIN: CLOSURE ////////////////////
// =========================================================================
// base2/Base.js
// =========================================================================
// version 1.1
var Base = function(){
// call this method from any other method to invoke that method's ancestor
};
Base.prototype = {
    extend: function(source){
//≤Œ ˝¥Û”⁄“ª∏ˆ ±
        if (arguments.length > 1) { // extending with a name/value pair
            //ªÒµ√protoµƒ◊Êœ»
            var ancestor = this[source];
            var value = arguments[1];
            //»Áπ˚value£®µ⁄∂˛∏ˆ≤Œ ˝£© «function£¨≤¢«“◊Êœ»∂‘œÛ¥Ê‘⁄£¨‘⁄÷ÿ‘ÿ∫Ø ˝÷–µ˜”√base ±
            if (typeof value == "function" && ancestor && /\bbase\b/.test(value)) {
                // get the underlying method
                var method = value;
                // override
                value = function(){
                    var previous = this.base;
                    this.base = ancestor;
                    //…œÀ›µΩ∏∏¿‡∂‘œÛ
                    var returnValue = method.apply(this, arguments);
                    this.base = previous;
                    return returnValue;
                };
                value.method = method;
                value.ancestor = ancestor;
            }
            this[source] = value;
        }
        else
        if (source) { // extending with an object literal ”√“ª∏ˆ∂‘œÛ¡–±Ì¿¥¿©’π
            var extend = Base.prototype.extend;
            /**
             * 1.¿©’π‘≠–Õ∑Ω∑®∫Õ Ù–‘ 2.
             */
            //»Áπ˚ «¿©’π Ù”⁄‘≠–Õµƒ∑Ω∑®ªÚ Ù–‘,œ»±È¿˙∆‰÷ÿ‘ÿObjectµƒ3∏ˆ∑Ω∑®
            if (Base._prototyping) {
                var key, i = 0, members = ["constructor", "toString", "valueOf"];
                while (key = members[i++]) {
//»Áπ˚ «÷ÿ‘ÿ¡À’‚–©∑Ω∑®
                    if (source[key] != Object.prototype[key]) {
                        /**
                         * ÷∏ˆ¿©’π,”√callµƒ‘≠“Ú «“™Ω´extendµƒ…œœ¬Œƒ∏ƒŒ™“™¿©’πµƒ‘¥this,
                         * º» «–¬Ω®∂‘œÛµƒ∏∏¿‡∂‘œÛ
                         */
                        extend.call(this, key, source[key]);
                    }
                }
            }
            else
            if (typeof this != "function") {
// if the object has a customised extend() method then use it
                extend = this.extend || extend;
            }
// copy each of the source object's properties to this object
            for (key in source)
                if (!Object.prototype[key]) {
                    extend.call(this, key, source[key]);
                }
        }
        return this;
    },
    base: Base
};
Base.extend = function(_instance, _static){ // subclass
    /**
     * Base¿‡‘≠–Õµƒ¿©’π±√˚,Ω´’‚∏ˆµ±≥…“ª∏ˆ∑Ω∑®µ˜”√
     */
    var extend = Base.prototype.extend;
    /**
     * build the prototype,¥¥Ω®‘≠–Õ
     * …Ë÷√‘≠–Õ±Í÷æ
     */
    Base._prototyping = true;
    /**
     * ¥¥Ω®“ª∏ˆBaseµƒ µ¿˝,≥ı ºªØºÃ≥–≤ø∑÷
     * ºÃ≥–∑Ω Ω¥Û÷¬ªπ «“‘œ¬∑Ω Ω
     * function A(){}
     * function B(){
* this.b=[];
* }
     * A.prototype=new B();//AºÃ≥–BµƒÀ˘”– Ù–‘∫Õ∑Ω∑®
     * ’‚÷÷ºÃ≥–∑Ω Ωª·”–“ª∏ˆŒ Ã‚,B÷–…˘√˜µƒ∂‘œÛ(»Áb)“‘prototypeµƒ–Œ Ω
     * ±ªAºÃ≥–÷Æ∫Û,prototype÷ª «…˙≥…“ª∏ˆ÷∏œÚB÷–∂‘œÛµƒ“˝”√,º¥
     * AÀ˘”– µ¿˝ª·π≤Õ¨œÌ”–B÷–∂‘œÛ(b)
     * var a1=new A();
     * var a2=new A();
     * a1.b.push("a11");
     * a2.b.push("a21");
     * ¥À ±,a1.b=a2.b=["a11","a21"],
     *
     * Dean Edwards‘⁄ µœ÷ºÃ≥–µƒ ±∫Ú,“‘∏∏¿‡Œ™ª˘¥°,¥¥Ω® µ¿˝,
     * ¿˚”√extend¿©’π∏√ µ¿˝,◊Ó∫Û”√A.prototype=new B(); µœ÷ºÃ≥–
     * µ´ « Ù–‘ «∂‘œÛµƒ ±∫Ú√ª”–◊ˆ¥¶¿Ì,
     * ªπ «√ª”–±‹ø™…œ ˆµƒºÃ≥–»±œ›
     */
    var proto=new this;
    /**
     * ‘⁄’‚¿Ô,≤ªø…“‘”√ proto.extend(_instance)¥˙ÃÊ
     */
    extend.call(proto, _instance);
    /**
     * ¿‡ µ¿˝ Ù–‘∫Õ∑Ω∑®µƒ‘≠–Õ≤ø∑÷ππ‘ÏÕÍ±œ,…æ≥˝±Í÷æŒª
     */
    delete Base._prototyping;
    /**
     * ’‚¿Ô◊˜’ﬂ‘À”√¡À  ≈‰∆˜µƒƒ£ Ω,”√◊‘∂®“Âµƒππ‘Ï∆˜…˙≥…“ª∏ˆ–¬µƒ¿‡∂‘œÛ
     * wrapper/adapter:Õ®π˝“ª∂®µƒ∑Ω∑®£¨“ª∏ˆ∂‘œÛ∑‚◊∞ªÚ ⁄»®¡Ì“ª∏ˆ
     * ∂‘œÛ¿¥∏ƒ±‰À¸µƒΩ”ø⁄ªÚ’ﬂ––Œ™
     */
// create the wrapper for the constructor function
    /**
     * ªÒµ√ππ‘Ï∆˜µƒ“˝”√
     */
    var constructor = proto.constructor;
    /**
     * Ω®¡¢klassµƒFunction∂‘œÛ,µ˜”√◊‘∂®“Âµƒππ‘Ï∆˜, klassæÕ «—‹…˙µƒ◊”¿‡
     * ¡Ω÷÷«Èøˆœ¬,µ˜”√¥À∑Ω∑®:
     * 1.¥¥Ω®¿‡ µ¿˝µƒ ±∫Ú,’‚ ±∫Ú≤ª «‘≠–Õππ‘ÏΩ◊∂Œ,÷¥––”…extend∑Ω∑®
     * ºÃ≥–µƒ ±∫Ú…Ë∂®µƒππ‘Ï∑Ω∑®
     * 2.µ±”√extend∑Ω∑®—‹…˙◊”¿‡µƒ ±∫Ú---new this
     * “ÚŒ™œ¬Œƒ÷–klassµƒ Ù–‘“—æ≠»´≤øªÒµ√,
     * À˘“‘µ±newÕÍ÷Æ∫Û,ªÒµ√À˘”–∏∏¿‡µƒ∑Ω∑®∫Õ Ù–‘∂º∞¸∫¨‘⁄¡À
     * proto¿Ô√Ê¡À,’‚ ±∫Ú,‘⁄protoµƒª˘¥°…œ‘À”√prototypeµƒextend∑Ω∑®
     * Ω´¥À◊”¿‡µƒ Ù–‘∫Õ∑Ω∑®ÃÌº”µΩproto¿Ô√Ê
     */
    var klass = proto.constructor = function(){
        /**
         * var proto=new this; µ˜”√∏∏¿‡µƒππ‘Ï∫Ø ˝,¥¥Ω®“ª∏ˆ∏∏¿‡µƒ µ¿˝
         * new this”√ÕÍ∫Û,∫Ø ˝÷ÿ∂®œÚµΩ◊”¿‡∂‘œÛππ‘Ï∑Ω∑®
         */
        if (!Base._prototyping) {
            /**
             * µ±‘⁄ππ‘Ï∫Ø ˝÷–(constructor)µ˜”√base∑Ω∑® ±,
             * base∑Ω∑®ª·µ˜”√∏∏¿‡∂‘œÛµƒππ‘Ï∫Ø ˝,’‚ ±∫Úª·«∂Ã◊
             * µ˜”√’‚∏ˆ¥˙¬Î∂Œ,∑Ω∑®µ√“‘÷¥––µƒÃıº˛æÕ «this._constructing==true
             */
            if (this._constructing || this.constructor == klass) { // instantiation
                this._constructing = true;
                constructor.apply(this, arguments);
                delete this._constructing;
            }
            /**
             *
             * ≤ª‘ŸœÚœ¬÷¥––
             */
            else { // casting
                var object = arguments[0];
                if (object != null) {
                    (object.extend || extend).call(object, proto);
                }
                return object;
            }
        }
    };
// build the class interface
    /**
     *
     */
    for (var i in Base){
        klass[i] = this[i];
    }
    /**
     * ¥¥Ω®ºÃ≥–¡¥
     */
    klass.ancestor = this;
    klass.base = Base.base;
    klass.prototype = proto;
    klass.toString = this.toString;
    /**
     * ¿©’π¿‡∑Ω∑®, Ù–‘,¿‡À∆javaµƒstatic
     */
    extend.call(klass, _static);
// class initialisation »Áπ˚¥Ê‘⁄init∫Ø ˝ µ˜”√
    if (typeof klass.init == "function")
        klass.init();
    return klass;
};
// initialise
Base = Base.extend({
    constructor: function(){
        this.extend(arguments[0]);
    }
}, {
    ancestor: Object,
    base: Base,
    implement: function(_interface){
        if (typeof _interface == "function") {
// if it's a function, call it
            _interface(this.prototype);
        }
        else {
// add the interface using the extend() method
            this.prototype.extend(_interface);
        }
        return this;
    }
});