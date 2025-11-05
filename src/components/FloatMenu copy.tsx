import React, { useEffect, useState } from "react";
import EnquiryForm from "../container/Contact/EnquiryForm";
import { Button } from "../Library/Module";
import { ChevronsRight, MessageCircle } from "lucide-react";
import searchicon from "../images/icon/search.png"
const FloatMenu = ({
    type,
    isOpen = false
}: any) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setOpen(true)
        } else (
            setOpen(false)
        )
    }, [isOpen])
    const [icon, setIcon] = useState(false);
    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth <= 990) {
                setIcon(true);
            } else {
                setIcon(false);
            }
        };
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return (
        <>
            {type === "courseModule" && open && <div className="float-menu-overlay"></div>}
            <div className={`${open ? 'open' : 'close'} float-menu-outer ${type === "courseModule" ? 'float-menu-outer-course' : ''}`}>
                <div style={{ position: "relative" }}>
                    {!icon ?
                        <Button
                            onClick={() => setOpen(!open)}
                            className="btn btn-outline-primary float-menu-button m-0"
                        >
                            {!open && "Enquire Now"}
                            {open ? <span className="material-symbols-outlined">
                                close
                            </span> : <span className="material-symbols-outlined mb-1">
                                <ChevronsRight />
                            </span>}
                        </Button>
                        : <>
                            <div className="float-menu-button m-0">
                                {searchicon && typeof searchicon === "string" && (
                                    <img
                                        src={searchicon}
                                        alt="Enquire Now"
                                        style={{
                                            height: "50px",
                                            width: "auto",
                                            objectFit: "contain",
                                        }}
                                    />
                                )}
                            </div>

                        </>
                    }

                    {open && (
                        <>
                            <div className="float-menu">
                                <EnquiryForm></EnquiryForm>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </>
    );
}

export default FloatMenu