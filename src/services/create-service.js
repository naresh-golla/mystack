import { observable, action, decorate } from "mobx";
import { get } from 'lodash';
import HTTPService from "./http-service";
import { JsonKeys } from "../utils/constants";

/** All the View and Edit Profile Observables are handled in this Store */
class CreateProfileStore {
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
    interests = [];

    constructor(profileApi) {
        this.profileApi = profileApi;
    }

    /******Mention the actions to update observables here******/
    /** To Set about observable value */
    setUserName(data) {
        this.username = data;
    }

    setBio(data) {
        let bio = {
            firstName: data.firstName,
            lastName: data.lastName,
            designation: data.designation,
            location: data.location,
            email: data.email
        };
        this.bio = bio;
    }

    /**Can call the method setAboutValue('value') */
    setAboutValue(data) {
        this.about = data;
    }
    /** To Set SpotLight Value */
    /**Can call the method setSpotlightValue({}) */
    setSpotlightValue(data) {
        this.spotlight = data;
    }

    setEducation(data) {
        let education = {
            school: data.school,
            college: data.college,
            univ: data.univ
        };
        this.education = education;
    }

    setWork(data) {
        let work = {
            current: data.current,
            previous: data.previous
        };
        this.work = work;
    }
    setDesignValue(data) {
        this.design = data;
    }
    setSocialProfileValue(data) {
        this.socialprofile.push(data);
    }

    setPic(data) {
        this.pic = data
    }
}

/**Define the observable, action, computed variables inside the decorate */
decorate(CreateProfileStore, {
    username: observable,
    bio: observable,
    about: observable,
    spotlight: observable,
    education: observable,
    work: observable,
    design: observable,
    socialprofile: observable,
    pic: observable,
    setUserName: action,
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
export const createProfile = new CreateProfileStore(httpService);