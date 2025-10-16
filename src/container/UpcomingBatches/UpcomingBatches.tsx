import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Context/Theme/Context"
import Wrapper from "../Wrapper"
import BannerCourses from "../../images/BannerCourses.png"
import UpcomingBatch from "./UpcomingBatch"

const UpcomingBatches = () => {
    const { pagesList } = useContext(ThemeContext)
    const [pageContent, setPageContent] = useState<any>({})


    useEffect(() => {
        setPageContent(pagesList?.find((item: any) => item?.slug === "upcoming-batches"))
    }, [pagesList])

    return (
        <>
            <Wrapper>
                <div className="bannerInner" style={{ background: `url(${pageContent?.image ? process.env.react_app_base_url + "/" + pageContent?.image : BannerCourses})` }}> </div>

                <div className='eventsUpcomingBatchWrapper' id='upcoming_batches'>
                    <div className="container">
                        <UpcomingBatch></UpcomingBatch>
                        <div className="container my-5">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="card shadow-sm border-0">
                                        <div className="card-body">
                                            <p className="text-secondary">
                                                Please read the Terms and Conditions (T&amp;Cs) carefully prior to enrolling in the course.
                                            </p>

                                            <ol className="text-dark ps-3 mb-4">
                                                <li className="mb-2">
                                                    The fees will be non-refundable and non-transferable in any circumstances.
                                                </li>
                                                <li className="mb-2">
                                                    Batch or course change is strictly not allowed.
                                                </li>
                                                <li className="mb-2">
                                                    Velocity provides corporate level training.
                                                </li>
                                                <li className="mb-2">
                                                    Training will be provided according to the specified curriculum.
                                                </li>
                                                <li className="mb-2">
                                                    Candidates will get interview calls from different job portals.
                                                </li>
                                            </ol>

                                            <p className="text-muted mb-2">
                                                <strong>Note:</strong> All rights reserved to Velocity Corporate Training Center*
                                            </p>

                                            <p className="text-muted">
                                                If you have any queries or doubts regarding payment, please contact us at:
                                                <a href="mailto:support@vctcpune.com" className="text-primary text-decoration-none fw-semibold">
                                                    support@vctcpune.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default UpcomingBatches