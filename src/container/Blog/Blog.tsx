import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Context/Theme/Context"
import Wrapper from "../Wrapper"
import BannerCourses from "../../images/blog.jpg"
import BlogPlaceholder from "../../images/blog1.png"
import { NavLink, useNavigate } from "react-router-dom"
import { getBlog } from "../../servies/services"
import BlogCategory from "./BlogCategory"

const Blog = () => {
    const { coursesList } = useContext(ThemeContext)
    const navigate = useNavigate()
    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        const getData = async () => {
            const APIResponse = await getBlog();
            if (APIResponse?.data?.isSuccess === true) {
                setBlogList(APIResponse?.data?.data);
            } else {
                console.error("something went wrong, please try after sometime.")
            }
        };
        getData();
    }, [])
    return (
        <>
            <Wrapper>
                <div className="bannerInner2" style={{ background: `url(${BannerCourses})` }}></div>
                <div className="container">
                    <div className="courseList3">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    {blogList?.map((item: any) => {
                                        console.log("item?.cms_image", item?.cms_image)
                                        return (
                                            <>
                                                <div className="col-md-4 mb-4" onClick={() => navigate(`/blog/${item?.slug}`)}>
                                                    <div className="infoBox">
                                                        <img className="infoBoxImg" src={item?.cms_image ? process.env.react_app_base_url + "/" + item?.cms_image : BlogPlaceholder} alt="" title="" />
                                                        {item?.cms_category?.length > 1 && <div className="tag">{item?.cms_category}</div>}
                                                        <div className="meta"><div>{item?.cms_publish_date}</div></div>
                                                        <h4>{item?.cms_title}</h4>
                                                        <p>{item?.short_description}</p>

                                                        {/* <NavLink to={`/blog/${item?.slug}`}>Read More</NavLink> */}

                                                        <div className="infoFooter2">
                                                            <NavLink to={`/blog/${item?.slug}`}>Read More</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <BlogCategory></BlogCategory>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Blog