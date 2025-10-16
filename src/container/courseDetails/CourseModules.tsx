import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../Library/Module";
import { getModuleByCourseId } from "../../servies/services";
import FloatMenu from "../../components/FloatMenu";
import EnquiryForm from "../Contact/EnquiryForm";

const CourseModules = ({
    id,
    title,
    courseModuleCallback
}: any) => {
    const [showModule, setShowModule] = useState<any>([])
    const sectionRef = useRef<any>(null);
    const [isCourseModuleLoading, setIsCourseModuleLoading] = useState(false);
    const [courseModule, setCourseModule] = useState([]);
    const [enquiryFormSubmitted, setEnquiryFormSubmitted] = useState<any>("")
    const [showFloatingMenu, setShowFloatingMenu] = useState(false)

    useEffect(() => {
        setCourseModule([])
        if (id && title) {
            console.log("id, title -----------", id, title)
            setIsCourseModuleLoading(false)
            const getData = async () => {
                const moduleData = await getModuleByCourseId(id);
                setCourseModule(moduleData?.data?.data);
                setIsCourseModuleLoading(true)
                courseModuleCallback?.(moduleData?.data?.data)
            };
            getData();
        }
    }, [courseModuleCallback, id, title]);

    const addItem = (id: any) => {
        setShowModule((prevItems: any) => prevItems.includes(id) ?
            prevItems.filter((item: any) => item !== id)
            : [...prevItems, id]);
    };

    return (
        <>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                rel="stylesheet"
            />

            <style>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        max-height: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        max-height: 2000px;
                        transform: translateY(0);
                    }
                }

                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                .course-modules-container {
                    padding: 40px 0;
                    background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #dbeafe 100%);
                    min-height: 100vh;
                }

                .modules-wrapper {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .section-title h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 10px;
                    animation: fadeInUp 0.6s ease;
                }

                .section-title p {
                    color: #64748b;
                    font-size: 1.1rem;
                    animation: fadeInUp 0.8s ease;
                }

                .loading-container {
                    text-align: center;
                    padding: 60px 20px;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 60px;
                    height: 60px;
                    border: 5px solid #e0e7ff;
                    border-top: 5px solid #3b82f6;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .loading-text {
                    margin-top: 20px;
                    color: #3b82f6;
                    font-size: 1.2rem;
                    font-weight: 600;
                }

                .module-item {
                    margin-bottom: 20px;
                    animation: fadeInUp 0.5s ease;
                    animation-fill-mode: both;
                }

                .module-item:nth-child(1) { animation-delay: 0.1s; }
                .module-item:nth-child(2) { animation-delay: 0.2s; }
                .module-item:nth-child(3) { animation-delay: 0.3s; }
                .module-item:nth-child(4) { animation-delay: 0.4s; }
                .module-item:nth-child(5) { animation-delay: 0.5s; }

                .module-header {
                    background: white;
                    border-radius: 16px;
                    // padding: 20px 24px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
                    border: 2px solid transparent;
                    position: relative;
                    overflow: hidden;
                }

                .module-header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
                    transition: left 0.5s ease;
                }

                .module-header:hover::before {
                    left: 100%;
                }

                .module-header:hover {
                    transform: translateX(8px);
                    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
                    border-color: #3b82f6;
                }

                .module-header.selected {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
                    border-color: #1e40af;
                    transform: translateX(8px);
                }

                .module-header.selected .courseBtn {
                    color: white !important;
                }

                .module-header.selected .material-symbols-outlined {
                    color: white !important;
                }

                .module-header .material-symbols-outlined {
                    font-size: 28px;
                    color: #3b82f6;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                .module-header.selected .material-symbols-outlined {
                    animation: pulse 0.5s ease;
                }

                .courseBtn {
                    background: transparent !important;
                    border: none !important;
                    color: #1e293b !important;
                    font-size: 1.1rem !important;
                    font-weight: 600 !important;
                    text-align: left !important;
                    padding: 0 !important;
                    flex: 1;
                    transition: color 0.3s ease;
                }

                .courseBtn:hover {
                    color: #3b82f6 !important;
                }

                .module-content {
                    background: white;
                    border-radius: 0 0 16px 16px;
                    padding: 30px;
                    margin-top: -10px;
                    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
                    // border-left: 4px solid #3b82f6;
                    animation: slideDown 0.5s ease;
                    position: relative;
                    left:6px;
                    overflow: hidden;
                }

                .module-content::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6);
                    background-size: 200% 100%;
                    animation: gradientShift 3s ease infinite;
                }

                .ql-editor {
                    color: #475569;
                    line-height: 1.8;
                    font-size: 1rem;
                }

                .ql-editor p {
                    margin-bottom: 15px;
                }

                .ql-editor ul {
                    list-style: none;
                    padding-left: 0;
                }

                .ql-editor li {
                    padding-left: 30px;
                    margin-bottom: 12px;
                    position: relative;
                }

                .ql-editor li::before {
                    content: "✓";
                    position: absolute;
                    left: 0;
                    color: #3b82f6;
                    font-weight: bold;
                    font-size: 1.2rem;
                }

                .ql-editor strong {
                    color: #1e293b;
                    font-weight: 600;
                }

                .ql-editor h1, .ql-editor h2, .ql-editor h3 {
                    color: #1e40af;
                    margin-top: 20px;
                    margin-bottom: 15px;
                }

                .popup-course-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.6);
                    backdrop-filter: blur(8px);
                    z-index: 999;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .popup-course {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1000;
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    max-width: 600px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                    animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -40%);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, -50%);
                    }
                }

                @media (max-width: 768px) {
                    .section-title h2 {
                        font-size: 2rem;
                    }

                    .module-header {
                        // padding: 16px 20px;
                    }

                    .module-content {
                        padding: 20px;
                    }

                    .courseBtn {
                        font-size: 1rem !important;
                    }
                }

                @media (max-width: 576px) {
                    .section-title h2 {
                        font-size: 1.75rem;
                    }

                    .module-header {
                        // padding: 14px 16px;
                        gap: 12px;
                    }

                    .module-header .material-symbols-outlined {
                        font-size: 24px;
                    }
                }
            `}</style>

            <div className="course-modules-container">
                <div className="container">
                    <div className="modules-wrapper">
                        <div className="section-title">
                            <h2> Course Modules</h2>
                            <p>Explore comprehensive learning modules designed for your success</p>
                        </div>

                        {!isCourseModuleLoading && (
                            <div className="loading-container">
                                <div className="loading-spinner"></div>
                                <div className="loading-text">Loading Modules...</div>
                            </div>
                        )}

                        {isCourseModuleLoading && courseModule?.map((item: any, index: any) => {
                            return (
                                <div key={item?._id} className="module-item">
                                    <div
                                        onClick={() => addItem(item?._id)}
                                        className={`module-header ${showModule.includes(item?._id) ? 'selected' : ''}`}
                                    >
                                        {showModule.includes(item?._id) ?
                                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                            :
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        }
                                        <Button className="courseBtn">{item?.name}</Button>
                                    </div>
                                    {showModule.includes(item?._id) &&
                                        <div ref={sectionRef} className="module-content">
                                            <div
                                                className="ql-editor"
                                                dangerouslySetInnerHTML={{
                                                    __html: item?.description,
                                                }}
                                            ></div>
                                        </div>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* {enquiryFormSubmitted !== title && isCourseModuleLoading && showFloatingMenu &&
                <>
                    <div className="popup-course-overlay"></div>
                    <div className="popup-course">
                        <EnquiryForm courseId={title} callback={callback}></EnquiryForm>
                    </div>
                </>
            } */}
        </>
    )
}

export default CourseModules