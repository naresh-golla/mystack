import { observable, action, decorate } from "mobx";
import { get } from 'lodash';
import HTTPService from "./http-service";
import { JsonKeys } from "../utils/constants";

/** All the View and Edit Profile Observables are handled in this Store */
class AppProfileStore {
    /******Mention Observables here*******/
    /**Use proper naming conventions */
    username = "";
    bio = {}
    about = "";
    spotlight = {};
    education = {};
    work = {};
    design = "";
    socialprofile = [];
    pic = "";

    constructor(profileApi) {
        this.profileApi = profileApi;
    }

    fetchUserInfo(username) {
        this.username = username;
        this.profileApi.fetchUserInfo(username).then((res) => {
            const { bio, about, spotlight, education, work, design, socialprofile, pic } = get(res, [JsonKeys.DATA], {});
            this.bio = bio;
            this.about = about;
            this.spotlight = spotlight;
            this.education = education;
            this.work = work;
            this.design = design;
            this.socialprofile = socialprofile;
            this.pic = pic;
        });
    }

    /******Mention the actions to update observables here******/
    /** To Set about observable value */
    setBio(data) {
        let bio = {
            firstName: data.firstName,
            lastName: data.lastName,
            designation: data.designation,
            location: data.location
        };
        this.profileApi.updateUserInfo(this.username, { bio }).then((res) => {
            console.info(res)
            this.bio = bio;
        });
    }

    /**Can call the method setAboutValue('value') */
    setAboutValue(data) {
        this.profileApi.updateUserInfo(this.username, { about: data }).then((res) => {
            console.info(res)
            this.about = data;
        });
    }
    /** To Set SpotLight Value */
    /**Can call the method setSpotlightValue({}) */
    setSpotlightValue(data) {
        this.profileApi.updateUserInfo(this.username, { spotlight: data }).then((res) => {
            console.info(res)
            this.spotlight = data;
        });
    }

    setEducation(data) {
        let education = {
            school: data.school,
            college: data.college,
            univ: data.univ
        };
        this.profileApi.updateUserInfo(this.username, { education }).then((res) => {
            console.info(res)
            this.education = education;
        });
    }

    setWork(data) {
        let work = {
            current: data.current,
            previous: data.previous
        };
        this.profileApi.updateUserInfo(this.username, { work }).then((res) => {
            console.info(res)
            this.work = work;
        });
    }
    setDesignValue(data) {
        this.profileApi.updateUserInfo(this.username, { design: data }).then((res) => {
            console.info(res)
            this.design = data;
        });
    }
    setSocialProfileValue(data) {
        this.socialprofile.push(data);
        this.profileApi.updateUserInfo(this.username, { socialprofile: this.socialprofile }).then((res) => {
            console.info(res);
        });
    }

    setPic(data) {
        this.profileApi.updateUserInfo(this.username, { pic: data }).then((res) => {
            console.info(res);
            this.pic = data
        });
    }
}

/**Define the observable, action, computed variables inside the decorate */
decorate(AppProfileStore, {
    username: observable,
    bio: observable,
    about: observable,
    spotlight: observable,
    education: observable,
    work: observable,
    design: observable,
    socialprofile: observable,
    pic: observable,
    setBio: action,
    setAboutValue: action,
    setSpotlightValue: action,
    setEducation: action,
    setWork: action,
    setDesignValue: action,
    setSocialProfileValue: action,
    setPic: action
});
const httpService = new HTTPService();
export const profileStore = new AppProfileStore(httpService);