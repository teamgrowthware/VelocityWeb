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
    <style>
      {
        `
        @font-face {
  font-family: 'DesiVelocity';
  src: url('/src/assets/fonts/DesiVelocity.ttf') format('truetype');
}

.logoPlaceholder .brand-text {
  font-family: 'DesiVelocity', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0d6efd;
}
    .logo-7 {
            font-family: 'Exo 2', sans-serif;
            font-size: 1.5rem;
            font-weight: 800;
            background: linear-gradient(90deg, #0d6efd 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-style: italic;
            letter-spacing: 1px;
            text-transform: uppercase;
            transform: skewX(-10deg);
        }
  `

      }
    </style>
      <div className="header  border-bottom">
        <div className="px-4">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo (Left) */}
            <div className="logoPlaceholder">
              <NavLink to={"/"} className="d-flex align-items-center text-decoration-none">
                <img
                  src={Logo}
                  alt="Velocity Logo"
                  title="Velocity"
                  className="img-fluid me-2"
                  style={{
                    height: "50px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
                               <div className="logo-7">VELOCITY</div>

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
      {/* {showFloat && (
        <NavLink to={"/contact-us"} >
          <a
            href="#"
            className="btn btn-primary position-fixed bottom-0 end-0 m-3 d-lg-none shadow"
            style={{ borderRadius: "50px", zIndex: 1050 }}
          >
            <Phone />
          </a>
        </NavLink>

      )} */}
      {isLoading && <div className="loading-bar"></div>}
    </>
  );
};

export default Header;
