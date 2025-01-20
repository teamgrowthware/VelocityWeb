import React from "react";

interface CardProps {
  title?: string | null;
  description?: string | null;
  children?: React.ReactNode;
  image?: string;
  type?: string
  widgetBottom?: any
  headerIcon?: any
  className?: string
}

const Card = ({ title, className, description, children, image, type = 'card', widgetBottom, headerIcon }: CardProps): JSX.Element => {
  return (
    <>
      {type === 'card' ?
        <div className={`${className} card`}>
          <div className="card-body">
            {image && <p className="text-center"><img style={{ maxWidth: "300px" }} src={image} title="" alt="" /> </p>}
            {title && <h4 className="card-title">{headerIcon && <img src={headerIcon} alt="" title="" />} {title}</h4>}
            {description && <p className="card-title-desc">{description}</p>}
            {children && <div className="">{children}</div>}
          </div>
        </div>
        : <div className="customWidget">
          {title && <div className="widget-head"><h4>{headerIcon && headerIcon} {title}</h4></div>}
          <div className="widget-body">
            {image && <p className="text-center"><img style={{ maxWidth: "300px" }} src={image} title="" alt="" /> </p>}
            {description && <p className="card-title-desc">{description}</p>}
            {children && <div className="">{children}</div>}
          </div>
          {widgetBottom && <div className="widget-bottom">
            {widgetBottom}
          </div>}
        </div>}
    </>
  );
};

export default Card;
