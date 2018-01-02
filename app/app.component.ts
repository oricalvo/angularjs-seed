import {appModule} from "./app.module";
import template from "./app.component.html";

export class AppComponent {
    constructor() {
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    template: template,
});
