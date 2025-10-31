/* eslint-disable no-empty-pattern */
import { useContext, useEffect, useState } from "react";
import { Button, Input, Select } from "../../Library/Module";
import Wrapper from "../Wrapper";
import BannerCourses from "../../images/BannerCourses.png"
import { ThemeContext } from "../Context/Theme/Context";
import { EnquiryDetails } from "../../servies/services";
import { toast } from "react-toastify";
import validateEmail, { hasOnlyLetters, isOnlyNumbers } from "../../Library/Utility/Utility";

declare global {
    interface Window {
        fbq: (...args: any[]) => void;
    }
}

const Contact = () => {
    const [isInValid, setIsInValid] = useState(true)
    const [pageContent, setPageContent] = useState<any>({})
    const [formData, setFormData] = useState<any>();
    const [courseOptions, setCourseOptions] = useState<any>([]);
    const onChangeSingleCallback = (data: any) => {
        setFormData((prevState: any) => ({
            ...prevState,
            ...data,
        }));
    };

    const { coursesList } = useContext(ThemeContext)

    useEffect(() => {
        if (coursesList?.length > 0) {
            let list: any = []
            coursesList?.forEach((item: any) => {
                list.push({
                    text: item?.name,
                    value: item?.slug,
                    id: item?.slug,
                })
            })
            setCourseOptions(list)
        }
    }, [coursesList])


    const submit = async () => {
        if (formData?.name?.length > 1 &&
            formData?.email?.length > 1 &&
            formData?.mobile?.length > 1 &&
            formData?.course?.length > 1
        ) {

            const cusotmValidateInput = validateEmail(formData?.email);
            const hasOnlyLetterstt = hasOnlyLetters(formData?.name)
            const isOnlyNumbersValid = isOnlyNumbers(formData?.mobile)

            if (cusotmValidateInput && hasOnlyLetterstt && isOnlyNumbersValid && formData?.mobile?.length === 10) {
                const date = new Date()
                const userInput = {
                    name: formData.name,
                    email_id: formData.email,
                    mobile: formData.mobile,
                    course_preference_1: formData.course,
                    description: formData.message,
                    created_by: formData.name,
                    enquiry_mode: "student",
                    next_followup_date: date.toISOString(),
                    status: "0"
                }
                const response = await EnquiryDetails(userInput);
                console.log("response", response?.data)
                if (response?.data?.isSuccess) {
                    if (window.fbq) {
                        window.fbq('track', 'Lead');
                    }
                    toast.success("Email has been sent");
                    setFormData({
                        name: '',
                        email: '',
                        course: '',
                        message: ''
                    })
                } else {
                    toast.error("Something went wrong, please try again");
                }

            } else {
                toast.error("Enter valid email id or mobile number or name");
            }
        } else {
            toast.error("Fill all required fields");
        }
    }

    useEffect(() => {
        if (formData?.name?.length > 1 && formData?.email?.length > 1 && formData?.mobile?.length > 1 && formData?.course?.length > 1) {
            setIsInValid(false)
        } else {
            setIsInValid(true)
        }
    }, [formData])

    return (
        <Wrapper pageTitle="Contact Us" breadcrumbList={null}>
            {/* Banner Section - Using Bootstrap background utilities */}
            {/* <div className="bannerInner" style={{ background: `url(${pageContent?.cms_image ? process.env.react_app_base_url + "/" + pageContent?.cms_image : BannerCourses})` }}> </div> */}


            <div className=" p-5">
                <h1 className="text-center fw-bold text-black shadow-sm animate-fadeInDown" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Contact Us
                </h1>
                <p className="text-center mb-5 text-muted animate-fadeInDown delay-100">
                    We would love to provide you with more information and answer any questions that you might have. <br />
                    We look forward to hearing from you.
                </p>

                {/* Branch Locations Section */}
                <h1 className="text-center mb-4 animate-fadeInUp delay-200" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Our Branches
                </h1>
                <div className="row g-4 mb-5">

                    <div className="col-md-6 animate-fadeInLeft delay-300">
                        <div className="card shadow-lg p-3 h-100 rounded-3 branch-card hover-lift">
                            <div className="card-body">
                                <h4 className="card-title fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#667eea' }}>
                                    <span className="material-symbols-outlined icon-float">location_city</span>
                                    Katraj Branch
                                </h4>
                                <div className="mb-4">
                                    <p className="text-dark contact-info-item">
                                        <span className="material-symbols-outlined align-middle me-2" style={{ color: '#667eea' }}>map</span>
                                        Velocity Corporate Training Center, Panche Mall, 12, Datta Nagar Rd,
                                        Near Bharti Vidyapeeth, Shriram Nagar, Katraj,
                                        Pune, Maharashtra 411046.
                                    </p>
                                    <p className="contact-info-item">
                                        <a className="text-decoration-none text-dark" href="tel:+919422761663">
                                            <span className="material-symbols-outlined align-middle me-2" style={{ color: '#667eea' }}>phone_in_talk</span>
                                            +91 94227 61663
                                        </a>
                                    </p>
                                    <p className="contact-info-item">
                                        <a className="text-decoration-none text-dark" href="mailto:info@vctcpune.com" title="info@vctcpune.com">
                                            <span className="material-symbols-outlined align-middle me-2" style={{ color: '#667eea' }}>mail</span>
                                            info@vctcpune.com
                                        </a>
                                    </p>
                                    <p className="text-dark contact-info-item">
                                        <span className="material-symbols-outlined align-middle me-2" style={{ color: '#667eea' }}>schedule</span>
                                        10:00AM to 05:30PM
                                    </p>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7004881440207!2d73.8515857!3d18.4519033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac9278b4389%3A0x85f842d659238364!2sVelocity%20Corporate%20Training%20Center%20Katraj%20pune!5e0!3m2!1sen!2sin!4v1738240739536!5m2!1sen!2sin"
                                    title="Katraj Branch Location"
                                    width="100%"
                                    height="250"
                                    loading="lazy"
                                    className="border rounded-3"
                                    style={{ border: '3px solid #667eea' }}
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Viman Nagar Branch */}
                    <div className="col-md-6 animate-fadeInRight delay-400">
                        <div className="card shadow-lg p-3 h-100 rounded-3 branch-card hover-lift">
                            <div className="card-body">
                                <h4 className="card-title fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#667eea' }}>
                                    <span className="material-symbols-outlined icon-float">location_city</span>
                                    Viman Nagar Branch
                                </h4>
                                <div className="mb-4">
                                    <p className="text-dark contact-info-item">
                                        <span className="material-symbols-outlined align-middle me-2" style={{ color: '#667eea' }}>map</span>
                                        Velocity Corporate Training Center, Laxmi Narsinh Nivas, 2nd floor,
                                        Kanhur Pathar Patsanstha, Chandan Nagar,
                                        Pune, Maharashtra 411014
                                    </p>
                                    <p className="contact-info-item">
                                        <a className="text-decoration-none text-dark" href="tel:+919422761663">
                                            <span className="material-symbols-outlined align-middle me-2" style={{ color: '#667eea' }}>phone_in_talk</span>
                                            +91 94227 61663
                                        </a>
                                    </p>
                                    <p className="contact-info-item">
                                        <a className="text-decoration-none text-dark" href="mailto:info@vctcpune.com" title="info@vctcpune.com">
                                            <span className="material-symbols-outlined align-middle me-2" style={{ color: '#667eea' }}>mail</span>
                                            info@vctcpune.com
                                        </a>
                                    </p>
                                    <p className="text-dark contact-info-item">
                                        <span className="material-symbols-outlined align-middle me-2" style={{ color: '#667eea' }}>schedule</span>
                                        10:00AM to 05:30PM
                                    </p>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.249750223696!2d73.92811047519274!3d18.562775782538942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c114cb2be381%3A0xb647cfeb251665eb!2sVelocity%20Corporate%20Training%20Centre!5e0!3m2!1sen!2sin!4v1740928810141!5m2!1sen!2sin"
                                    title="Viman Nagar Branch Location"
                                    width="100%"
                                    height="250"
                                    loading="lazy"
                                    className="border rounded-3"
                                    style={{ border: '3px solid #667eea' }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enquiry Form Section */}
                <div className="card shadow-lg p-4 rounded-3 bg-light border-primary border-3">
                    <div className="card-body">
                        <div className="row justify-content-center align-content-start">

                            <div className="col-lg-9">
                                <div className="p-3">
                                    <h3 className="card-title mb-1 text-primary">Enquire Now </h3>
                                    <p className="mb-4 text-muted">Drop us a line, someone from our team will get in touch with you shortly.</p>
                                    <div className="row g-3">
                                        <Input col="6" inputType="text" onChangeSingleCallback={onChangeSingleCallback} labelName="Name" inputName="name" value={formData?.name || ''}></Input>
                                        <Input col="6" inputType="email" onChangeSingleCallback={onChangeSingleCallback} labelName="Email Id" inputName="email" value={formData?.email || ''}></Input>
                                        <Input col="6" inputType="number" onChangeSingleCallback={onChangeSingleCallback} labelName="Contact No" inputName="mobile" value={formData?.mobile || ''}></Input>
                                        <Select
                                            col="6"
                                            inputName={"course"}
                                            labelName={"Course"}
                                            options={courseOptions ?? []}
                                            onChangeSingleCallback={onChangeSingleCallback}
                                            selectedItem={courseOptions?.find(
                                                (selected: any) => selected.value === formData?.course
                                            )}
                                            required={true}
                                            placeholder={"Select Course"}
                                            search_option={false}
                                            isLoading={true}
                                            value={formData?.course}
                                        />
                                        <div className="col-12">
                                            {/* Assuming you have a Textarea component or using a simple Input for message */}
                                            {/* Note: Original code was missing the message input field, I'll add a placeholder one for completeness. */}
                                            <Input
                                                inputType="textarea"
                                                onChangeSingleCallback={onChangeSingleCallback}
                                                labelName="Message (Optional)"
                                                inputName="message"
                                                // rows={3} 
                                                value={formData?.message || ''}
                                            />
                                        </div>
                                        <div className="col-12 mt-4">
                                            <Button
                                                onClick={() => submit()}
                                                disabled={isInValid}
                                                className="btn btn-primary btn-lg"
                                            // style={{ minWidth: '150px' }}
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 d-none d-lg-block">
                                <div className="p-3 border-start border-info h-100">
                                    <h5 className="text-info mb-3">Quick Contact</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <a className="text-decoration-none text-dark" href="tel:+919422761663">
                                                <span className="material-symbols-outlined align-middle me-2 text-info">phone_in_talk</span>
                                                +91 94227 61663
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a className="text-decoration-none text-dark" href="mailto:info@vctcpune.com" title="info@vctcpune.com">
                                                <span className="material-symbols-outlined align-middle me-2 text-info">mail</span>
                                                info@vctcpune.com
                                            </a>
                                        </li>
                                        <li className="mb-2 text-dark">
                                            <span className="material-symbols-outlined align-middle me-2 text-info">schedule</span>
                                            10:00AM to 05:30PM
                                        </li>
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