import { appModule } from './app.module';
import template from './app.component.html';
import './app.component.css';
import { getRandomColor } from './helpers';

export class AppComponent {
    bgColor: string;

    constructor() {
        this.bgColor = getRandomColor();
    }

    rndColor() {
        this.bgColor = getRandomColor();
    }
}

appModule.component('appRoot', {
    controller: AppComponent,
    template: template,
});