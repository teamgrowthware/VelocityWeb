import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png"
import ResponsiveMenu from "./ResponsiveMenu";

const Header = ({
  isLoading
}: { isLoading?: boolean }) => {
  return (
    <>
      <div className="header">
        <div className="headerTop">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-11 text-center slogan">
                    <h3><strong>Velocity Corporate Training Center, Pune</strong></h3>
                    <p>Our AIM, 1 Job = 1 FAMILY = 5 PERSON</p>
              </div>
              <div className="col-md-1 text-right">
                <a className={"btn btn-primary"} href="tel:+919422761663">Call Us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-2  col-6">
              <div className="logoPlaceholder">
                <NavLink to={"/"}><img src={Logo} alt="" title="" /></NavLink>
              </div>
            </div>
            <div className="col-md-10 col-6 text-right">
              <ResponsiveMenu></ResponsiveMenu>
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
