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
    hobby = [];
    domain = "";
    error = "";
    redirectToDomain = "";

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

    setInterests(data) {
        this.interests.push(data);
    }

    setHobby(data) {
        this.hobby.push(data);
    }

    setDomain(data) {
        this.domain = data;
    }

    createUser() {
        const params = {
            username: this.username,
            bio: this.bio,
            about: this.about,
            spotlight: this.spotlight,
            education: this.education,
            work: this.work,
            design: this.design,
            socialprofile: this.socialprofile,
            pic: this.pic,
            interests: this.interests,
            hobby: this.hobby,
            domain: this.domain
        };
        this.profileApi.createUser(params).then((response) => {

            this.redirectToDomain = this.domain;
        }).catch(error => { this.error = "Create User Failed" });
    }

}

/**Define the observable, action, computed variables inside the decorate */
decorate(CreateProfileStore, {
    /**Username */
    username: observable,
    setUserName: action,
    /**Bio */
    bio: observable,
    setBio: action,
    /**About */
    about: observable,
    setAboutValue: action,
    /**SpotLight */
    spotlight: observable,
    setSpotlightValue: action,
    /**Education */
    education: observable,
    setEducation: action,
    /**Work */
    work: observable,
    setWork: action,
    /**Design */
    design: observable,
    setDesignValue: action,
    /**Social Profile */
    socialprofile: observable,
    setSocialProfileValue: action,
    /**Pic */
    pic: observable,
    setPic: action,
    /**Interests */
    interests: observable,
    setInterests: action,
    /**Hobby */
    hobby: observable,
    setHobby: action,
    /**Domain */
    domain: observable,
    setDomain: action,
    /**Error */
    error: observable,
    redirectToDomain: observable,
});
const httpService = new HTTPService();
export const createProfile = new CreateProfileStore(httpService);
