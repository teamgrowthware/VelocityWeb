import { useEffect, useState } from "react";
import { Button, Input } from "../../Library/Module"
import { EnquiryDetails } from "../../servies/services";
import { toast } from "react-toastify";
import validateEmail, { hasOnlyLetters, isOnlyNumbers } from "../../Library/Utility/Utility";

const CampaignForm = () => {

    const [formData, setFormData] = useState<any>();
    const [isInValid, setIsInValid] = useState(true)
    const [courseOptions, setCourseOptions] = useState<any>([]);
    const onChangeSingleCallback = (data: any) => {
        setFormData((prevState: any) => ({
            ...prevState,
            ...data,
        }));
    };

    const submit = async () => {
        const params = new URLSearchParams(window.location.search);

        const date = new Date()
        const userInput = {
            name: formData.name,
            email_id: formData.email,
            mobile: formData.mobile,
            course_preference_1: "campaign-share-market",
            description: formData?.message ?? "-",
            created_by: formData.name,
            enquiry_mode: "student",
            next_followup_date: date.toISOString(),
            status: "0",
            utm_source: params.get("utm_source") || "",
            utm_medium: params.get("utm_medium") || "",
            utm_campaign: params.get("utm_campaign") || "",
            utm_term: params.get("utm_term") || "",
            utm_content: params.get("utm_content") || "",
        }
        console.log("userInput ------------- ", userInput)
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

    }

    useEffect(() => {
        if (formData?.name?.length > 1 && formData?.email?.length > 1 && formData?.mobile?.length > 1) {
            const cusotmValidateInput = validateEmail(formData?.email);
            const hasOnlyLetterstt = hasOnlyLetters(formData?.name)
            const isOnlyNumbersValid = isOnlyNumbers(formData?.mobile)
            console.log("cusotmValidateInput", cusotmValidateInput, hasOnlyLetterstt, isOnlyNumbersValid)
            if (cusotmValidateInput && hasOnlyLetterstt && isOnlyNumbersValid) {
                console.log("hasOnlyLetterstt", cusotmValidateInput, hasOnlyLetterstt, isOnlyNumbersValid)
                setIsInValid(false)
            } else {
                setIsInValid(true)
            }
        } else {
            setIsInValid(true)
        }

    }, [formData])

    return (
        <>
            <Input col="12" required onChangeSingleCallback={onChangeSingleCallback} inputType={"text"} labelName="Name" placeholder="Enter Name" inputName="name"></Input>
            <Input col="12" required onChangeSingleCallback={onChangeSingleCallback} inputType={"email"} labelName="Email Id" placeholder="Email Id" inputName="email"></Input>
            <Input col="12" required onChangeSingleCallback={onChangeSingleCallback} inputType={"number"} labelName="WhatsApp No" placeholder="WhatsApp No" inputName="mobile"></Input>
            <div className="col-12">
                <Button disabled={isInValid} onClick={() => submit()} className="btn btn-primary col-1">Submit</Button>
            </div>
        </>
    )
}
export default CampaignForm