import { Component,ViewEncapsulation } from "@angular/core";

import { AppState } from "./app.service";

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector:"app",
    encapsulation:ViewEncapsulation.None,
    templateUrl:"app.component.html",
    styleUrls:["app.component.css"]
}) 
export class App {
    title="仙剑之旅";
    constructor(
        public appState:AppState){
    }

    ngOnInit(){
        console.log("初始化App状态",this.appState.state);
    }
}
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
