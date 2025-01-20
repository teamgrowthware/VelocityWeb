import { useEffect, useState } from "react";
import { Select } from "../Module";

interface TimingProps {
    inputText?: string | null;
    inputType?: "text" | "number" | "email" | "password" | "url" | "textarea";
    className?: string;
    icon?: string;
    children?: any;
    placeholder?: string;
    inputName: string;
    labelName?: string;
    inputSubType?: "incrementer";
    id?: string;
    value?: string | number | undefined;
    required?: boolean;
    min?: number;
    max?: number;
    maxLength?: number;
    minLength?: number;
    disabled?: boolean;
    customValidationMsg?: string;
    onChangeCallback?: any;
    onChangeSingleCallback?: any;
    suffix?: string;
    col?: "1" | "2" | "3" | "4" | "5" | "6" | "9" | "10" | "11" | "12";
    isFormSubmitted?: boolean;
    readonly?: boolean;
}

const statusOption = [
    { text: "Active", id: 1, value: "1" },
    { text: "Inactive", id: 2, value: "2" },
];

type formDataProps = {
    timing: string;

}

let hours, minutes, ampm;
const time: any = [];
for (var i = 540; i <= 1200; i += 15) {
    hours = Math.floor(i / 60);
    minutes = i % 60;
    if (minutes < 10) {
        minutes = '0' + minutes; // adding leading zero
    }
    ampm = hours % 24 < 12 ? 'AM' : 'PM';
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }
    time.push({ text: hours + ':' + minutes + ' ' + ampm, id: 1, value: hours + ':' + minutes + ' ' + ampm });
}



const TimePickerComp = ({
    inputText = null,
    className,
    children,
    icon,
    placeholder = "",
    inputName,
    labelName,
    id,
    value,
    required = false,
    min,
    max,
    maxLength,
    minLength,
    disabled,
    customValidationMsg,
    onChangeCallback,
    onChangeSingleCallback,
    suffix,
    col = "12",
    inputSubType,
    isFormSubmitted = false,
    readonly = false,
}: TimingProps): JSX.Element => {

    const [startDate, setStartDate] = useState(null);
    const handleChange = (date: any) => {
        let inputData = {
            key: inputName,
            value: date,
        };
        let single = { [inputName]: date };
        setStartDate(date)
        onChangeCallback?.(inputData);
        onChangeSingleCallback?.(single);
    }

    useEffect(() => {
        if (value) {
            setStartDate(value as any);
        } else {
            setStartDate(null);
        }
    }, [value]);

    return (
        <>
            <Select
                inputName="timing"
                labelName={labelName}
                options={time}
                onChangeSingleCallback={handleChange}
                selectedItem={time.find(
                    (item: any) => item.value === 'formData?.timing'
                )}
                required={true}
                placeholder="Select meeting room name"
                search_option={false}
                disabled={disabled}
            ></Select>
        </>
    )
}
export default TimePickerComp;
