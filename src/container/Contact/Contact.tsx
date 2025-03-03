/* eslint-disable no-empty-pattern */
import { useState } from "react";
import { Button, Card, Input } from "../../Library/Module";
import Wrapper from "../Wrapper";
import BannerCourses from "../../images/BannerCourses.png"

const Contact = () => {
    const [pageContent, setPageContent] = useState<any>({})
    return (
        <Wrapper pageTitle="Dashboard" breadcrumbList={null}>
            <div className="bannerInner">
                <img
                    src={pageContent?.image ? process.env.react_app_base_url + "/" + pageContent?.image : BannerCourses}
                    alt=""
                    title=""
                />
            </div>
            <div className="contactUsPage">
                <div className="container">
                    <h1 className="text-center">Contact Us</h1>
                    <p className="text-center mb-4">We would love to provide you with more information and answer any questions that you might have. <br></br>
                        We look forward to hearing from you.

                    </p>
                    <h5 className="text-center mb-2">Our Branches</h5>
                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <div className="innerShadow">
                                <div className="row justify-content-center align-content-center align-items-center">
                                    <div className="col-md-12">
                                        <div className="inner">
                                            <h4>Katraj Branch</h4>
                                            <p>
                                                <span className="material-symbols-outlined">map</span>
                                                Velocity Corporate Training Center,<br></br>
                                                Panche Mall, 12, Datta Nagar Rd, <br></br>
                                                Near Bharti Vidyapeeth,<br></br>
                                                Shriram Nagar, Katraj,<br></br>
                                                Pune, Maharashtra 411046.</p>
                                            <p><span className="material-symbols-outlined">phone_in_talk</span> 9422761663</p>
                                            <p><span className="material-symbols-outlined">mail</span>info@vctcpune.com</p>
                                            <p><span className="material-symbols-outlined">schedule</span> 10:00AM to 05:30PM</p>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7004881440207!2d73.8515857!3d18.4519033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac9278b4389%3A0x85f842d659238364!2sVelocity%20Corporate%20Training%20Center%20Katraj%20pune!5e0!3m2!1sen!2sin!4v1738240739536!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6  mb-3">
                            <div className="innerShadow">
                                <div className="row justify-content-center align-content-center align-items-center">
                                    <div className="col-md-12">
                                        <div className="inner">
                                            <h4>Viman Nagar Branch</h4>
                                            <p>
                                                <span className="material-symbols-outlined">map</span>
                                                Velocity Corporate Training Center, <br></br>
                                                Laxmi Narsinh Nivas, 2nd floor,
                                                <br></br>Kanhur Pathar Patsanstha,
                                                <br></br>Chandan Nagar, <br></br>
                                                Pune, Maharashtra 411014</p>
                                            <p><a className={"none"} href="tel:+919422761663"><span className="material-symbols-outlined">phone_in_talk</span> +91 94227 61663 </a> </p>
                                            <p><a className={"none"} href="mailto:info@vctcpune.com" title="info@vctcpune.com"><span className="material-symbols-outlined">mail</span>info@vctcpune.com </a></p>
                                            <p><span className="material-symbols-outlined">schedule</span> 10:00AM to 05:30PM</p>
                                        </div>
                                    </div>


                                    <div className="col-md-12">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.249750223696!2d73.92811047519274!3d18.562775782538942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c114cb2be381%3A0xb647cfeb251665eb!2sVelocity%20Corporate%20Training%20Centre!5e0!3m2!1sen!2sin!4v1740928810141!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="innerShadow">
                        <div className="row justify-content-center align-content-center align-items-center">



                            <div className="col-md-9">
                                <div className="inner2">
                                    <h5>Enquiry Now</h5>
                                    <p className="none">Drop us a line, someone from our team will get in touch with you shortly.</p>
                                    <div className="row">
                                        <Input col="6" labelName="Name" inputName=""></Input>
                                        <Input col="6" labelName="Email Id" inputName=""></Input>
                                        <Input col="6" labelName="Contact No" inputName=""></Input>
                                        <Input col="6" labelName="Course" inputName=""></Input>
                                        <div className="col-12">
                                            <Button className="btn btn-primary col-1">Submit</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="contactUsFormList">
                                    <ul>
                                        <li>
                                            <a className={"none"} href="tel:+919422761663"><span className="material-symbols-outlined">phone_in_talk</span> +91 94227 61663 </a>
                                        </li>
                                        <li><a className={"none"} href="mailto:info@vctcpune.com" title="info@vctcpune.com"><span className="material-symbols-outlined">mail</span>info@vctcpune.com </a></li>
                                        <li><span className="material-symbols-outlined">schedule</span> 10:00AM to 05:30PM</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>


        </Wrapper>
    );
};
export default Contact;
