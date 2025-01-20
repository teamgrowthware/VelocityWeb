import React, { useState } from "react";

interface DashProps {
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

const ToggleButton = ({
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
}: DashProps): JSX.Element => {
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
      <span className="">
        -
      </span>
    </>
  );
};

export default ToggleButton;
