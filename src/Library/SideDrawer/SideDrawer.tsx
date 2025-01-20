import React, { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";

interface CardProps {
  id?: any;
  keys?: any;
  pagetitle?: any;
  action?: any;
  api?: any;
  params?: any;
  children?: any;
  callout?: any;
  loadingCallout?: any;
  size?: any;
  authenticationParse?: any;
}

const SideDrawer = ({
  id,
  keys,
  pagetitle,
  action,
  api,
  params,
  children,
  callout,
  loadingCallout,
  size = 33,
  authenticationParse,
}: CardProps): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const [tokenid, setTokenid] = useState(null);
  const [drawer, setDrawer] = useState(true);
  const [data, setData] = useState([]);

  const handleDrawerClose = () => {
    setDrawer(false);
    action();
  };

  console.log("keys", keys)
  return (
    <React.Fragment>
      <div
        className="popup_overlay"
        style={{
          display: drawer ? "block" : "none",
        }}
      // onClick={handleDrawerClose}
      ></div>
      <div
        className="drawer_popup_wrapper_sidedrawer"
        style={{
          display: drawer ? "block" : "none",
          width: size,
        }}
      >

        <div className="drawer_popup">
          <div className="headerPopup">
            <h1>
             <span> {pagetitle} </span>
              <Button
                buttonStyleRounded
                buttonStyleOutline
                onClick={handleDrawerClose}
                buttonStyleType="danger"
                className="text-left float-right"
              >
                Close
              </Button>
            </h1>
          </div>
          <div className="clearfix"></div>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
