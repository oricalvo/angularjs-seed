import { appModule } from './app.module';
import template from './app.component.html';
import {AppStore} from './app.store';
import './app.component.css';

export class AppComponent {
    constructor(private appStore: AppStore) {
    }

    get contacts() {
        return this.appStore.contacts;
    }
}

appModule.component('appRoot', {
    controller: AppComponent,
    template: template,
});
