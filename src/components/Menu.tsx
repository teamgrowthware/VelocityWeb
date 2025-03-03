import { NavLink } from "react-router-dom"
import CourseMenu from "./CourseMenu"

const Menu = () => {
    return (
        <>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                <li><NavLink to={"/courses"}>Courses</NavLink>
                    <CourseMenu></CourseMenu>
                </li>
                <li><NavLink to={"/upcoming-batches"}>Upcoming Batches</NavLink></li>
                <li><NavLink to={"/testimonials"}>Testimonials</NavLink></li>
                <li><NavLink to={"/cms/refer-and-earn"}>Refer & Earn</NavLink></li>
                <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                <li className="footerMenu"><NavLink to={"/cms/privacy-policy"}>Privacy Policy</NavLink></li>
                <li className="footerMenu"><NavLink to={"/cms/return-and-refund-policy"}>Return & Refund Policy</NavLink></li>
                <li className="footerMenu"><NavLink to={"/cms/terms-and-conditions"}>Terms and Conditions</NavLink></li>

            </ul>
        </>
    )
}

export default Menu