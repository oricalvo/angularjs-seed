import { appModule } from './app.module';
import template from './app.component.html';
import './app.component.css';

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

appModule.component('appRoot', {
    controller: AppComponent,
    template: template,
});

const rgb2hex = (rgb: string): string => {
    const res = '#' + rgb.substr(4, rgb.indexOf(')') - 4)
        .split(',')
        .map((color) => pad(parseInt(color).toString(16), 2))
        .join('');
    return res;
}

const getRandom256 = (): number => {
    return Math.floor((Math.random() * 256) + 0);
}

const pad = (str: string, size: number): string => {
    while (str.length < size) {
        str = '0' + str;
    }
    return str;
}