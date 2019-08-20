import { observable, action, decorate } from "mobx";
import HTTPService from "./http-service";

/** All the View and Edit Profile Observables are handled in this Store */
class AppProfileStore {
    /******Mention Observables here*******/
    /**Use proper naming conventions */
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
        this.profileApi.fetchUserInfo(username).then((res) => {
            const { bio, about, spotlight, education, work, design, socialprofile, pic } = res;
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
        this.bio = {
            firstName: data.firstName,
            lastName: data.lastName,
            designation: data.designation,
            location: data.location
        };
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
    setDesignValue(data) {
        this.design = data;
    }
    setSocialProfileValue(data) {
        this.socialprofile.push(data);
    }

    setPic(data) {
        this.pic = data;
    }
}

/**Define the observable, action, computed variables inside the decorate */
decorate(AppProfileStore, {
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