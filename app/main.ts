import * as angular from 'angular';
import { appModule } from './app.module';
import './site.css';

angular.bootstrap(document.querySelector('html'), [appModule.name]);
