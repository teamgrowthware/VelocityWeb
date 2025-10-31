import Menu from "./Menu";
import { Button, Input } from "../Library/Module";
import { useEffect, useState } from "react";
import { EnquiryFrontendDetails } from "../servies/services";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import validateEmail, { isOnlyNumbers } from "../Library/Utility/Utility";
import FloatMenu from "./FloatMenu";
import "./Footer.css"; // Import custom styles

const Footer = () => {
    const [formData, setFormData] = useState<any>({});
    const [disabled, setDisabled] = useState(true);

    const onChangeSingleCallback = (data: any) => {
        setFormData((prevState: any) => ({
            ...prevState,
            ...data,
        }));
    };

    useEffect(() => {
        if (formData?.email_id?.length > 3 && formData?.mobile?.length === 10) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [formData?.email_id?.length, formData?.mobile?.length]);

    const submit = async () => {
        if (formData?.email_id?.length > 1 && formData?.mobile?.length > 1) {
            const customValidateInput = validateEmail(formData?.email_id);
            const isOnlyNumbersValid = isOnlyNumbers(formData?.mobile);

            if (customValidateInput && isOnlyNumbersValid) {
                const userInput = {
                    email: formData.email_id,
                    mobile: formData.mobile,
                    organization_id: "vctc",
                    created_by: formData.email_id,
                    status: "0",
                };

                try {
                    const response = await EnquiryFrontendDetails(userInput);
                    if (response?.data?.isSuccess) {
                        toast.success("Email has been sent");
                        setFormData({ email_id: "", mobile: "" });
                    } else {
                        toast.error("Something went wrong, please try again");
                    }
                } catch (error) {
                    toast.error("Error submitting form");
                }
            } else {
                toast.error("Enter valid email id or mobile number");
            }
        } else {
            toast.error("Fill all required fields");
        }
    };

    return (
        <>
            {/* Stats Section */}
            <div className="pfa">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col"> <strong>1,00,000+</strong> Students Trained </div>
                        <div className="col"> <strong>5+</strong> Centers </div>
                        <div className="col"> <strong>5+</strong> Expert Instructors </div>
                        <div className="col"> <strong>15+</strong> Courses </div>
                        <div className="col"> <strong>105+</strong> Corporate Clients </div>
                        <div className="col"> <strong>50+</strong> Academic Associations</div>
                    </div>
                </div>
            </div>

            {/* Floating Menu */}
            <div className="floatedMenu">
                <ul>
                    <li><a className={"btn btn-primary"} href="tel:+919422761663"><span className="material-symbols-outlined">
                        phone_in_talk
                    </span></a></li>
                    <li>
                        <NavLink className={"btn btn-primary"} to={"/cms/refer-and-earn"}>
                            <span className="material-symbols-outlined">
                                inbox_text_person
                            </span></NavLink></li>
                    <li><NavLink className={"btn btn-primary"} to={"/courses"}>
                        <span className="material-symbols-outlined">
                            view_list
                        </span></NavLink>
                    </li>
                </ul>
            </div>
            {/* <div className="SubscribeNewsletter">
                <div><span className="material-symbols-outlined mt-2">
                    login
                </span></div>
                <div><h1>Quick Chat</h1></div>
                <div><Input customValidationMsg="Please enter valid email id" inputType="email" onChangeSingleCallback={onChangeSingleCallback} inputName="email_id" placeholder="Enter Your Email Id"></Input></div>
                <div><Input inputType="number" onChangeSingleCallback={onChangeSingleCallback} inputName="mobile" placeholder="Enter Your Mobile Number"></Input></div>
                <div><Button disabled={disabled} onClick={() => submit()}>Submit</Button></div>
            </div> */}

            {/* Main Footer */}
            <footer className="main-footer ">
                <div className="container">
                    <div className="row ">
                        {/* About Section */}
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="footer-section">
                                <h4 className="footer-title">Velocity</h4>
                                <p className="footer-description">
                                    Empowering students to become industry-ready developers through comprehensive training and mentorship.
                                </p>
                                <div className="visit-us">
                                    <span className="material-symbols-outlined">location_on</span>
                                    <div>
                                        <p className="mb-0"><strong>Visit Us</strong></p>
                                        <p>123 Tech Park, Indore</p>
                                        <p>Madhya Pradesh, 452001</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="footer-section">
                                <h4 className="footer-title">Quick Links</h4>

                                <ul className="list-unstyled footer-links">
                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                    <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                    <li><NavLink to={"/courses"}>Courses</NavLink>
                                    </li>
                                    <li><NavLink to={"/upcoming-batches"}>Upcoming Batches</NavLink></li>
                                    {/* <li><NavLink to={"/blog"}>Blog</NavLink></li>s */}
                                    <li><NavLink to={"/testimonials"}>Testimonials</NavLink></li>
                                    <li><NavLink to={"/cms/refer-and-earn"}>Refer & Earn</NavLink></li>

                                </ul>
                            </div>
                        </div>

                        {/* Popular Courses */}
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="footer-section">
                                <h4 className="footer-title">Policies</h4>
                                <ul className="list-unstyled footer-links">
                                    <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                    <li className="footerMenu"><NavLink to={"/cms/privacy-policy"}>Privacy Policy</NavLink></li>
                                    <li className="footerMenu"><NavLink to={"/cms/return-and-refund-policy"}>Return & Refund Policy</NavLink></li>
                                    <li className="footerMenu"><NavLink to={"/cms/terms-and-conditions"}>Terms and Conditions</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mb-md-0">
                            <div className="mb-3">
                                <label htmlFor="emailInput" >Email address</label>
                                <Input id="emailInput" customValidationMsg="Please enter valid email id" inputType="email" onChangeSingleCallback={onChangeSingleCallback} inputName="email_id" placeholder="Enter Your Email Id"></Input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="numberInput" >Mobile Number</label>
                                <Input id="numberInput" inputType="number" onChangeSingleCallback={onChangeSingleCallback} inputName="mobile" placeholder="Enter Your Mobile Number"></Input>
                            </div>
                            <button onClick={() => submit()}
                                className="btn  btn-block btn-subscribe d-flex align-items-center justify-content-center gap-2"
                            >
                                Submit
                            </button>
                            <div className="contact-info">
                                <span className="material-symbols-outlined">phone</span>
                                <span>+91 94227 61663</span>
                                <span className="separator">|</span>
                                <span className="material-symbols-outlined">mail</span>
                                <span>info@vctcpune.com</span>
                            </div>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/velocitycorporatetariningcentre/" target="_blank" rel="noopener noreferrer" title="Facebook">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                                <a href="https://www.youtube.com/@velocityclassespune" target="_blank" rel="noopener noreferrer" title="YouTube">
                                    <i className="ri-youtube-fill"></i>
                                </a>
                                <a href="https://www.instagram.com/vctc_official/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                    <i className="ri-instagram-fill"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    {/* <div className="row"> */}
                    <div className="col-12 text-center ">
                        <p className="copyright-text">
                            © 2025 Velocity Training Center. All rights reserved.
                        </p>
                    </div>
                    {/* </div> */}
                </div>
            </footer >

            <FloatMenu />
        </>
    );
};

export default Footer;