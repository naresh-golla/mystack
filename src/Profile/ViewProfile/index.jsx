import React from 'react';
import { observer } from "mobx-react";
import { get } from 'lodash';
import { Helmet } from 'react-helmet';
class ViewProfile extends React.Component {

    componentDidMount() {
        const { viewProfile } = this.props;
        viewProfile.fetchUserInfo(this.props.username);
    }


    render() {
        const { viewProfile } = this.props;

        const { bio, about, spotlight, education, work, design, socialprofile, pic } = viewProfile;
        console.log(viewProfile, "viewProfile....");
        console.log(design, "color");
        let title="Bio,edu,exp";
        var description="about";
        return (
            <React.Fragment>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Helmet>
            
            <div className="bg"
                style={{ background: design }}>
                <div className="alignCenter">
                    <div className="paddingTop">
                        <div className="userCard">
                            <header>
                                <div className="pic"
                                    style={{ backgroundImage: `url(${pic})` }}>
                                </div>
                            </header>
                            <div className="heading">
                                <section>
                                    <h1>{get(bio, "firstName", "")} {get(bio, "lastName", "")}</h1>
                                </section>
                                <section>
                                    <h2>{get(bio, "designation", "")} in {get(bio, "location", "")}</h2>
                                </section>
                                <section>
                                    <div className="aboutButton">
                                        <a href={get(spotlight, "url", "")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-purple"
                                            style={{ background: design }}
                                        >
                                            <i className={`${spotlight.icon} facon`}></i>
                                            {spotlight.title}{" "}
                                        </a>
                                    </div>
                                </section>
                                <section>
                                    <div className="context">
                                        {about !== "" ? (<p>{about}</p>) :
                                            (<div><p>Hi, I am a professional web developer. (Though I have started my professional career in software development with Visual Basic.net) . Over the last few years I have developed a wide range of applications/softwares usingJava, HTML , PHP , Javascript, jQuery , Oracle andMySQL for different companies and business.</p>
                                                <p>I have also experience in OOP, MVC Framework, Java . I want to achieve the peak position by providing high quality work and by learning new technologies.And have experience of 4 years in PHP , 1 years inWordpress. Though I am working most of my time with PHP but I love Java most among all the programming language.</p>
                                                <p>Now I am working for a software company Tech Mahindra</p></div>)}
                                    </div>
                                </section>
                                <section>
                                    <div className="Edu_Exp">
                                        <div className="work">
                                            <h4>Work Experience</h4>
                                            <ul className="work_ul">
                                                <li> <span>Current : &nbsp;</span> {get(work, "current", "")} </li>
                                                <li> <span>Previous : &nbsp;</span> {get(work, "previous", "")} </li>
                                            </ul>
                                        </div>
                                        <div className="work">
                                            <h4>Education</h4>
                                            <ul className="exp_ul">
                                                <li> <span>School : &nbsp;</span> {get(education, "school", "")}</li>
                                                <li> <span>College : &nbsp;</span> {get(education, "college", "")}</li>
                                                <li> <span>University :&nbsp;</span> {get(education, "univ", "")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="socialIcons">
                                        <ul className="list-inline">
                                            {socialprofile.map(ele => (
                                                <li className="list-inline-item"><a href={ele.url}><i className={ele.icon} title={ele.title}></i></a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default observer(ViewProfile);