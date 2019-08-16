import { observable, action, decorate } from "mobx";
import { observer } from "mobx-react";

/** All the View and Edit Profile Observables are handled in this Store */
class AppProfileStore {
    /******Mention Observables here*******/
    /**Use proper naming conventions */
    bio = "";
    spotlight = {};
    education = {};
    work = {};

    /******Mention the actions to update observables here******/
    /** To Set bio observable value */
    /**Can call the method setBioValue('value') */
    setBioValue(data) {
        this.bio = data;
    }
    /** To Set SpotLight Value */
    /**Can call the method setSpotlightValue({}) */
    setSpotlightValue(data) {
        this.spotlight = data;
    }

    setEducation(data) {
        this.education = {
            school: data.school,
            college: data.college,
            univ: data.univ
        };
    }

    setWork(data) {
        this.work = {
            current: data.current,
            previous: data.previous
        };
    }
}

/**Define the observable, action, computed variables inside the decorate */
decorate(AppProfileStore, {
    bio: observable,
    spotlight: observable,
    education: observable,
    work: observable,
    setBioValue: action,
    setSpotlightValue: action,
    setEducation:action,
    setWork: action,
});

export const profileStore = new AppProfileStore();