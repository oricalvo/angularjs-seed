import {appModule} from "./app.module";
import template from "./app.component.html";
// import  style  from "./app.component.style.css";
import  url from "./app.component.style.css";

export class AppComponent {
    constructor() {
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    template: template,
});
