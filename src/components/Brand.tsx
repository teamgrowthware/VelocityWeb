import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
interface AlertProps {
  link: string;
}

const Brand = ({  link }: AlertProps): JSX.Element => {
  return (
    <div className="brand text-center">
      <NavLink to={link}>
        <img src={Logo} title="" alt=""  style={{width:"100px"}}  />
      </NavLink>
    </div>
  );
};
export default Brand;
