import * as angular from 'angular';
import { appModule } from './app.module';
import './site.css';
import { AppComponent } from './app.component';
import {RootService} from './root,service';
import {ColorDetailsComponent} from './colorDetails.component';
import {RandomButtonComponent} from './randomButton.component';

const components = [
    AppComponent,
    ColorDetailsComponent,
    RandomButtonComponent,
];

const services = [
    RootService
];

angular.bootstrap(document.querySelector('html'), [appModule.name]);
