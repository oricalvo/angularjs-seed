import template from './colorDetails.component.html';
import {appModule} from './app.module';
import './colorDetails.component.css';

export class ColorDetailsComponent {
    constructor() {
    }
}

appModule.component('appColorDetails', {
    controller: ColorDetailsComponent,
    template: template,
    bindings: {
        bgColor: '<',
    }
});
