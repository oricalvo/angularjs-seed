import { appModule } from './app.module';
import template from './app.component.html';
import {AppStore} from "./app.store";
import './app.component.css';

export class AppComponent {
    constructor(private appStore: AppStore, $scope) {
        $scope.state = appStore;
    }
}

appModule.component('appRoot', {
    controller: AppComponent,
    template: template,
});
