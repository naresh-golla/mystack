import { observable, action, decorate } from "mobx";
import { observer } from "mobx-react";

class AppStore {
    bio = "";
    val = {}
    setBioValue(data) {
        this.bio = data;
    }
    setValValue(data) {
        this.val = data;
    }
}

decorate(AppStore, {
    bio: observable,
    setBioValue: action,
    val: observable,
    setValValue: action
});

export const profileStore = new AppStore();