import React, { Component } from "react";
import { Link } from "react-router-dom";
interface LinkProps {
  LinkText?: string | null;
  LinkType?: "href" | "external";
  LinkTo: string;
  className?: string;
  icon?: string;
  children?: any;
  target?: string;
  onClick?: () => void;
}
const LinkButton = ({
  LinkText = null,
  LinkType = "href",
  className,
  children,
  icon,
  LinkTo,
  target = "_parent",
  onClick
}: LinkProps): JSX.Element => {
  return (
    <>
      {LinkType === "href" ? (
        <Link to={LinkTo} className={className}>
          {icon && <i className={`fa ${icon}`}></i>}
          {LinkText && LinkText}
          {children}
        </Link>
      ) : (
        <a href={LinkTo} target={target} className={className}>
          {icon && <i className={`fa ${icon}`}></i>}
          {LinkText && LinkText}
          {children}
        </a>
      )}
    </>
  );
};

export default LinkButton;
