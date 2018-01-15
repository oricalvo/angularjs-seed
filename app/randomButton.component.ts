import template from './randomButton.component.html';
import {appModule} from './app.module';
import './randomButton.component.css';

export class RandomButtonComponent {
    onClick: () => void;

    constructor() {
    }

    onBtnClick() {
        this.onClick();
    }
}

appModule.component('appRandomButton', {
    controller: RandomButtonComponent,
    template: template,
    bindings: {
        onClick: '&',
    }
});
