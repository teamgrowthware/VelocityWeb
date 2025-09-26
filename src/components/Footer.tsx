import Menu from "./Menu";
import { Button, Input } from "../Library/Module";
import { useEffect, useState } from "react";
import { EnquiryFrontendDetails } from "../servies/services";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import validateEmail, { isOnlyNumbers } from "../Library/Utility/Utility";
import FloatMenu from "./FloatMenu";
const Footer = () => {

    const [formData, setFormData] = useState<any>();
    const onChangeSingleCallback = (data: any) => {
        setFormData((prevState: any) => ({
            ...prevState,
            ...data,
        }));
    };

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (formData?.email_id?.length > 3 &&
            formData?.mobile?.length === 10) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [formData?.email_id?.length, formData?.mobile?.length])

    const submit = async () => {
        if (formData?.email_id?.length > 1 &&
            formData?.mobile?.length > 1
        ) {
            const cusotmValidateInput = validateEmail(formData?.email);
            const isOnlyNumbersValid = isOnlyNumbers(formData?.mobile)
            if (cusotmValidateInput && isOnlyNumbersValid) {
                const userInput = {
                    email: formData.email_id,
                    mobile: formData.mobile,
                    organization_id: "vctc",
                    created_by: formData.email_id,
                    status: "0"
                }
                const response = await EnquiryFrontendDetails(userInput);
                console.log("response", response?.data)
                if (response?.data?.isSuccess) {
                    toast.success("Email has been sent");
                    setFormData({
                        name: '',
                        email: '',
                    })
                } else {
                    toast.error("Something went wrong, please try again");
                }
            } else {
                toast.error("Enter valid email id or mobile number");

            }
        } else {
            toast.error("Fill all required fields");
        }
    }

    return (
        <>
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
            <div className="SubscribeNewsletter">
                <div><span className="material-symbols-outlined mt-2">
                    login
                </span></div>
                <div><h1>Quick Chat</h1></div>
                <div><Input customValidationMsg="Please enter valid email id" inputType="email" onChangeSingleCallback={onChangeSingleCallback} inputName="email_id" placeholder="Enter Your Email Id"></Input></div>
                <div><Input inputType="number" onChangeSingleCallback={onChangeSingleCallback} inputName="mobile" placeholder="Enter Your Mobile Number"></Input></div>
                <div><Button disabled={disabled} onClick={() => submit()}>Submit</Button></div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mainMenu">
                            <Menu></Menu>
                        </div>
                        <div className="col-md-12 text-center">
                            <ul className="social_icons">
                                <li><span className="material-symbols-outlined">phone_in_talk</span> +91 94227 61663</li>
                                <li><span className="material-symbols-outlined">mail</span> info@vctcpune.com</li>
                            </ul></div>
                        <div className="col-md-12 text-center">
                            <ul className="social_icons social_icons2">
                                <li><a className="social_icon" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/velocitycorporatetariningcentre/?mibextid=ZbWKwL" title=""><i className="ri-facebook-fill"></i></a> </li>
                                <li><a className="social_icon" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/@velocityclassespune" title=""><i className="ri-youtube-fill"></i></a> </li>
                                <li><a className="social_icon" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/vctc_official?igsh=MXRrdXB5NmUwMmRxZA==" title=""><i className="ri-instagram-fill"></i></a> </li>
                                <li><a className="social_icon" rel="noopener noreferrer" target="_blank" href="https://t.me/Velocityclassofficial" title=""><i className="ri-twitter-fill"></i></a></li></ul>
                        </div>
                        <div className="col-md-12 text-center">
                            <p>Copyright 2025 VCTC Pune . All Rights Reserved</p>
                        </div>
                    </div>
                </div>

            </div>

            <FloatMenu></FloatMenu>
        </>
    )
}

export default Footer