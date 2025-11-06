import { useEffect, useState } from "react"
import Menu from "./Menu"
import { Button } from "../Library/Module"
import { MenuIcon, X } from "lucide-react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../container/Context/Theme/Context"
import { useContext } from "react"
const ResponsiveMenu = () => {
    const { coursesList } = useContext(ThemeContext)
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    const [mobileOnly, setMobileOnly] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", resize);
        const windwoWidth = window.innerWidth <= 990;
        console.log("windwoWidth", window.innerWidth)
        setHamburgerMenu(windwoWidth)
        setMobileOnly(windwoWidth)
        resize();
    }, [])

    const handleOpen = () => {
        setHamburgerMenu(true)
    }

    const handleClose = () => {
        setHamburgerMenu(false)
    }

    const resize = () => {
        const windwoWidth = window.innerWidth <= 990;
        setHamburgerMenu(windwoWidth)
        setMobileOnly(windwoWidth)
    }

    return (
        <>
            {/* For Desktop */}
            {!hamburgerMenu && !mobileOnly &&
                <Menu></Menu>
            }

            {/* For Mobile */}

            {!hamburgerMenu && mobileOnly &&
                <div className='overlay' onClick={() => handleClose()}></div>
            }

            {hamburgerMenu && mobileOnly &&
                <div className="hangerMenuOpen">
                    <Button
                        buttonStyleOutline
                        buttonStyleType="primary"
                        className="btn btn-primary"
                        onClick={() => handleClose()} >
                        <MenuIcon />
                    </Button>
                </div>
            }

            {!hamburgerMenu && mobileOnly &&
                <>
                    <div className={mobileOnly ? `main_nav main_nav_mobile ` : ""}>
                        <div className="hangerMenuClose">
                            <Button onClick={() => handleOpen()}
                                buttonStyleOutline
                                buttonStyleType="primary"
                                className="btn btn-primary"
                            >
                                <X />
                                <span>Close</span>
                            </Button>
                        </div>
                        <div className="clearfix"></div>
                        <ul>
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                            <li><NavLink to={"/courses"}>Courses</NavLink>
                                <div className="hoverMenu" onClick={() => handleOpen()}>
                                    <p className="hoverMenuOuter"><NavLink to={`/courses`}>View All Courses</NavLink></p>
                                    <ul>

                                        {coursesList?.map((item: any) => {
                                            return (
                                                <li>
                                                    <NavLink to={`/courses/${item?.slug}`}>{item?.name}</NavLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                            <li><NavLink to={"/upcoming-batches"}>Upcoming Batches</NavLink></li>
                            {/* <li><NavLink to={"/blog"}>Blog</NavLink></li>s */}
                            <li><NavLink to={"/testimonials"}>Testimonials</NavLink></li>
                            <li><NavLink to={"/gallary"}>Corporate Training</NavLink></li>
                            <li> <NavLink to={"/cms/refer-and-earn"}>Refer & Earn</NavLink></li>
                            {/* <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li> */}
                            <li className="footerMenu"><NavLink to={"/cms/privacy-policy"}>Privacy Policy</NavLink></li>
                            <li className="footerMenu"><NavLink to={"/cms/return-and-refund-policy"}>Return & Refund Policy</NavLink></li>
                            <li className="footerMenu"><NavLink to={"/cms/terms-and-conditions"}>Terms and Conditions</NavLink></li>
                        </ul>
                    </div>
                </>
            }
        </>
    )
}
export default ResponsiveMenu