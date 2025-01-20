import * as React from "react";

interface ButtonProps {
  buttonText?: string | null;
  buttonType?: "button" | "submit" | "reset";
  className?: string;
  icon?: string;
  children?: React.ReactNode;
  buttonSize?: "xs" | "sm" | "md" | "lg";
  buttonWidth?: "xs" | "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  buttonStyleOutline?: boolean;
  buttonSoft?: boolean;
  buttonStyleRounded?: boolean;
  disabled?: boolean;
  onClick?: (event?: any) => void;
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
const Button = ({
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
  disabled
}: ButtonProps): JSX.Element => {
  let size = `btn-${buttonSize}`;
  let styleType = `btn${buttonStyleOutline ? "-outline-" : "-"
    }${buttonStyleType}`;

  let styleRounded = `btn-${buttonStyleRounded ? "rounded" : ""}`;

  return (
    <>
      <button
        onClick={onClick}
        type={buttonType}
        disabled={disabled}
        className={`btn waves-effect waves-light ${size} ${styleType} ${styleRounded} ${className ? className : ""
          } ${buttonSoft ? `btn-soft-${buttonStyleType}` : ""} ${buttonWidth ? `w-${buttonWidth}` : ""
          }`}
      >
        {icon && iconPosition === "left" && (
          <span className="material-symbols-outlined">
            {icon}
          </span>

        )}
        {buttonText && <span>{buttonText}</span>}
        {children && children}

        {icon && iconPosition === "right" && (
          <span className="material-symbols-outlined">
            {icon}
          </span>
        )}
      </button>
    </>
  );
};

export default Button;
