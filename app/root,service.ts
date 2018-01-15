import {getRandomColorHex} from './helpers';
import {appModule} from './app.module';

export interface AppState {
    bgColor: string;
}

export class RootService {
    state: AppState = {
        bgColor: getRandomColorHex(),
    };

    generateRandomColor() {
        this.state.bgColor = getRandomColorHex();
    }
}

appModule.service('rootService', RootService);
