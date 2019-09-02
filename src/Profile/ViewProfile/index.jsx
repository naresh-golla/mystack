import React from 'react';
import { observer } from "mobx-react";
import { get } from 'lodash';
import { Helmet } from 'react-helmet';
import { Spinner } from "reactstrap"
class ViewProfile extends React.Component {

    componentDidMount() {
        const { viewProfile } = this.props;
        viewProfile.fetchUserInfo(this.props.username);
    }


    render() {
        const { viewProfile } = this.props;

        const { bio, about, spotlight, education, work, design, socialprofile, pic ,interests } = viewProfile;
        //console.log(viewProfile, "viewProfile....");
        //console.log(design, "color");
        //socialprofile.map(ele => console.log(ele.url,"ELELELELLELELE"));
        return (
            <React.Fragment>
                <Helmet>
                    <title>{get(bio, "firstName", "")} {get(bio, "lastName", "")} {get(bio, "location", "")}  {get(bio, "designation", "")}</title>
                    <meta name="description" content="description" />
                </Helmet>
                
                    <div className="bg"
                    style={{ background: design }}>
                    <div className="alignCenter">
                        <div className="paddingTop">
                                        <div className="userCard">
                                        {get(bio, "firstName", "")!==""?(
                                            <React.Fragment>
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
                                                <h2><span>{get(bio, "designation", "")}</span> {(get(bio, "designation", "")!=="")?(<span>in</span>):(<span>from</span>)} <span>{get(bio, "location", "")}</span></h2>
                                            </section>
                                            <section>
                                                <div className="aboutButton">
                                                    <a href={get(spotlight, "url", "")}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-profile"
                                                        style={{ background: design}}
                                                    >
                                                        <i className={`${spotlight.icon} facon`}></i>
                                                        {spotlight.title}{" "}
                                                    </a>
                                                </div>
                                            </section>
                                            <section>
                                                <div className="context">
                                                    {about !== "" ? (<p>{about}</p>) :
                                                        (<div>
                                                            <p>I am a {get(bio, "firstName", "")} {get(bio, "lastName", "")} working as {get(bio, "designation", "")} currently living in {get(bio, "location", "")}. My interests range from reading novels to creating websites. I am also interested in desigining and surfingtheweb.</p>
                                                            {interests.map((ele,index) => (ele.interests))}
                                                            <p>You can click the button above to visit {spotlight.title}. If you’d like to get in touch, feel free to say hello through any of the social links below.</p>
                                                            {/* <p>Hi, I am a professional web developer. (Though I have started my professional career in software development with Visual Basic.net) . Over the last few years I have developed a wide range of applications/softwares usingJava, HTML , PHP , Javascript, jQuery , Oracle andMySQL for different companies and business.</p>
                                                            <p>I have also experience in OOP, MVC Framework, Java . I want to achieve the peak position by providing high quality work and by learning new technologies.And have experience of 4 years in PHP , 1 years inWordpress. Though I am working most of my time with PHP but I love Java most among all the programming language.</p>
                                                            <p>Now I am working for a software company Tech Mahindra</p> */}
                                                            </div> 
                                                            )}
                                                </div>
                                            </section>
                                            <section>
                                                <div className="Edu_Exp">
                                                    {(get(work, "current", "")!=="" || get(work, "previous", "")!=="") ?
                                                    (
                                                        <div className="work">
                                                        <h4>Work Experience</h4>
                                                        <ul className="work_ul">
                                                        {get(work, "current", "")!=="" ?(
                                                            <li> <span>Current : &nbsp;</span> {get(work, "current", "")} </li>
                                                        ):"" }
                                                        {get(work, "previous", "")!=="" ?(
                                                            <li> <span>Previous : &nbsp;</span> {get(work, "previous", "")} </li>
                                                        ):""}
                                                        </ul>
                                                    </div>
                                                    ):""
                                                    } 
                                                    {(get(education, "school", "")!=="" || get(education, "college", "")!=="" || get(education, "univ", "")!=="")?
                                                        (<div className="work">
                                                            <h4>Education</h4>
                                                            <ul className="exp_ul">
                                                                {(get(education, "school", "")!=="")?(
                                                                    <li> <span>School : &nbsp;</span> {get(education, "school", "")}</li>
                                                                ):""}
                                                                {(get(education, "college", ""))?(
                                                                    <li> <span>College : &nbsp;</span> {get(education, "college", "")}</li>
                                                                ):""}
                                                                {(get(education, "univ", ""))?(
                                                                    <li> <span>University :&nbsp;</span> {get(education, "univ", "")}</li>
                                                                ):""}                                                    
                                                            </ul>
                                                        </div>):""
                                                    }
                                                </div>
                                            </section>
                                            <section>
                                                <div className="socialIcons">
                                                    <ul className="list-inline">
                                                   
                                                        {socialprofile.map((ele,index) => (
                                                          <li key={index} className="list-inline-item"><a href={ele.url} target="_blank" rel="noopener noreferrer" alt={ele.title}><i className={ele.icon} title={ele.title}></i></a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </section>
                                        </div>
                                        </React.Fragment>
                                         ):(
                                            <span className="spinnerClass">
                                                <Spinner animation="border" role="status" variant="primary">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>
                                            </span>
                                    )}
                                     </div>
                        </div>
                    </div>
                </div>               

           </React.Fragment>
        );
    }
}

export default observer(ViewProfile);