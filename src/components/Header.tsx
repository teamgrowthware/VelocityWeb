import { NavLink, useNavigate, useParams } from "react-router-dom";
import { conversionToMB, tryLocalStorage } from "../Library/Utility/Utility";
import { Alert, Button } from "../Library/Module";
import { ThemeContext } from "../container/Context/Theme/Context";
import { useContext } from "react";
import Logo from "../images/logo.png"
const Header = ({
  isLoading
}: { isLoading?: boolean }) => {
  const { coursesList } = useContext(ThemeContext)
  return (
    <>
      <div className="header ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-2">
              <div className="logoPlaceholder">
              <NavLink to={"/"}><img src={Logo} alt="" title="" /></NavLink>
              </div>
            </div>
            <div className="col-md-10 text-right">
              <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                <li><NavLink to={"/certificate-courses"}>Courses</NavLink>
                  <ul>
                    {coursesList?.map((item: any) => {
                      return (
                        <li>
                          <NavLink to={`/courses/${item?.slug}`}>{item?.name}</NavLink>
                        </li>
                      )
                    })}
                  </ul>
                </li>
                <li><NavLink to={"/upcoming-batches"}>Upcoming Batches</NavLink></li>
                <li><NavLink to={"/testimonials"}>Testimonials</NavLink></li>
                <li><NavLink to={"/cms/refer-earn"}>Refer & Earn</NavLink></li>
                <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isLoading &&
        <div className="loading-bar"></div>
      }
    </>
  );
};
export default Header;
