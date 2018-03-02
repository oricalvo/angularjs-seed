import * as angular from 'angular';
import { appModule } from './app.module';
import { AppComponent } from './app.component';
import {RootService} from './root.service';
import {appStore} from "./app.store";
import './site.css';

const components = [
    AppComponent,
];

const services = [
    RootService,
    appStore,
];

angular.bootstrap(document.querySelector('html'), [appModule.name]);
