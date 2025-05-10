import { useContext, useEffect, useState } from "react";
import { Button, Input, Select } from "../../Library/Module";
import { ThemeContext } from "../Context/Theme/Context";
import axios from "axios";
import { toast } from "react-toastify";

const ReferrerForm = () => {
    const [courseOptions, setCourseOptions] = useState<any>([]);
    const [formData, setFormData] = useState<any>();
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

        if (formData?.name && formData?.course && formData?.email && formData?.phone && formData?.fname && formData?.fphone) {
            const formDataPost = {
                'organization_id': formData.organization_id ?? 'VCTCPune',
                'name': formData.name,
                'course_name': formData.course,
                'email': formData.email,
                'mobile': formData.phone,
                'fname': formData.fname,
                'fphone': formData.fphone,
                'status': '1',
                'created_by': 'Website',
            }
            console.log(JSON.stringify(formDataPost));
            axios.post(process.env.react_app_base_url + '/api/v1/frontend/refer', formDataPost)
                .then(res => {
                    const message = res.data.messages;
                    toast.info(message);
                    setFormData({})
                })
                .catch(error => {
                    console.log("error.response.status", error)
                    const message = error.response.data.message;
                    toast.info(message);
                });
        } else {
            toast.error("Please enter the all details");
        }

    }
    return (
        <div className="referrerForm">
            <div className='innerHTML'>
                <div className="innerHTMLHeader">
                    <h3>Referrer Form</h3>
                </div>
                {JSON.stringify(formData)}
                <p><Input col="12" required onChangeSingleCallback={onChangeSingleCallback} placeholder="Referrer Name" labelName="Referrer Name" inputName="name"></Input></p>
                <p><Input col="12" inputType="email" required onChangeSingleCallback={onChangeSingleCallback} placeholder="Referrer Email Id" labelName="Referrer Email Id" inputName="email"></Input></p>
                <p><Select
                    col="12"
                    inputName={"course"}
                    labelName={"Referrer Course"}
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
                </p>
                <p>
                    <Input col="12" inputType="number" required onChangeSingleCallback={onChangeSingleCallback} placeholder="Referrer Phone" labelName="Referrer Phone" inputName="phone"></Input>
                </p>
                <p>
                    <Input col="12" inputType="email" required onChangeSingleCallback={onChangeSingleCallback} placeholder="Friends / Relatives Name" labelName="Friends / Relatives Name" inputName="fname"></Input>
                </p>

                <p>
                    <Input col="12" inputType="number" required onChangeSingleCallback={onChangeSingleCallback} placeholder="Friends / Relatives Phone" labelName="Friends / Relatives Phone" inputName="fphone"></Input>
                </p>
                <p>
                    <Button onClick={() => submit()} className="btn btn-primary col-1">Submit</Button>
                </p>
            </div>
        </div>
    )
}

export default ReferrerForm