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

    .logo-1 {
            font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
            font-weight: 900;
          background: #4c526a;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: 2px;
            text-transform: uppercase;
            position: relative;
            cursor: pointer;
            transition: letter-spacing 0.3s ease;
        }

        .logo-1:hover {
            letter-spacing: 4px;
        }
            .tagline {
  font-size: 0.65rem;
  font-weight: 600;
  color: #8c3f52;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  line-height: 1;
}
  @media (max-width: 768px) {
  .logo-1 {
    font-size: 1.2rem;
  }
  .tagline {
    font-size: 0.55rem;
  }
}
    `      }
      </style>
      <div className="header  border-bottom">
        <div className="px-4">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo (Left) */}
            <div className="logoPlaceholder">
              <NavLink to={"/"}
                className="d-flex align-items-center text-decoration-none gap-3">
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
                <div className="d-flex flex-column">
                  <div className="logo-1">VELOCITY</div>
                  <div className="tagline">Empowering Education</div>
                </div>
              </NavLink>
            </div>

            {/* Right Section */}
            <div className="d-flex align-items-center gap-3 " style={{paddingLeft:'40px'}}>
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
