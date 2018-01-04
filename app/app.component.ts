import { appModule } from './app.module';
import template from './app.component.html';
import './app.component.css';
import { getRandomColorHex } from './helpers';

export class AppComponent {
    bgColor: string;

    constructor() {
        this.bgColor = getRandomColorHex();
    }

    rndColor() {
        this.bgColor = getRandomColorHex();
    }
}

appModule.component('appRoot', {
    controller: AppComponent,
    template: template,
});