import { appModule } from '../app/app.module';
import template from './message.component.html';
import './message.component.css';

export class AppComponent {
    color: string;

    constructor() {
        this.color = 'red45';
    }

    setColorMessage(color: string) {
        this.color = color;
    }
}

// appModule.component("appRoot", {
//     controller: AppComponent,
//     template: template,
// });
