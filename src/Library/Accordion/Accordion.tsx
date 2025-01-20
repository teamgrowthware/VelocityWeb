import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";



interface AlertProps {
  item: any;
  activeTab: any;
}

const Accordion = ({ item, activeTab }: AlertProps): JSX.Element => {
  // @ts-ignore
  const profile_details = JSON.parse(localStorage.getItem("profile_details")) || null;
  let navigate = useNavigate();
  const location = useLocation();

  console.log("location", location?.pathname)

  const [showSubMenu, setShowSubMenu] = useState(false);
  const selectedItem = localStorage.getItem("activeTab") || "";
  const [activeTabSelected, setActiveTabSelected] = useState<any>(
    selectedItem?.length > 0 && JSON.parse(selectedItem)
  );

  const ShowSubMenuClick = (data: any) => {
    console.log("data", data);
    localStorage.setItem("activeTab", JSON.stringify(data));
    setActiveTabSelected(data);
    setShowSubMenu(!showSubMenu);
    activeTab(data?.text)
  };



  useEffect(() => {
    if (profile_details?.designation === 'CEO') {
      const isAuth = item.map((item3: any) => {
        return item3?.isRole === 'leave-manager'
      })
      console.log("isAuth", isAuth)
    } else {
      const isAuth = item.map((item3: any) => {
        return item3?.isRole === profile_details?.user_type
      })
      console.log("isAuth", isAuth)
    }
  }, [item, profile_details?.designation, profile_details?.user_type])

  return (
    <>
      {item.map((item3: any) => {
        return <>
          {item3?.hasSubMenu ? (
            <li
              className={
                activeTabSelected?.text === item3?.text
                  ? "selected nav-item"
                  : "nav-item"
              }
            >
              <p onClick={() => ShowSubMenuClick(item3)}> {item3?.icon &&

                <span className="material-symbols-outlined">
                  {item3?.icon}
                </span>
              } {item3?.text}
                {activeTabSelected?.text === item3?.text ?
                  <span className="material-symbols-outlined"> remove </span> :
                  <span className="material-symbols-outlined"> add </span>
                }
              </p>
              <ul>
                {item3?.hasSubMenu?.map((item1: any) => {
                  return (
                    <>
                      <li
                        onClick={() => ShowSubMenuClick(item3)}
                        className="nav-item"
                      >
                        <NavLink to={item1?.link}>{item1?.text}</NavLink>
                      </li>
                    </>
                  );
                })}
              </ul>
            </li>
          ) : (
            <li className="nav-item" onClick={() => ShowSubMenuClick(item3)}>
              <NavLink to={item3?.link}>{item3?.icon &&
                <span className="material-symbols-outlined">
                  {item3?.icon}
                </span>
              } {item3?.text}</NavLink>
            </li>
          )}
        </>
      })}
    </>
  );
};
export default Accordion;
