import { module } from 'angular';
import { AppComponent } from '../message/message.component'
import template from '../message/message.component.html';

export const appModule = module('myApp', []);

appModule.component('appRoot', {
    controller: AppComponent,
    template: template,
});
