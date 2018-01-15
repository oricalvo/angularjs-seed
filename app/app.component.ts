import { appModule } from './app.module';
import template from './app.component.html';
import './app.component.css';
import { getRandomColorHex } from './helpers';
import {RootService} from './root,service';

export class AppComponent {
    constructor(private rootService: RootService) {
    }

    onRandomButtonClicked() {
        this.rootService.generateRandomColor();
    }

    get state() {
        return this.rootService.state;
    }
}

appModule.component('appRoot', {
    controller: AppComponent,
    template: template,
});