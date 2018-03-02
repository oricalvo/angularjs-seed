import {appModule} from "./app.module";

export interface AppStore {
    contacts: Contact[];
}

export interface Contact {
    id: number;
    name: string;
}

export const appStore: AppStore = {
    contacts: [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
    ],
};

appModule.value("appStore", appStore);
