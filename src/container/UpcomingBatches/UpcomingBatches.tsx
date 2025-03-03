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
                <div className="bannerInner">
                    <img
                        src={pageContent?.image?.length > 5 ? process.env.react_app_base_url + "/" + pageContent?.image : BannerCourses}
                        alt=""
                        title=""
                    />
                </div>

                <div className='eventsUpcomingBatchWrapper' id='upcoming_batches'>
                    <div className="container">
                        <UpcomingBatch></UpcomingBatch>
                        <div className='row'>
                            <div className='col-md-12 mb-5'>
                                <div className='terms_conditions'>
                                    <div className="paymentContent content">
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