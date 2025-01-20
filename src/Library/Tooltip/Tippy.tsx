import {
  Tooltip,
} from 'react-tippy';

import "react-tippy/dist/tippy.css";

interface CustomTooltipProps {
  title?: string;
  position?: "bottom" | "top";
  trigger?: "mouseenter" | "focus" | "click";
  children?: any;
  content?: any;
  interactive?: boolean;
  hideOnClick?: boolean;
  width?: string;
  disabled?: boolean;
}
const CustomTooltip = ({
  title,
  position = "bottom",
  trigger,
  children,
  content,
  interactive = true,
  hideOnClick = true,
  width = "200px",
  disabled = false
}: CustomTooltipProps): JSX.Element => {
  return (
    // @ts-ignore: Unreachable code error
    <Tooltip
      title={title}
      hideOnClick={hideOnClick}
      tabIndex={10000000}
      html={
        <div className="tooltipContent" style={{ width: width }}>
          {content}
        </div>
      }
      position={position}
      interactive={interactive}
      {...trigger ? { trigger: trigger } : {}}
      trigger={trigger}
      theme={"light"}
      disabled={disabled}
      arrow
    ><span>{children}</span></Tooltip>
  );
};

export default CustomTooltip;
