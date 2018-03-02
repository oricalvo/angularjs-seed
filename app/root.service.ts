import {appModule} from './app.module';
import {AppStore} from "./app.store";

export class RootService {
    constructor(public state: AppStore){
    }
}

appModule.service('rootService', RootService);
