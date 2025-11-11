import { useCallback, useEffect, useMemo, useState } from "react";
import Wrapper from "../Wrapper";
import { useParams } from "react-router-dom";
import TabContainer from "../../Library/Tab/TabContainer";
import { getCenterBatchByCourseId, getCourseSlug } from "../../servies/services";
import Testimonials from "../Testimonials/Testimonials";
import CourseModules from "./CourseModules";
import Clients from "../../components/Clients";
import BannerCourses from "../../images/BannerCourses.png"

const CoursesDetails = () => {
    const { title } = useParams();
    const [pageContentLoading, setPageContentLoading] = useState<any>(false);
    const [pageContent, setPageContent] = useState<any>({});
    const [upcomingBatches, setUpcomingBatches] = useState([]);
    const [courseModule, setCourseModule] = useState([])
    const [activeItem, setActiveItem] = useState<any>("Why");
    const [activeTab, setActiveTab] = useState('')
    const [isLoadinngUB, setIsLoadingUB] = useState(false)

    useEffect(() => {
        if (title) {
            console.log("ttttttttt",title)
            setPageContent([])
            const getData = async () => {
                setPageContentLoading(false)
                const data = await getCourseSlug(title);
                console.log("getCourseSlug----", data?.data?.data);
                setPageContent(data?.data?.data);
                setPageContentLoading(true)
            };
            getData();
        }
    }, [title]);

    useEffect(() => {
        if (pageContent?._id) {
            setUpcomingBatches([])
            const getData = async () => {
                setIsLoadingUB(false)
                const data = await getCenterBatchByCourseId(pageContent?._id);
                console.log("getCenterBatchByCourseId", data?.data);
                setUpcomingBatches(data?.data?.data);
                setIsLoadingUB(true)

            };
            getData();
        }
    }, [pageContent, title]);




    const UpcomingCourse = useCallback(() => {
        return isLoadinngUB && (
            <>
                <div className="card-body p-0 rounded mt-4" >
                    <div className="table-responsive">
                        <table className="table table-hover mb-0 modern-table">

                            <thead>
                                <tr style={{ background: 'linear-gradient(to right, #f8f9ff 0%, #e6e9ff 100%)' }}>
                                    <th className="py-3 px-4 fw-bold" style={{ color: '#4c51bf', borderBottom: '3px solid #667eea' }}>
                                        <i className="bi bi-calendar3 me-2"></i>Date
                                    </th>
                                    <th className="py-3 px-4 fw-bold" style={{ color: '#4c51bf', borderBottom: '3px solid #667eea' }}>
                                        <i className="bi bi-clock me-2"></i>Slot
                                    </th>
                                    <th className="py-3 px-4 fw-bold text-center" style={{ color: '#4c51bf', borderBottom: '3px solid #667eea' }}>
                                        <i className="bi bi-credit-card me-2"></i>Payment
                                    </th>
                                </tr>
                            </thead>
                            {upcomingBatches?.map((item: any, index: any) => {
                                return (
                                    <>
                                        <tr key={index} className="batch-row">
                                            <td className="py-3 px-4 align-middle">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="badge rounded-pill px-3 py-2" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '0.9rem' }}>
                                                        {item?.start_date}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 align-middle">
                                                <div className="text-secondary fw-medium">
                                                    <i className="bi bi-alarm text-primary me-2"></i>
                                                    {item?.batch_days}
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 align-middle text-center">
                                                <a
                                                    href={item?.end_date}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-primary px-4 py-2 fw-semibold text-decoration-none payout-btn"
                                                    style={{
                                                        // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                        border: 'none',
                                                        borderRadius: '12px',
                                                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                                                    }}
                                                >
                                                    <i className="bi bi-wallet2 me-2"></i>
                                                    Pay Now
                                                </a>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </table>
                    </div>
                </div>
            </>
        );
    }, [upcomingBatches, isLoadinngUB]);

    const accordienContent = useMemo(() => [
        {
            name: "Why",
        },
        {
            name: "Key Features",
        },
        {
            name: "Upcoming Batches",
        }
    ], [])
    return (
        <>
            <Wrapper>
                {/* <div className="bannerInner" style={{ background: `url(${pageContent?.image ? process.env.react_app_base_url + "/" + pageContent?.image : BannerCourses})` }}> </div> */}

                <div className="contentMain">
                    <div className="px-2 px-sm-4">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="innerBox">
                                    <h2>{!pageContentLoading && "loading..."} {pageContent?.name}</h2>
                                    <div
                                        className="ql-editor"
                                        dangerouslySetInnerHTML={{
                                            __html: pageContent?.description,
                                        }}
                                    ></div>
                                    <div className="syllabus">
                                        <h4>Syllabus</h4>
                                        <CourseModules
                                            id={pageContent?._id}
                                            title={title}
                                            courseModuleCallback={setCourseModule}
                                        ></CourseModules>
                                    </div>

                                    <div className="container my-4">

                                        <ul className="nav nav-pills custom-tabs d-flex gap-2 p-2" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e6eaff 100%)', borderRadius: '20px' }}>
                                            {accordienContent?.map((item, index) => {
                                                const isActive = activeItem === item?.name;
                                                return (
                                                    <li
                                                        key={index}
                                                        className={`flex-fill ${isActive ? "selected" : ""}`}
                                                        onClick={() => {
                                                            setActiveItem(item?.name);
                                                        }}
                                                        style={{ listStyle: 'none' }}
                                                    >
                                                        <button
                                                            className={`btn w-100 fw-semibold py-3 px-4 tab-button ${isActive ? 'active' : ''}`}
                                                            style={{
                                                                background: isActive
                                                                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                                                    : 'transparent',
                                                                color: isActive ? '#ffffff' : '#4c51bf',
                                                                border: 'none',
                                                                borderRadius: '15px',
                                                                transition: 'all 0.3s ease',
                                                                boxShadow: isActive
                                                                    ? '0 8px 20px rgba(102, 126, 234, 0.4)'
                                                                    : 'none',
                                                                transform: isActive ? 'scale(1.02)' : 'scale(1)',
                                                                fontSize: '1rem',
                                                                letterSpacing: '0.3px'
                                                            }}
                                                        >
                                                            {item?.name}
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    <div className="clearfix"></div>
                                    <div className="tab-content">
                                        {activeItem === "Why" &&
                                            <div
                                                className="ql-editor"
                                                dangerouslySetInnerHTML={{
                                                    __html: pageContent?.why_this_course,
                                                }}
                                            ></div>
                                        }
                                        {activeItem === "Key Features" &&
                                            <div
                                                className="ql-editor"
                                                dangerouslySetInnerHTML={{
                                                    __html: pageContent?.key_features,
                                                }}
                                            ></div>
                                        }
                                        {activeItem === "Upcoming Batches" &&
                                            <UpcomingCourse></UpcomingCourse>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-lg border-0 overflow-hidden" style={{ borderRadius: '20px' }}>
                                    {/* Image Section */}
                                    <div className="position-relative" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
                                        <img
                                            src={process.env.react_app_base_url + "/" + pageContent?.attachment}
                                            alt=""
                                            title=""
                                            className="img-fluid rounded-3 shadow"
                                            style={{ width: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div className="card-body p-0">
                                        <div className="infoBoxCourse">
                                            <ul className="list-unstyled m-0">
                                                <li className="border-bottom" style={{ background: 'linear-gradient(to right, #f8f9ff 0%, #ffffff 100%)' }}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="material-symbols-outlined text-white bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '20px' }}>
                                                                currency_rupee
                                                            </span>
                                                            <p className="mb-0 fw-semibold text-dark ">Fees</p>
                                                        </div>
                                                        <p className="mb-0 fw-bold text-primary mx-2 fs-5">₹{pageContent?.fees}</p>
                                                    </div>
                                                </li>

                                                <li className="border-bottom" style={{ background: '#ffffff' }}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="material-symbols-outlined text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '20px', background: '#5a67d8' }}>
                                                                currency_rupee
                                                            </span>
                                                            <p className="mb-0 fw-semibold text-dark">Installment</p>
                                                        </div>
                                                        <p className="mb-0 fw-bold mx-2 " style={{ color: '#5a67d8' }}>
                                                            ₹{pageContent?.fees / 2} + ₹{pageContent?.fees / 2}
                                                        </p>
                                                    </div>
                                                </li>

                                                <li className="border-bottom" style={{ background: 'linear-gradient(to right, #f8f9ff 0%, #ffffff 100%)' }}>
                                                    <div className="d-flex align-items-center justify-content-between ">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="material-symbols-outlined text-white bg-info rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '20px' }}>
                                                                schedule
                                                            </span>
                                                            <p className="mb-0 fw-semibold text-dark">Duration</p>
                                                        </div>
                                                        <p className="mb-0 fw-bold text-info mx-2 ">{pageContent?.duration}</p>
                                                    </div>
                                                </li>
                                                <li className="border-bottom" style={{ background: '#ffffff' }}>
                                                    <div className="d-flex align-items-center justify-content-between ">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="material-symbols-outlined text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '20px', background: '#4299e1' }}>
                                                                view_module
                                                            </span>
                                                            <p className="mb-0 fw-semibold text-dark">Module</p>
                                                        </div>
                                                        <p className="mb-0 fw-bold mx-2 " style={{ color: '#4299e1' }}>{courseModule?.length}</p>
                                                    </div>
                                                </li>

                                                {/* Contact */}
                                                <li className="border-bottom" style={{ background: 'linear-gradient(to right, #f8f9ff 0%, #ffffff 100%)' }}>
                                                    <div className="d-flex align-items-center justify-content-between ">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="material-symbols-outlined text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '20px', background: '#3182ce' }}>
                                                                call
                                                            </span>
                                                            <p className="mb-0 fw-semibold text-dark">Contact</p>
                                                        </div>
                                                         <p className="mb-0 fw-bold mx-2 " style={{ color: '#3182ce' }}>9322077876</p>
                                                        {/* <p className="mb-0 fw-bold mx-2 " style={{ color: '#3182ce' }}>{pageContent?.course_contact}</p> */}
                                                    </div>
                                                </li>

                                                {/* WhatsApp */}
                                                <li style={{ background: '#ffffff' }}>
                                                    <div className="d-flex align-items-center justify-content-between ">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="material-symbols-outlined text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '20px', background: '#2b6cb0' }}>
                                                                chat
                                                            </span>
                                                            <p className="mb-0 fw-semibold text-dark">Whatsapp</p>
                                                        </div>
                                                        <a
                                                            target="_blank"
                                                            href={pageContent?.course_whatsapp}
                                                            rel="noreferrer"
                                                            className="btn mx-2  btn-primary btn-sm px-3 py-2 fw-semibold text-decoration-none"
                                                            style={{ borderRadius: '10px' }}
                                                        >
                                                            Open Link
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="infoBoxCourse" style={{ padding: '0px' }}>
                                        <UpcomingCourse></UpcomingCourse>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Clients></Clients>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="testimonialsWrapper">
                                    <Testimonials slice={9}></Testimonials>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

            <style >{`

             .tab-button:not(.active):hover {
          background: rgba(102, 126, 234, 0.1) !important;
          color: #5a67d8 !important;
          transform: translateY(-2px);
        }

        .tab-button.active {
          font-weight: 700;
        }

        .custom-tabs {
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);
        }

        @media (max-width: 768px) {
          .custom-tabs {
            flex-direction: column !important;
          }
          
          .tab-button {
            font-size: 0.95rem !important;
          }
        }
    
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(66, 153, 225, 0.3) !important;
        }
        
        li {
          transition: all 0.3s ease;
        }
        
        li:hover {
          background: linear-gradient(to right, #ebf4ff 0%, #f7fafc 100%) !important;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
          .modern-table tbody tr {
            transition: all 0.3s ease;
            border-bottom: 1px solid #e2e8f0;
          }

          .batch-row:hover {
            background: linear-gradient(to right, #f7faff 0%, #fff 100%);
            transform: scale(1.01);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
          }

          .payout-btn {
            transition: all 0.3s ease;
          }

          .payout-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4) !important;
          }

          .badge {
            font-weight: 600;
            letter-spacing: 0.3px;
          }

          .card {
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
          }

          thead th {
            position: sticky;
            top: 0;
            z-index: 10;
          }

          @media (max-width: 768px) {
            .table {
              font-size: 0.9rem;
            }
            
            .payout-btn {
              padding: 0.5rem 1rem !important;
              font-size: 0.85rem;
            }
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

      `}</style>
        </>
    );
};

export default CoursesDetails;
