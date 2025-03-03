import Wrapper from "../Wrapper"
import Testimonials from "./Testimonials"
import BannerCourses from "../../images/BannerCourses.png"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Context/Theme/Context"

const TestimonialsWrapper = () => {
    const { pagesList } = useContext(ThemeContext)
    console.log("pagesList", pagesList)
    const [data, setData] = useState<any>({})

    useEffect(() => {
        setData(pagesList?.find((item: any) => item?.slug === "testimonials"))
    }, [pagesList])

    return (
        <>
            <Wrapper>
                <div className="bannerInner">
                    <img src={data?.image?.length > 5 ? process.env.react_app_base_url + "/" + data?.image : BannerCourses} alt="" title="" />
                </div>
                <div className="testimonialsWrapper2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Testimonials></Testimonials>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default TestimonialsWrapper