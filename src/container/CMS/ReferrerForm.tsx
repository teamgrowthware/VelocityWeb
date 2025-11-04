import { useContext, useEffect, useState } from "react";
import { Button, Input, Select } from "../../Library/Module";
import { ThemeContext } from "../Context/Theme/Context";
import axios from "axios";
import { toast } from "react-toastify";
import { onChange } from "react-toastify/dist/core/store";

interface CourseOption {
    text: string;
    value: string;
    id: string;
}

interface FormData {
    name?: string;
    course?: string;
    email?: string;
    phone?: string;
    fname?: string;
    fphone?: string;
    organization_id?: string;
}

const ReferrerForm: React.FC = () => {
    const [courseOptions, setCourseOptions] = useState<any>([]);
    const [formData, setFormData] = useState<FormData>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [focusedField, setFocusedField] = useState<string>("");

    const onChangeSingleCallback = (data: Partial<FormData>) => {
        setFormData((prevState) => ({
            ...prevState,
            ...data,
        }));
    };

    const { coursesList } = useContext(ThemeContext);

    useEffect(() => {
        if (coursesList?.length > 0) {
            const list: CourseOption[] = coursesList.map((item: any) => ({
                text: item?.name ?? 'Unknown Course',
                value: item?.slug ?? '',
                id: item?.slug ?? '',
            }));
            console.log("listt", coursesList)
            setCourseOptions(list);
        }
    }, [coursesList]);

    const submit = async () => {
        if (!formData.name || !formData.course || !formData.email || !formData.phone || !formData.fname || !formData.fphone) {
            toast.error("Please enter all required details. All fields are mandatory.");
            return;
        }

        setIsSubmitting(true);

        const formDataPost = {
            'organization_id': formData.organization_id ?? 'VCTCPune',
            'name': formData.name,
            'course_name': formData.course,
            'email': formData.email,
            'mobile': formData.phone,
            'fname': formData.fname,
            'fphone': formData.fphone,
            'status': '1',
            'created_by': 'Website',
        };

        try {
            const res = await axios.post(process.env.react_app_base_url + '/api/v1/frontend/refer', formDataPost);
            const message = res.data.messages || "Referral submitted successfully!";
            toast.success(message);
            setFormData({});
        } catch (error: any) {
            console.error("Submission error", error);
            const message = error.response?.data?.message || "An unexpected error occurred during submission.";
            toast.error(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="referral-form-wrapper">
                <div className="form-container">
                    {/* Header with Icon */}
                    <div className="form-header">
                        <div className="Fromheader-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 className="form-title">Referral Form</h4>
                        <p className="form-subtitle">Share the opportunity with your friends</p>
                    </div>

                    {/* Form Body */}
                    <div className="form-body">
                        {/* Your Details Section */}
                        <div className="section-divider">
                            <div className="divider-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <span className="divider-text">Your Details</span>
                        </div>

                        <div className="row g-3 mb-4">
                            <div className="col-md-12">
                                <div className="form-field-wrapper">
                                    <Input
                                        col="12"
                                        required
                                        onChangeSingleCallback={onChangeSingleCallback}
                                        placeholder="Enter your full name"
                                        labelName="Your Name"
                                        inputName="name"
                                        value={formData.name || ''}
                                        className="custom-input"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-field-wrapper">
                                    <Input
                                        col="12"
                                        inputType="email"
                                        required
                                        onChangeSingleCallback={onChangeSingleCallback}
                                        placeholder="your.email@example.com"
                                        labelName="Email Address"
                                        inputName="email"
                                        value={formData.email || ''}
                                        className="custom-input"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-field-wrapper">
                                    <Input
                                        col="12"
                                        inputType="number"
                                        required
                                        onChangeSingleCallback={onChangeSingleCallback}
                                        placeholder="10-digit mobile number"
                                        labelName="Phone Number"
                                        inputName="phone"
                                        value={formData.phone || ''}
                                        className="custom-input"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div
                                    className="form-field-wrapper position-relative"
                                    style={{ zIndex: 10, overflow: "visible" }}
                                >
                                    <label htmlFor="course" className="form-label fw-bold">
                                        Referrer Course <span className="text-danger">*</span>
                                    </label>

                                    <select
                                        id="course"
                                        name="course"
                                        className="form-select"
                                        required
                                        value={formData?.course || ""}
                                        onChange={(e) => onChangeSingleCallback({ course: e.target.value })}

                                        style={{ zIndex: 9999, position: "relative" }}
                                    >
                                        <option value="">Select Course</option>
                                        {courseOptions?.map((option: any) => (
                                            <option key={option.value} value={option.value}>
                                                {option.value}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                        </div>

                        {/* Friend's Details Section */}
                        <div className="section-divider mt-4">
                            <div className="divider-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <span className="divider-text">Friend's Details</span>
                        </div>

                        <div className="row g-3">
                            <div className="col-md-12">
                                <div className="form-field-wrapper">
                                    <Input
                                        col="12"
                                        required
                                        onChangeSingleCallback={onChangeSingleCallback}
                                        placeholder="Friend's full name"
                                        labelName="Friend's Name"
                                        inputName="fname"
                                        value={formData.fname || ''}
                                        className="custom-input"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-field-wrapper">
                                    <Input
                                        col="12"
                                        inputType="number"
                                        required
                                        onChangeSingleCallback={onChangeSingleCallback}
                                        placeholder="Friend's phone number"
                                        labelName="Friend's Phone"
                                        inputName="fphone"
                                        value={formData.fphone || ''}
                                        className="custom-input"
                                    />
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <Button
                                    onClick={submit}
                                    className="submit-button w-100"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <span className="me-2">Submit Referral</span>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="form-decoration decoration-1"></div>
                    <div className="form-decoration decoration-2"></div>
                    <div className="form-decoration decoration-3"></div>
                </div>
            </div>

            <style>{`
                .referral-form-wrapper {
                    position: relative;
                    padding: 0;
                }

                .form-container {
                    background: white;
                    border-radius: 24px;
                    box-shadow: 0 10px 40px rgba(37, 99, 235, 0.08);
                    overflow: hidden;
                    position: relative;
                    border: 2px solid rgba(37, 99, 235, 0.1);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .form-container:hover {
                    box-shadow: 0 20px 60px rgba(37, 99, 235, 0.15);
                    border-color: rgba(37, 99, 235, 0.2);
                    transform: translateY(-2px);
                }

                /* Header Styles */
                .form-header {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    padding: 2rem 1.5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .form-header::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                    animation: headerPulse 8s ease-in-out infinite;
                }

                @keyframes headerPulse {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(20px, 20px); }
                }

                .Fromheader-icon {
                    width: 64px;
                    height: 64px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    animation: iconFloat 3s ease-in-out infinite;
                }

                @keyframes iconFloat {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(5deg); }
                }

                .Fromheader-icon svg {
                    color: white;
                }

                .form-title {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0 0 0.5rem 0;
                    position: relative;
                    z-index: 1;
                }

                .form-subtitle {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 0.9rem;
                    margin: 0;
                    position: relative;
                    z-index: 1;
                }

                /* Form Body */
                .form-body {
                    padding: 2rem 1.5rem;
                }

                /* Section Divider */
                .section-divider {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 2px solid rgba(37, 99, 235, 0.1);
                }

                .divider-icon {
                    width: 36px;
                    height: 36px;
                    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                }

                .section-divider:hover .divider-icon {
                    transform: scale(1.1) rotate(5deg);
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                }

                .section-divider:hover .divider-icon svg {
                    color: white;
                }

                .divider-icon svg {
                    color: #2563eb;
                    transition: color 0.3s ease;
                }

                .divider-text {
                    font-weight: 600;
                    color: #1e40af;
                    font-size: 1rem;
                    letter-spacing: 0.5px;
                }

                /* Form Field Wrapper */
                .form-field-wrapper {
                    position: relative;
                    animation: fieldSlideIn 0.6s ease-out forwards;
                    opacity: 0;
                }

                .form-field-wrapper:nth-child(1) { animation-delay: 0.1s; }
                .form-field-wrapper:nth-child(2) { animation-delay: 0.2s; }
                .form-field-wrapper:nth-child(3) { animation-delay: 0.3s; }
                .form-field-wrapper:nth-child(4) { animation-delay: 0.4s; }

                @keyframes fieldSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Custom Input Styles */
                .form-field-wrapper :global(.custom-input),
                .form-field-wrapper :global(input),
                .form-field-wrapper :global(select) {
                    border: 2px solid #e5e7eb;
                    border-radius: 12px;
                    padding: 0.875rem 1rem;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    background: #f9fafb;
                }

                .form-field-wrapper :global(.custom-input:focus),
                .form-field-wrapper :global(input:focus),
                .form-field-wrapper :global(select:focus) {
                    border-color: #2563eb;
                    background: white;
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                    outline: none;
                    transform: translateY(-2px);
                }

                .form-field-wrapper :global(.custom-input:hover),
                .form-field-wrapper :global(input:hover),
                .form-field-wrapper :global(select:hover) {
                    border-color: #60a5fa;
                    background: white;
                }

                .form-field-wrapper :global(label) {
                    font-weight: 600;
                    color: #1f2937;
                    font-size: 0.875rem;
                    margin-bottom: 0.5rem;
                    display: inline-block;
                }

                /* Submit Button */
                .submit-button {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    border: none;
                    border-radius: 12px;
                    padding: 1rem 2rem;
                    font-weight: 600;
                    font-size: 1rem;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
                }

                .submit-button::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    transform: translate(-50%, -50%);
                    transition: width 0.6s, height 0.6s;
                }

                .submit-button:hover::before {
                    width: 300px;
                    height: 300px;
                }

                .submit-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
                }

                .submit-button:active {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
                }

                .submit-button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }

                .submit-button svg {
                    transition: transform 0.3s ease;
                }

                .submit-button:hover svg {
                    transform: translateX(4px);
                }

                /* Decorative Elements */
                .form-decoration {
                    position: absolute;
                    border-radius: 50%;
                    background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(29, 78, 216, 0.05));
                    pointer-events: none;
                }

                .decoration-1 {
                    width: 120px;
                    height: 120px;
                    top: -30px;
                    right: -30px;
                    animation: decorFloat 8s ease-in-out infinite;
                }

                .decoration-2 {
                    width: 80px;
                    height: 80px;
                    bottom: 100px;
                    left: -20px;
                    animation: decorFloat 6s ease-in-out infinite;
                    animation-delay: 1s;
                }

                .decoration-3 {
                    width: 60px;
                    height: 60px;
                    bottom: 20px;
                    right: 40px;
                    animation: decorFloat 7s ease-in-out infinite;
                    animation-delay: 2s;
                }

                @keyframes decorFloat {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-10px, -10px) scale(1.1); }
                }

                /* Spinner */
                .spinner-border {
                    width: 1rem;
                    height: 1rem;
                    border-width: 2px;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .form-container {
                        border-radius: 16px;
                    }

                    .form-header {
                        padding: 1.5rem 1rem;
                    }

                    .form-body {
                        padding: 1.5rem 1rem;
                    }

                    .form-title {
                        font-size: 1.25rem;
                    }

                    .header-icon {
                        width: 56px;
                        height: 56px;
                    }

                    .submit-button {
                        padding: 0.875rem 1.5rem;
                        font-size: 0.95rem;
                    }
                }

                /* Accessibility */
                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </>
    );
};

export default ReferrerForm;