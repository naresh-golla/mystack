import { observable, action, decorate } from "mobx";
import { observer } from "mobx-react";

class AppStore {
    bio = "";

    setBioValue(data) {
        this.bio = data;
    }

}

decorate(AppStore, {
    bio: observable,
    setBioValue: action,
});

export const profileStore = new AppStore();