import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png"
import Menu from "./Menu";
import { Button } from "../Library/Module";
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
              <div className="col-md-10">
                <ul>
                  <li>
                    <a className={"none"} href="tel:+919422761663"><span className="material-symbols-outlined">phone_in_talk</span> +91 94227 61663 </a>
                  </li>
                  <li>
                    <a className={"none"} href="mailto:info@vctcpune.com" title="info@vctcpune.com"><span className="material-symbols-outlined">mail</span>info@vctcpune.com </a>
                  </li>
                  <li>
                    <a className={"none"} target="_blank" href="https://g.co/kgs/S95F7SW" title="info@vctcpune.com" rel="noreferrer"><span className="material-symbols-outlined">map</span> Velocity Corporate Training Center, Panche Mall, 12, Katraj, Pune </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 text-right">
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
