import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png"
import ResponsiveMenu from "./ResponsiveMenu";

const Header = ({
  isLoading
}: { isLoading?: boolean }) => {
  return (
    <>
      <div className="header">

        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-2 col-4">
              <div className="logoPlaceholder">
                <NavLink to={"/"}> <img src={Logo} alt="" title="" style={{ width: "30%" }} />
                </NavLink>
              </div>
            </div>
            <div className="col-md-8 col-4 text-right">
              <ResponsiveMenu></ResponsiveMenu>
            </div>

            <div className="col-md-2 col-4 text-right">
              <NavLink to={"/contact-us"}>  <a className={"btn btn-primary"} href="tel:+919422761663">Call Us</a></NavLink>
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
