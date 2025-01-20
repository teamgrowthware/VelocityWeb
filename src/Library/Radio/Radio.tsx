import React, { useState } from "react";

interface RadioProps {
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
  buttonText?: string | null;
  buttonType?: "button" | "submit" | "reset";
  buttonSize?: "xs" | "sm" | "md" | "lg";
  buttonWidth?: "xs" | "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  buttonStyleOutline?: boolean;
  buttonSoft?: boolean;
  buttonStyleRounded?: boolean;
  onClick?: () => void;
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
  options?: Array<Item>;
  selectedItem?: Item;
}
interface Item {
  text: string;
  value: string;
  id: number;
}

const RadioButton = ({
  col = "12",
  labelName,
  required,
  inputName,
  id,
  onChangeSingleCallback,

  buttonText = null,
  buttonType = "submit",
  className,
  children,
  icon,
  buttonSize = "md",
  buttonStyleType,
  buttonStyleOutline = false,
  buttonStyleRounded = false,
  iconPosition = "right",
  buttonSoft = false,
  buttonWidth,
  onClick,
  options,
}: RadioProps): JSX.Element => {
  let size = `btn-${buttonSize}`;
  let styleType = `btn${
    buttonStyleOutline ? "-outline-" : "-"
  }${buttonStyleType}`;

  let styleRounded = `btn-${buttonStyleRounded ? "rounded" : ""}`;
  const [isChecked, setIsChecked] = useState("");
  const [hasError, setHasError] = useState(false);
  const errorMsg = "This field is required";
  const onChange = (data: any) => {
    console.log("radio", data);
    setIsChecked(data);
    let single = { [inputName]: data };
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
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            {options?.map((item) => {
              return (
                <>
                  <input
                    type="radio"
                    className="btn-check"
                    name={item?.value}
                    id={item?.value}
                    onChange={() => onChange(item?.value)}
                    checked={isChecked === item?.value}
                  />
                  <label
                    className={`btn waves-effect waves-light ${size} ${styleType} ${styleRounded} ${
                      className ? className : ""
                    } ${buttonSoft ? `btn-soft-${buttonStyleType}` : ""} ${
                      buttonWidth ? `w-${buttonWidth}` : ""
                    }`}
                    htmlFor={item?.value}
                  >
                    {item?.text}
                  </label>
                </>
              );
            })}
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

export default RadioButton;
