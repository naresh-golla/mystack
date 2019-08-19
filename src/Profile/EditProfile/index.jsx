import React from 'react';
import { Accordion } from 'react-bootstrap';
import { profileStore } from "../../services/store-service";
import EditBio from "./EditBio";
import EditAbout from "./EditAbout";
import EditPic from "./EditPic";
import EditSpotLight from "./EditSpotLight";
import EditEducation from "./EditEducation";
import EditWork from "./EditWork";
import EditDesign from "./EditDesign";
import EditSocialProfiles from "./EditSocialProfiles";

const EditProfile = (props) => {
    return (
        <div className="editLeftPanel">
            <div className="text-center">
                <h1>Edit</h1>
            </div>
            <Accordion defaultActiveKey="0" className="myaccordion">
                <EditBio editProfile={profileStore} />
                <EditAbout editProfile={profileStore} />
                <EditPic editProfile={profileStore} />
                <EditSpotLight editProfile={profileStore} />
                <EditEducation editProfile={profileStore} />
                <EditWork editProfile={profileStore} />
                <EditDesign editProfile={profileStore} />
                <EditSocialProfiles editProfile={profileStore} />
            </Accordion>
        </div>
    )
};

export default EditProfile;