"use strict";
class LoginWinSingleton {
    constructor() {
        this.instance = null;// instance实例
        this.appendWin();
        this.attachEvents();
    }
    static getInstance() {
        if(!this.instance) {
            this.instance = new LoginWinSingleton();
        }
        return this.instance;
    }

    appendWin() {
        this.containerElement = document.createElement('div');
        document.body.appendChild(this.containerElement);
        this.containerElement.setAttribute('class','layer');

        this.containerElement.innerHTML = '我是登录窗口';
        this.containerElement.style.display = 'none';
    }

    attachEvents() {
        var that  = this;
        this.containerElement.addEventListener('click',function(){
            that.hide();
        },false);
    }

    hide() {
        this.containerElement.style.display = 'none';
    }

    show() {
        this.containerElement.style.display = 'block';
    }
}
