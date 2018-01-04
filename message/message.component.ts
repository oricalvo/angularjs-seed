import { appModule } from '../app/app.module';
import template from './message.component.html';
import './message.component.css';
import * as angular from 'angular';
// import * as rgbHex from 'rgb-hex';

export class AppComponent {
    bgColor: string;

    constructor() {
        const rgbColor =
            window.getComputedStyle(document.body, null)
                .getPropertyValue('background-color');
        this.bgColor = rgb2hex(rgbColor);
    }

    rndColor() {
        const rgbColor = `rgb(${getRandom256()}, ${getRandom256()}, ${getRandom256()})`;
        document.body.style.backgroundColor = rgbColor;
        this.bgColor = rgb2hex(rgbColor);
    }
}

const rgb2hex = (rgb: string): string => {
    const res = '#' + rgb.substr(4, rgb.indexOf(')') - 4)
        .split(',')
        .map((color) => parseInt(color).toString(16)).join('');
    return res;
}

const getRandom256 = (): number => {
    return Math.floor((Math.random() * 256) + 0);
}