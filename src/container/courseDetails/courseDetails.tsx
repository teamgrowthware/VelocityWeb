import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../Context/Theme/Context";
import Wrapper from "../Wrapper";
import { useParams } from "react-router-dom";
import TabContainer from "../../Library/Tab/TabContainer";
import { getCenterBatchByCourseId, getModuleByCourseId } from "../../servies/services";
import { Button } from "../../Library/Module";
import Testimonials from "../Testimonials/Testimonials";

const CourseDetails = () => {
    const { coursesList } = useContext(ThemeContext);
    const { title } = useParams();
    const [pageContent, setPageContent] = useState<any>({});
    const [upcomingBatches, setUpcomingBatches] = useState([]);
    const [courseModule, setCourseModule] = useState([]);
    const [showModule, setShowModule] = useState<any>([])
    const [activeTab, setActiveTab] = useState('')
    const [isLoadinngUB, setIsLoadingUB] = useState(false)

    const sectionRef = useRef<any>(null);

    useEffect(() => {
        const content = coursesList?.find((item: any) => {
            return item?.slug === title;
        });
        setPageContent(content);
    }, [coursesList, title]);

    useEffect(() => {
        const getData = async () => {
            setUpcomingBatches([])
            setCourseModule([])
            setIsLoadingUB(false)
            const data = await getCenterBatchByCourseId(pageContent?._id);
            console.log("getCenterBatchByCourseId", data?.data?.data);
            setUpcomingBatches(data?.data?.data);
            setIsLoadingUB(true)
            const moduleData = await getModuleByCourseId(pageContent?._id);
            console.log("getCenterBatchByCourseId", data?.data?.data);
            setCourseModule(moduleData?.data?.data);
        };
        getData();
    }, [pageContent?._id]);

    const UpcomingCourse = useCallback(() => {
        return isLoadinngUB && (
            <>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {/* <th>Course Name</th> */}
                            {/* <th>Duration</th> */}
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    {upcomingBatches?.map((item: any) => {
                        return (
                            <>
                                <tr>
                                    {/* <td>{item?.name}</td> */}
                                    {/* <td>{item?.duration}</td> */}
                                    <td>{item?.start_date}</td>
                                    <td>{item?.batch_days}</td>
                                    <td><a href={item?.end_date} target="_blank" rel="noreferrer" >Pay Now</a></td>
                                </tr>
                            </>
                        );
                    })}
                </table>
                {/* <div className="paymentContent content">
                    <h5>
                        Please read the Terms and Conditions (T&amp;Cs)
                        carefully prior to enroll the course
                    </h5>
                    <ol>
                        <li>
                            The fees will be non-refundable and
                            non-transferable in any circumstances.
                        </li>
                        <li>
                            Batch or Course change is strictly not
                            allowed.
                        </li>
                        <li>
                            Velocity provides corporate level training.
                        </li>
                        <li>
                            Training will be provided according to the
                            specified curriculum.
                        </li>
                        <li>
                            Candidates will get interview calls from
                            different job portals.
                        </li>
                    </ol>
                    <p>
                        All rights reserved to Velocity Corporate
                        Training Center*
                    </p>
                    <p>
                        If you have any queries/ doubt regarding
                        payment, please contact us at
                        support@vctcpune.com
                    </p>
                </div> */}

            </>
        );
    }, [upcomingBatches, isLoadinngUB]);

    const addItem = (id: any) => {
        setShowModule((prevItems: any) => prevItems.includes(id) ?
            prevItems.filter((item: any) => item !== id)
            : [...prevItems, id]);
    };


    const CourseModules = useCallback(() => {
        return (
            <>
                {courseModule?.map((item: any, index: any) => {
                    console.log("item ------- ", item?._id)
                    return (
                        <>
                            <div onClick={() => {
                                addItem(item?._id)
                            }} className={`module-header ${showModule.includes(item?._id) ? 'selected' : ''}`}>
                                {showModule.includes(item?._id) ?
                                    <span className="material-symbols-outlined">chevron_right</span>
                                    :
                                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
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
                        </>
                    )
                })}
            </>
        );
    }, [courseModule, showModule]);

    return (
        <>
            <Wrapper>
                <div className="bannerInner">
                    <img
                        src={process.env.react_app_base_url + "/" + pageContent?.image}
                        alt=""
                        title=""
                    />
                </div>
                <div className="contentMain">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="innerBox">
                                    <h2>{pageContent?.name}</h2>
                                    <div
                                        className="ql-editor"
                                        dangerouslySetInnerHTML={{
                                            __html: pageContent?.description,
                                        }}
                                    ></div>
                                    <div className="syllabus">
                                        <h4>Syllabus</h4>
                                        <CourseModules></CourseModules>
                                    </div>
                                    <TabContainer
                                        activeTab={activeTab}
                                        activeTabCallout={setActiveTab}
                                        list={[
                                            {
                                                name: "Why",
                                                content: (
                                                    <div
                                                        className="content"
                                                        dangerouslySetInnerHTML={{
                                                            __html: pageContent?.why_this_course,
                                                        }}
                                                    ></div>
                                                ),
                                            },
                                            {
                                                name: "Key features",
                                                content: (
                                                    <div
                                                        className="content"
                                                        dangerouslySetInnerHTML={{
                                                            __html: pageContent?.key_features,
                                                        }}
                                                    ></div>
                                                ),
                                            },
                                            {
                                                name: "Upcoming Batches",
                                                content: <UpcomingCourse></UpcomingCourse>,
                                            }
                                        ]}
                                    ></TabContainer>
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
