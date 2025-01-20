import react, { useState, useMemo, useEffect } from "react";
import { Button } from "../Module";

interface AlertProps {
  AlertText: string;
  className?: string;
  icon?: string;
  children?: React.ReactNode;
  AlertSize?: "xs" | "sm" | "md" | "lg";
  AlertWidth?: "xs" | "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  AlertStyleOutline?: boolean;
  AlertSoft?: boolean;
  AlertType?: "inline" | "confirmation";
  AlertStyleRounded?: boolean;
  AlertHeading?: string;
  closeAction?: boolean;
  col?:
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";
  AlertStyleType?:
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
const Alert = ({
  AlertText,
  className,
  children,
  icon,
  AlertSize = "md",
  AlertStyleType,
  AlertStyleOutline = false,
  AlertStyleRounded = false,
  iconPosition = "right",
  AlertSoft = false,
  AlertWidth,
  col = "12",
  AlertType = "inline",
  AlertHeading = "",
  closeAction = false,
}: AlertProps): JSX.Element => {
  const [closeState, setCloseState] = useState<boolean>(false);
  let size = `alert-${AlertSize}`;
  let styleType = `alert${AlertStyleOutline ? "-outline-" : "-"
    }${AlertStyleType}`;

  let styleRounded = `alert-${AlertStyleRounded ? "rounded" : ""}`;

  const CloseAlert = () => {
    setCloseState(!closeState);
    console.log(JSON.stringify(closeState));
  };

  useEffect(() => {
    setCloseState(closeAction);
  }, [closeAction]);

  return (
    <>
      <div className="alertInfo2">
        <div
          className={`p-2 mb-3 col-md-${col} ${size} ${styleType} ${styleRounded} ${className ? className : ""
            } ${AlertSoft ? `alert-soft-${AlertStyleType}` : ""} ${AlertWidth ? `w-${AlertWidth}` : ""
            }
      ${AlertType === "inline" ? "inline" : "confirmation"}
      `}
        >
          {AlertType === "inline" ? (
            ""
          ) : (
            <p className="text-right">
              <Button
                onClick={() => CloseAlert()}
                buttonStyleOutline
                buttonStyleType="primary"
                className=""
              >
                Close
              </Button>
            </p>
          )}
          {icon && iconPosition === "left" && (
            <i className={`mr-1 fa ${icon}`}></i>
          )}
          {AlertHeading && <p><strong>{AlertHeading}</strong></p>}
          {AlertText && AlertText}
          {children}
          {icon && iconPosition === "right" && (
            <i className={`ml-1 fa ${icon}`}></i>
          )}
        </div>
      </div>
    </>
  );
};

export default Alert;
