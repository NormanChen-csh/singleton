"use strict";
class Singleton {
    constructor(name) {
        this.name = name;//name 属性
        this.instance = null;// instance实例
    }
    getName(name) {
        console.log((this.name));
    }
    static getInstance(name) {
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}
var a  = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
a.getName();
b.getName();


console.log(a === b);
