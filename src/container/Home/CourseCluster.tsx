import { useCallback, useEffect, useState } from "react"
import { Button } from "../../Library/Module"
import { NavLink, useNavigate } from "react-router-dom"
import { getCategoryforCMSType, getTestimonialsByCourseId } from "../../servies/services"
import DefaultImage from "../../images/mediaPython.jpeg"
import useMobile from "../../Library/Utility/useMobile"

const CourseCluster = () => {
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState('AI and Data Science')
    const [selectedItemData, setSelectedItemData] = useState([])
    const { mobileOnly } = useMobile()


    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const clustersData = await getTestimonialsByCourseId('clusters')
            console.log("clusters?", clustersData?.data?.data)
            setData(clustersData?.data?.data)
        }
        getData()
    }, [])

    const showItem = useCallback((id: any) => {
        console.log("showItem id-----", id, data)
        setSelectedItem(id)
        const clustersListData: any = data?.filter((item: any) => item?.cms_category === id)
        console.log("showItem id----- clustersListData", clustersListData)
        setSelectedItemData(clustersListData)
    }, [data])

    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        const getData = async () => {
            const clustersData = await getCategoryforCMSType('clusters')
            console.log("clusters?", clustersData?.data?.data)
            setCategoryList(clustersData?.data?.data)
            showItem("AI and Data Science")
        }
        getData()
    }, [showItem])
    console.log("mobileOnly", mobileOnly)
    return (
        <div className="clusters">
            <div className="container">
                <div className="row">
                    <h1>Courses We Offered</h1>
                    {mobileOnly ?
                        <>
                            <div className="col-md-4">
                                <ul className="clustersMenu">
                                    {categoryList?.map((item: any) => {
                                        return (
                                            <>
                                                <li onClick={() => showItem(item?.title)} className={`module-header ${selectedItem === item?.title ? 'active' : 'inactive'}`}>
                                                    <Button className="courseBtn">{item?.title}</Button>
                                                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                                                </li>
                                                {item?.title === selectedItem &&
                                                    <>
                                                        <div className="courseList2">
                                                            <div className="row">
                                                                <h2>{selectedItem}</h2>
                                                                {selectedItemData?.map((item: any) => {
                                                                    return (
                                                                        <div className="col-6 mb-4" onClick={() => navigate(`${item?.cms_tags}`)}>
                                                                            <div className="infoBox">
                                                                                <h4>{item?.cms_title}</h4>
                                                                                <img className="infoBoxImg" src={item?.cms_image ? process.env.react_app_base_url + "/" + item?.cms_image : DefaultImage} alt="" title="" />
                                                                                <NavLink to={`${item?.cms_tags}`}>Read More</NavLink>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div></div>
                                                    </>
                                                }
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <div className="col-md-4">
                                <ul className="clustersMenu">
                                    {categoryList?.map((item: any) => {
                                        return <li onClick={() => showItem(item?.title)} className={`module-header ${selectedItem === item?.title ? 'active' : 'inactive'}`}>
                                            <Button className="courseBtn">{item?.title}</Button>
                                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <div className="col-md-8">
                                <div className="courseList2">
                                    <div className="row">
                                        <h2>{selectedItem}</h2>
                                        {selectedItemData?.map((item: any) => {
                                            return (
                                                <div className="col-md-6 mb-4" onClick={() => navigate(`${item?.cms_tags}`)}>
                                                    <div className="infoBox">
                                                        <h4>{item?.cms_title}</h4>
                                                        <img className="infoBoxImg" src={item?.cms_image ? process.env.react_app_base_url + "/" + item?.cms_image : DefaultImage} alt="" title="" />
                                                        <NavLink to={`${item?.cms_tags}`}>Read More</NavLink>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </div>
    )
}
export default CourseCluster