import React, { useEffect, useState } from "react";
import EnquiryForm from "../container/Contact/EnquiryForm";
import { Button } from "../Library/Module";
import { ChevronsRight, MessageCircle } from "lucide-react";

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
    const handleClosePopup = () => {
        setOpen(false);

    };


    return (
        <>
        <style>{`
   
        .popup-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.6);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; animation: fadeInUp 0.3s ease;
        }
        .popup-box {
          background: white; padding: 30px; border-radius: 16px; width: 90%;
          max-width: 600px; box-shadow: 0 10px 40px rgba(0,0,0,0.25);
          animation: fadeInUp 0.4s ease; position: relative;
        }
        .popup-close {
          position: absolute; top: 10px; right: 20px; border: none;
          background: none; font-size: 26px; cursor: pointer;
        }
      `}</style>

            {type === "courseModule" && open && <div className="float-menu-overlay"></div>}
            <div className={`${open ? 'open' : 'close'} float-menu-outer ${type === "courseModule" ? 'float-menu-outer-course' : ''}`}>
                <div style={{ position: "relative" }}>
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

                    {open && (
                       
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close" onClick={handleClosePopup}>×</button>
                        <h4 className="text-center mb-3 fw-bold text-primary">Enquiry Form</h4>
                        <EnquiryForm
                        />
                    </div>
                </div>
        
                    )}

                </div>
            </div>
        </>
    );
}

export default FloatMenu