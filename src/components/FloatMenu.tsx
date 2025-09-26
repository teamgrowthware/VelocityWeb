import React, { useEffect, useState } from "react";
import EnquiryForm from "../container/Contact/EnquiryForm";
import { Button } from "../Library/Module";

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
    
    return (
        <>
            {type === "courseModule" && open && <div className="float-menu-overlay"></div>}
            <div className={`${open ? 'open' : 'close'} float-menu-outer ${type === "courseModule" ? 'float-menu-outer-course' : ''}`}>
                <div style={{ position: "relative" }}>
                    <Button
                        onClick={() => setOpen(!open)}
                        className="btn btn-outline-primary float-menu-button"
                    >
                        {!open && "Enquire Now"}
                        {open ? <span className="material-symbols-outlined">
                            close
                        </span> : <span className="material-symbols-outlined">
                            arrow_menu_open
                        </span>}
                    </Button>

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