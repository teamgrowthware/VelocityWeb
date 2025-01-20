import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
type TableDownloadProps = {
  id: any;
  keys: any;
  pagetitle: any;
  action: any;
  api: any;
  params: any;
  children: any;
  callout: any;
  loadingCallout: any;
};
const SupplierMasterDashboard = ({
  id,
  keys,
  pagetitle,
  action,
  api,
  params,
  children,
  callout,
  loadingCallout,
}: TableDownloadProps): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [drawer, setDrawer] = useState(true);
  const [data, setData] = useState([]);

  const handleDrawerClose = () => {
    setDrawer(false);
    action();
  };
  const GetData = async () => {
    let username = localStorage.getItem("username");
    var queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    const APIResponse = await api(queryString);
    setData(APIResponse.data);
    setLoading(true);
    callout?.(APIResponse?.data);
    loadingCallout?.(true);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <React.Fragment>
      <div className="popup_overlay" onClick={handleDrawerClose}></div>
      <div className="drawer_popup_wrapper">
        <Button onClick={handleDrawerClose}>Close</Button>
        <div className="drawer_popup">
          <h1>
            {pagetitle} <span> {id} </span>
          </h1>

          {loading && data.length !== 0 ? (
            keys.map((item: any) => {
              return Object.entries(data[0]).map(([key, value]: any) => {
                return (
                  item.key === key && (
                    <div className="container-fluid">
                      <div className="row pb-2 mb-2 border-bottom">
                        <div className="col-md-4"> {item.name} </div>
                        <div className="col-md-8"> {value} </div>
                      </div>
                    </div>
                  )
                );
              });
            })
          ) : (
            <></>
          )}

          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SupplierMasterDashboard;
