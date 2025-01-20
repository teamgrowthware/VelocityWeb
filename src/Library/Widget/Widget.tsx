import React, { useState } from "react";

interface WidgetProps {
    title?: string | null;
    description?: string | null;
    col?: string;
    labelName?: string;
    required?: boolean;
    children?: React.ReactNode;
    inputName: string;
    onChangeSingleCallback?: any;
    id?: string;
    icon?: string;
    className?: string;
    buttonSize?: "xs" | "sm" | "md" | "lg";
    buttonWidth?: "xs" | "sm" | "md" | "lg";
    iconPosition?: "left" | "right";
    buttonStyleOutline?: boolean;
    buttonSoft?: boolean;
    buttonStyleRounded?: boolean;
    toggleValue?: string;
    toggleValueNegative?: string;
    buttonStyleType?:
    | "primary"
    | "light"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "dark"
    | "link"
    | "secondary";
}

const WidgetWrapper = ({
    children,
    col = "12",
    labelName,
    required,
    inputName,
    id,
    onChangeSingleCallback,
    icon,
    buttonStyleType = "primary",
    toggleValue = "Yes",
    toggleValueNegative = "No",
}: WidgetProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);
    const [hasError, setHasError] = useState(false);
    const errorMsg = "This field is required";
    const handleOnChange = () => {
        setIsChecked(!isChecked);
        let single = { [inputName]: isChecked };
        onChangeSingleCallback(single);
    };

    return (
        <>
            <div className={`mb-3 col-md-${col}`}>
                {labelName && (
                    <label>
                        {labelName} {required ? <span className="red">*</span> : ""}
                    </label>
                )}
                <div className={`position-relative`}>
                    <div className={`toggle-switch ${buttonStyleType}`}>
                        <input
                            type="checkbox"
                            className="checkbox"
                            name={inputName}
                            id={inputName}
                            checked={isChecked}
                            onChange={handleOnChange}
                        />
                        <label className="label" htmlFor={inputName}>
                            <div className={`text ${!isChecked ? "negative" : ""}`}>
                                {isChecked ? toggleValue : toggleValueNegative}
                            </div>
                            <span className="inner"> </span>
                            <span className="switch" />
                        </label>
                    </div>
                    {icon && <span className={icon}></span>}
                    {hasError && (
                        <span className="error-msg display-block">{errorMsg}</span>
                    )}
                    {children && children}
                </div>
            </div>
        </>
    );
};

export default WidgetWrapper;
