import { NavLink } from "react-router-dom"
import { ThemeContext } from "../container/Context/Theme/Context"
import { useContext } from "react"

const CourseMenu = () => {
    const { coursesList } = useContext(ThemeContext)
    return (
        <div className="hoverMenu">
            <p className="hoverMenuOuter"><NavLink to={`/courses`}>View All Courses</NavLink></p>
            <ul>

                {coursesList?.map((item: any) => {
                    return (
                        <li>
                            <NavLink to={`/courses/${item?.slug}`}>{item?.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CourseMenu