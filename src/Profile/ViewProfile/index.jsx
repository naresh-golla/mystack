import React from 'react';
import { observer } from "mobx-react";

const ViewProfile = observer(props => {
    const { viewProfile } = props;
    console.log(viewProfile, "viewProfile....");
    return (
        <div className="alignCenter">
            <div className="paddingTop">
                <div className="userCard">
                    <header>
                        <div className="pic"></div>
                    </header>
                    <div className="heading">
                        <section>
                            <h1>Naresh Golla</h1>
                        </section>
                        <section>
                            <h2>Web Developer in Hyderabad, India</h2>
                        </section>
                        <section>
                            <div className="aboutButton">
                                <a href={viewProfile.val.url} target="_blank" rel="noopener noreferrer" className="btn-purple">
                                    <i className={`${viewProfile.val.icon} 'facon'}`}></i>
                                    {viewProfile.val.title}
                                </a>
                            </div>
                        </section>
                        <section>
                            <div className="context">
                                {viewProfile.bio !== "" ? (<p>{viewProfile.bio}</p>) :
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
                                        <li> Home</li>
                                        <li>Menu 1</li>
                                        <li>Menu 2</li>
                                        <li>Menu 3</li>
                                    </ul>
                                </div>
                                <div className="work">
                                    <h4>Education</h4>
                                    <ul className="exp_ul">
                                        <li> Home</li>
                                        <li>Menu 1</li>
                                        <li>Menu 2</li>
                                        <li>Menu 3</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="socialIcons">
                                <ul className="list-inline">
                                    <li className="list-inline-item "><a href="#"><i className=" fa fa-facebook" title="visit my facebook profile"></i></a></li>
                                    <li className="list-inline-item "><a href="#"><i className=" fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item "><a href="#"><i className=" fa fa-telegram"></i></a></li>
                                    <li className="list-inline-item "><a href="#"><i className=" fa fa-youtube-play"></i></a></li>
                                    <li className="list-inline-item "><a href="#"><i className=" fa fa-slack"></i></a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* </Col>
                        <Col md={3} xs={1} ></Col>
                    </Row> */}
        </div>
    )
});

export default ViewProfile;