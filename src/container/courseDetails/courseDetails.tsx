import { useCallback, useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Context/Theme/Context"
import Wrapper from "../Wrapper"
import { useParams } from "react-router-dom"

const CourseDetails = () => {
    const { coursesList } = useContext(ThemeContext)
    const { title } = useParams()
    const [pageContent, setPageContent] = useState<any>({})


    useEffect(() => {
        const content = coursesList?.find((item: any) => {
            return item?.slug === title
        })
        setPageContent(content)
    }, [coursesList, title])
    return (
        <>
            <Wrapper>
                <div className="bannerInner">
                    {/* <div className="overLay"></div> */}
                    <img src={process.env.react_app_base_url + "/" + pageContent?.image} alt="" title="" />

                </div>
                <div className="contentMain">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>{pageContent?.name}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="innerBox">
                                    <div className="tab">
                                        <ul>
                                            <li>Overview</li>
                                            <li>Curriculum</li>
                                            <li>Why </li>
                                            <li>Key features</li>
                                            <li>Upcoming Batches</li>
                                            <li>Reviews</li>
                                        </ul>
                                    </div>
                                    {JSON.stringify(pageContent?.description)}
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>

            </Wrapper>
        </>
    )
}

export default CourseDetails