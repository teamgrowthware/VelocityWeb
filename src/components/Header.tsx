import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import ResponsiveMenu from "./ResponsiveMenu";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const Header = ({ isLoading }: { isLoading?: boolean }) => {
  const [showFloat, setShowFloat] = useState(false);
  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth <= 990) {
        setShowFloat(true);
      } else {
        setShowFloat(false);
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <>
      <div className="header py-3 border-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo (Left) */}
            <div className="logoPlaceholder">
              <NavLink to={"/"}>
                <img
                  src={Logo}
                  alt="Velocity Logo"
                  title="Velocity"
                  className="img-fluid"
                  style={{
                    height: "50px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </NavLink>
            </div>

            {/* Right Section */}
            <div className="d-flex align-items-center gap-3">
              {/* Menu (Right Corner) */}
              <ResponsiveMenu />

              {/* Call Us Button (Visible only ≥ 992px) */}
              <NavLink to={"/contact-us"} className="d-none d-lg-block">
                <a className="btn btn-primary px-3 py-2 fw-semibold" href="tel:+919422761663">
                  Call Us
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {showFloat && (
        <NavLink to={"/contact-us"} >
          <a
            href="#"
            className="btn btn-primary position-fixed bottom-0 end-0 m-3 d-lg-none shadow"
            style={{ borderRadius: "50px", zIndex: 1050 }}
          >
            <Phone />
          </a>
        </NavLink>

      )}
      {isLoading && <div className="loading-bar"></div>}
    </>
  );
};

export default Header;
