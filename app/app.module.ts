import { module } from 'angular';
import { AppComponent } from '../message/colorMessage.component'
import template from '../message/colorMessage.component.html';

export const appModule = module('myApp', []);

appModule.component('appRoot', {
    controller: AppComponent,
    template: template,
});
