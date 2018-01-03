import { appModule } from "./app.module";
import template from "./app.component.html";
import "./app.component.css";

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
