import 'react-phone-number-input/style.css'

import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail, validateUrl } from "../Utility/Utility";
import Button from "../Button/Button";
import CustomTooltip from "../Tooltip/Tippy";
import PhoneInput, {
    formatPhoneNumber,
    formatPhoneNumberIntl,
    isPossiblePhoneNumber,
    isValidPhoneNumber
} from 'react-phone-number-input'


interface InputProps {
    inputText?: string | null;
    inputType?: "text" | "number" | "email" | "password" | "url" | "textarea" | "color";
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
    toolTipContent?: string;
}
const MobileInput = ({
    inputText = null,
    inputType = "text",
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
    toolTipContent = ""
}: InputProps): JSX.Element => {
    const errorMsg = "This field is required";
    const [hasError, setHasError] = useState(false);
    const [hasCustomError, setHasCustomError] = useState(true);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [minLengthError, setMinLengthError] = useState(false);
    const [inputValue, setInputValue] = useState<string | number>("");
    const onBlur = (data: string | number) => {
        validate(data);
        if (required) {
            if (data?.toString().length === 0) {
                setHasError(true);
            } else {
                setHasError(false);
            }
        }
    };

    useEffect(() => {
        if (value) {
            setInputValue(value);
        } else {
            setInputValue("");
        }
    }, [value]);

    const validate = (data: string | number | undefined) => {
        setMaxLengthError(false);
        setMinLengthError(false);
        let cusotmValidateInput = true;
        if (inputType === "email") {
            cusotmValidateInput = validateEmail(data);
        }
        if (inputType === "url") {
            cusotmValidateInput = validateUrl(data);
        }
        if (maxLength && data && data?.toString().length > maxLength) {
            setInputValue(data?.toString().slice(0, maxLength));
            setMaxLengthError(true);
        }

        if (minLength && data && data?.toString().length < minLength) {
            setMinLengthError(true);
        }

        setHasCustomError(cusotmValidateInput);
    };

    const decrementer = () => {
        setInputValue(Number(inputValue) - 1);
    };
    const incrementer = () => {
        setInputValue(Number(inputValue) + 1);
    };

    const onChange = (data: string | number) => {
        let inputData = {
            key: inputName,
            value: data,
        };
        let single = { [inputName]: data };
        setInputValue(data);
        onChangeCallback?.(inputData);
        onChangeSingleCallback?.(single);
        validate(data);
    };

    const onFocus = () => {
        console.log("onFocus");
    };

    const [value1, setValue1] = useState<any>(undefined)

    useEffect(() => {
        if (value1) {
            console.log("isPossiblePhoneNumber", isPossiblePhoneNumber(value1?.toString()) ? 'true' : 'false')
            console.log("isValidPhoneNumber", isValidPhoneNumber(value1?.toString()) ? 'true' : 'false')
        }
    }, [value1])

    return (
        <div className={`mb-3 col-md-${col}`}>
            {labelName && (
                <label htmlFor={labelName}>
                    {labelName} {required ? <span className="red">*</span> : ""}
                    {toolTipContent &&
                        <CustomTooltip position="top" content={toolTipContent}>
                            <i className="ri-information-line ml-1"></i>
                        </CustomTooltip>
                    }
                </label>
            )}

            <PhoneInput
                // placeholder="Enter phone number"
                // value={value1}
                onChange={setValue1}
                defaultCountry="IN"

                id={id}
                value={value1}
                onBlur={(e) => onBlur(value1)}
                onFocus={onFocus}
                required={required}
                // onChange={(e) => onChange(value1)}
                type={inputType}
                name={inputName}
                className={`form-control ${className} ${hasError ? "parsley-error" : ""
                    } ${hasCustomError && inputValue?.toString()?.length > 2 ? "" : "parsley-error"} 
              ${icon ? "has-icon" : ""}`}
                placeholder={`${placeholder} ${required ? "*" : ""}`}
                min={min}
                max={max}
                maxLength={maxLength}
                minLength={minLength}
                disabled={disabled}
                readOnly={readonly}
            />

            {children && children}
            {/* {JSON.stringify(isFormSubmitted)} */}
            {hasError && <span className="error-msg display-block">{errorMsg}</span>}
            {maxLengthError && (
                <span className="error-msg display-block">
                    More than {maxLength} characters is not allowed
                </span>
            )}
            {minLengthError && (
                <span className="error-msg display-block">
                    Less than {maxLength} characters is not allowed
                </span>
            )}
            {!hasCustomError && (
                <span className="error-msg display-block">{customValidationMsg}</span>
            )}


        </div>
    );
};

export default MobileInput;
