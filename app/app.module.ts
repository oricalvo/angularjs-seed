import {module} from "angular";
import {AppComponent} from './app.component'
import template from './app.component.html';

export const appModule = module("myApp", []);

appModule.component("appRoot", {
    controller: AppComponent,
    template: template,
});
