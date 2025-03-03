import { useContext } from "react"
import { ThemeContext } from "../Context/Theme/Context"
import Wrapper from "../Wrapper"
import BannerCourses from "../../images/BannerCourses.png"
import { NavLink, useNavigate } from "react-router-dom"

const Courses = () => {
    const { coursesList } = useContext(ThemeContext)
    const navigate = useNavigate()
    return (
        <>
            <Wrapper>
                <div className="bannerInner">
                    <img src={BannerCourses} alt="" title="" />
                </div>

                <div className="container">
                    <div className="courseList">
                        <div className="row">
                            {coursesList?.map((item: any) => {
                                return (
                                    <>
                                        <div className="col-md-4 mb-4" onClick={() => navigate(`/courses/${item?.slug}`)}>
                                            <div className="infoBox">
                                                <img className="infoBoxImg" src={process.env.react_app_base_url + "/" + item?.image} alt="" title="" />
                                                <h4>{item?.name}</h4>
                                                <p>{item?.short_description}</p>
                                                <div className="infoFooter">
                                                    <ul>
                                                        <li>
                                                            <p><span className="material-symbols-outlined">schedule</span></p>
                                                            <p className="rightInfo">{item?.duration}</p></li>
                                                        <li>
                                                            <p> <span className="material-symbols-outlined">currency_rupee</span></p>
                                                            <p className="rightInfo">{item?.fees}</p>
                                                        </li>
                                                    </ul>
                                                    <div className="infoFooter2">
                                                        <NavLink to={`/courses/${item?.slug}`}>Read More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Courses