import { useCallback, useEffect, useMemo, useState } from "react";
import Wrapper from "../Wrapper";
import { useParams } from "react-router-dom";
import TabContainer from "../../Library/Tab/TabContainer";
import { getCenterBatchByCourseId, getCourseSlug } from "../../servies/services";
import Testimonials from "../Testimonials/Testimonials";
import CourseModules from "./CourseModules";
import Clients from "../../components/Clients";
import BannerCourses from "../../images/BannerCourses.png"

const CourseDetails = () => {
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
            setPageContent([])
            const getData = async () => {
                setPageContentLoading(false)
                const data = await getCourseSlug(title);
                console.log("getCourseSlug", data?.data?.data);
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
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    {upcomingBatches?.map((item: any) => {
                        return (
                            <>
                                <tr>
                                    <td>{item?.start_date}</td>
                                    <td>{item?.batch_days}</td>
                                    <td><a href={item?.end_date} target="_blank" rel="noreferrer" >Pay Now</a></td>
                                </tr>
                            </>
                        );
                    })}
                </table>
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
    console.log("id, title -----------", pageContent)
    return (
        <>
            <Wrapper>
                <div className="bannerInner" style={{background:`url(${pageContent?.image ? process.env.react_app_base_url + "/" + pageContent?.image : BannerCourses})`}}> </div>

                <div className="contentMain">
                    <div className="container">
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

                                    <div className="tab">
                                        <ul>
                                            {accordienContent?.map((item: any) => {
                                                return (
                                                    <li
                                                        className={activeItem === item?.name ? "selected" : ""}
                                                        onClick={() => {
                                                            setActiveItem(item?.name);
                                                        }}
                                                    >
                                                        {item?.name}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="tab-content">
                                        {activeItem === "Why" &&
                                            <div
                                                className="content"
                                                dangerouslySetInnerHTML={{
                                                    __html: pageContent?.why_this_course,
                                                }}
                                            ></div>
                                        }
                                        {activeItem === "Key Features" &&
                                            <div
                                                className="content"
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
                                <div className="mb-3">
                                    <img
                                        src={process.env.react_app_base_url + "/" + pageContent?.attachment}
                                        alt=""
                                        title=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="infoBoxCourse">
                                        <ul>
                                            <li>
                                                <p> <span className="material-symbols-outlined">currency_rupee</span> Fees</p>
                                                <p className="rightInfo">{pageContent?.fees}</p>
                                            </li>
                                            <li>
                                                <p><span className="material-symbols-outlined">currency_rupee</span> Installment </p>
                                                <p className="rightInfo">{pageContent?.fees / 2} + {pageContent?.fees / 2}</p></li>
                                            <li>
                                                <p><span className="material-symbols-outlined">schedule</span> Duration </p>
                                                <p className="rightInfo">{pageContent?.duration}</p></li>
                                            <li>
                                                <p> <span className="material-symbols-outlined">view_module</span> Module</p>
                                                <p className="rightInfo">{courseModule?.length}</p>
                                            </li>
                                            <li><p><span className="material-symbols-outlined">call</span> Contact </p>
                                                <p className="rightInfo">{pageContent?.course_contact}</p></li>
                                            <li><p><span className="material-symbols-outlined">chat</span> Whatsapp </p>
                                                <p className="rightInfo"> <a target="_blank" href={pageContent?.course_whatsapp} rel="noreferrer">Link</a>
                                                </p>
                                            </li>
                                        </ul>
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
        </>
    );
};

export default CourseDetails;
