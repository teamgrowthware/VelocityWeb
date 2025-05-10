import { useEffect, useState } from "react"
import Menu from "./Menu"
import { Button } from "../Library/Module"

const ResponsiveMenu = () => {

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
                        <span className='lineBox'>
                            <span className='line'></span>
                            <span className='line'></span>
                            <span className='line'></span>
                        </span>
                        <span>Menu</span>
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
                                <span className='lineBox'>
                                    <span className='line'></span>
                                    <span className='line'></span>
                                    <span className='line'></span>
                                </span>
                                <span>Close</span>
                            </Button>
                        </div>
                        <div className="clearfix"></div>
                        <Menu></Menu>
                    </div>
                </>
            }
        </>
    )
}
export default ResponsiveMenu