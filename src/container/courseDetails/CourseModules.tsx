import { useEffect, useRef, useState } from "react";
import { Button } from "../../Library/Module";
import {
  getModuleByCourseId,
  checkEnquiryStatus,
} from "../../servies/services";
import EnquiryForm from "../Contact/EnquiryForm";
import { MessageCircle } from "lucide-react";

const CourseModules = ({ id, title, courseModuleCallback }: any) => {
  const [showModule, setShowModule] = useState<any>([]);
  const sectionRef = useRef<any>(null);
  const [isCourseModuleLoading, setIsCourseModuleLoading] = useState(false);
  const [courseModule, setCourseModule] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [pendingModuleId, setPendingModuleId] = useState<string | null>(null);
  const [enquiryFormSubmitted, setEnquiryFormSubmitted] = useState(false);

  // Check enquiry status on mount and auto-open all modules if already submitted
  useEffect(() => {
    const checkEnquiryStatusOnMount = async () => {
      if (!title) return;

      // 1. Check localStorage first (fastest)
      const localCheck = localStorage.getItem(`enquiry_${title}`);
      if (localCheck === "true") {
        setEnquiryFormSubmitted(true);
        // Auto-open all modules when returning (including first 3)
        if (courseModule.length > 0) {
          const allModuleIds = courseModule
            .map((item: any) => item?._id)
            .filter((id: any) => id !== null);
          setShowModule((prev: any) => {
            const newModules = [...prev];
            allModuleIds.forEach((moduleId: any) => {
              if (!newModules.includes(moduleId)) {
                newModules.push(moduleId);
              }
            });
            return newModules;
          });
        }
        return;
      }

      // 2. Check if we have email/phone from previous submission
      const savedEmail = localStorage.getItem("enquiry_email");
      const savedPhone = localStorage.getItem("enquiry_phone");

      // 3. Call backend API if we have identifiers
      if (savedEmail || savedPhone) {
        try {
          const response = await checkEnquiryStatus(
            title,
            savedEmail,
            savedPhone
          );
          if (response?.data?.hasSubmitted) {
            setEnquiryFormSubmitted(true);
            // Update localStorage for future checks
            localStorage.setItem(`enquiry_${title}`, "true");
            // Auto-open all modules when returning (including first 3)
            if (courseModule.length > 0) {
              const allModuleIds = courseModule
                .map((item: any) => item?._id)
                .filter((id: any) => id !== null);
              setShowModule((prev: any) => {
                const newModules = [...prev];
                allModuleIds.forEach((moduleId: any) => {
                  if (!newModules.includes(moduleId)) {
                    newModules.push(moduleId);
                  }
                });
                return newModules;
              });
            }
          }
        } catch (error) {
          console.error("Error checking enquiry status:", error);
        }
      }
    };

    checkEnquiryStatusOnMount();
  }, [title, courseModule]);

  useEffect(() => {
    setCourseModule([]);
    console.log("--curses called--", id, title);
    if (id && title) {
      const getData = async () => {
        const moduleData = await getModuleByCourseId(id);
        setCourseModule(moduleData?.data?.data);
        console.log("--------------cuuuuuu----", moduleData?.data?.data);
        setIsCourseModuleLoading(true);
        courseModuleCallback?.(moduleData?.data?.data);
      };
      getData();
    }
  }, [courseModuleCallback, id, title]);

  const addItem = (id: string, index: number) => {
    //  Allow first 3 modules to open freely
    if (index < 3) {
      setShowModule((prev: any) =>
        prev.includes(id)
          ? prev.filter((item: any) => item !== id)
          : [...prev, id]
      );
    } else {
      // If enquiry form already submitted, allow all modules to open
      if (enquiryFormSubmitted) {
        setShowModule((prev: any) =>
          prev.includes(id)
            ? prev.filter((item: any) => item !== id)
            : [...prev, id]
        );
      } else {
        // Show enquiry form popup
        setPendingModuleId(id);
        setShowPopup(true);
      }
    }
  };

  const handleFormSubmit = (formData?: any) => {
    // Mark enquiry as submitted
    setEnquiryFormSubmitted(true);

    // Store in localStorage for persistence
    if (title) {
      localStorage.setItem(`enquiry_${title}`, "true");
    }

    // Store email and phone for backend verification
    if (formData?.email || formData?.email_id) {
      localStorage.setItem(
        "enquiry_email",
        formData.email || formData.email_id
      );
    }
    if (formData?.phone || formData?.mobile) {
      localStorage.setItem("enquiry_phone", formData.phone || formData.mobile);
    }

    // Automatically open ALL modules after form submission (including first 3)
    // Get all module IDs
    const allModuleIds = courseModule
      .map((item: any) => item?._id)
      .filter((id: any) => id !== null);

    // Add all module IDs to showModule state
    setShowModule((prev: any) => {
      const newModules = [...prev];
      allModuleIds.forEach((moduleId: any) => {
        if (!newModules.includes(moduleId)) {
          newModules.push(moduleId);
        }
      });
      return newModules;
    });

    setPendingModuleId(null);
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPendingModuleId(null);
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; transform: translateY(-10px); }
          to { opacity: 1; max-height: 2000px; transform: translateY(0); }
        }
        .course-modules-container { padding: 40px 0; background: #f0f8ff;}
        // .modules-wrapper { max-width: 900px; margin: auto; }
        .module-header {
          background: white; border-radius: 12px; display: flex; align-items: center;
          gap: 10px; cursor: pointer; padding: 4px 22px; margin-bottom: 10px;
          transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .module-header.selected { background: linear-gradient(135deg, #2563eb, #1e40af); color: white; }
        .module-content {
          background: white; border-radius: 0 0 12px 12px; padding: 20px 24px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1); animation: slideDown 0.5s ease;
        }
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

      <div className="course-modules-container">
        <div className="px-2 px-sm-4">
          <div className="modules-wrapper">
            <h2 className="text-center fw-bold text-primary">Course Modules</h2>

            {!isCourseModuleLoading && (
              <div className="text-center py-5">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
                <p className="mt-3 text-primary fw-semibold">
                  Loading Modules...
                </p>
              </div>
            )}

            {isCourseModuleLoading &&
              courseModule?.map((item: any, index: number) => (
                <div key={item?._id}>
                  <div
                    onClick={() => addItem(item?._id, index)}
                    className={`module-header ${
                      showModule.includes(item?._id) ? "selected" : ""
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {showModule.includes(item?._id)
                        ? "keyboard_arrow_down"
                        : "chevron_right"}
                    </span>
                    <Button className="courseBtn fs-24">{item?.name}</Button>
                    {index >= 3 && !enquiryFormSubmitted && (
                      <span className="badge bg-warning text-dark ms-auto d-flex align-items-center">
                        <span className="d-none d-sm-inline">
                          Enquiry Required
                        </span>
                        <span className="d-inline d-sm-none">
                          <MessageCircle size={16} />
                        </span>
                      </span>
                    )}
                  </div>

                  {showModule.includes(item?._id) && (
                    <div ref={sectionRef} className="module-content">
                      <div
                        className="ql-editor"
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ✅ Enquiry popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={handleClosePopup}>
              ×
            </button>
            <h4 className="text-center mb-3 fw-bold text-primary">
              Enquiry Form
            </h4>
            <EnquiryForm
              courseId={title}
              callback={handleFormSubmit} // call when submitted with formData
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CourseModules;
