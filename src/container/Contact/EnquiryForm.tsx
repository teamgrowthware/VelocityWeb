/* eslint-disable no-empty-pattern */
import { useContext, useEffect, useState } from "react";
import { Button, Input, Select } from "../../Library/Module";
import { ThemeContext } from "../Context/Theme/Context";
import { EnquiryDetails } from "../../servies/services";
import { toast } from "react-toastify";
import validateEmail, { hasOnlyLetters, isOnlyNumbers } from "../../Library/Utility/Utility";
import MobileInput from "../../Library/Input/MobileInput";

// declare global {
//     interface Window {
//         fbq: (...args: any[]) => void;
//     }
// }


const EnquiryForm = ({
    courseId,
    callback

}: any) => {
    const [isInValid, setIsInValid] = useState(true)
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
            if (courseId) {
                setFormData({
                    course: courseId
                })
            }
        }

    }, [coursesList, courseId])


    const submit = async () => {
        console.log("jjjj",formData?.mobile,formData.name)
        if (formData?.name?.length !== null &&
            formData?.email?.length !==null &&
            formData?.mobile?.length !==null &&
            formData?.course?.length > 1
        ) {

            const cusotmValidateInput = validateEmail(formData?.email);
            const hasOnlyLetterstt = hasOnlyLetters(formData?.name)
            const isOnlyNumbersValid = isOnlyNumbers(formData?.mobile)

            if (cusotmValidateInput  && formData?.mobile?.length === 10) {
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
                    sessionStorage.setItem("enquiryFormSubmitted", courseId);
                    // Pass formData to callback so CourseModules can store email/phone
                    callback?.(formData);
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
        if (formData?.name !==null && formData?.email !==null && formData?.mobile !==null  && formData?.course?.length > 1) {
            setIsInValid(false)
        } else {
            setIsInValid(true)
        }
    }, [formData])

    return (
        <div className="">
            <h5>Enquiry Now--</h5>
            <div className="row">
                <Input col="12" inputType="text" onChangeSingleCallback={onChangeSingleCallback} placeholder="Enter Name" inputName="name"></Input>
                {/* <MobileInput col="12" inputType="text" onChangeSingleCallback={onChangeSingleCallback} placeholder="Enter number" inputName="mobile" ></MobileInput> */}
                <Input col="12" inputType="email" onChangeSingleCallback={onChangeSingleCallback} placeholder="Enter Email Id" inputName="email"></Input>
                <Input col="12" inputType="number" onChangeSingleCallback={onChangeSingleCallback} placeholder="Enter Contact No" inputName="mobile"></Input>
                <Select
                    col="12"
                    inputName={"course"}
                    options={courseOptions ?? []}
                    onChangeSingleCallback={onChangeSingleCallback}
                    selectedItem={courseOptions?.find(
                        (selected: any) => {
                            console.log("item.value", courseOptions, selected)
                            return (selected.value === formData?.course)
                        }
                    )}
                    required={true}
                    placeholder={"Select Course"}
                    search_option={false}
                    isLoading={true}
                    value={formData?.course}></Select>
                <div className="col-12">
                    <Button onClick={() => submit()} disabled={isInValid} className="btn btn-primary col-3">Submit</Button>
                </div>
            </div>
        </div>
    );
};
export default EnquiryForm;
