import { useCallback, useEffect, useState } from "react"
import { Button } from "../../Library/Module"
import { NavLink, useNavigate } from "react-router-dom"
import { getCategoryforCMSType, getTestimonialsByCourseId } from "../../servies/services"
import DefaultImage from "../../images/mediaPython.jpeg"
// const clustersList = [
//     {
//         "name": "AI and Data Science",
//         "slug": "data-science",
//         "sub": [
//             {
//                 "name": "Python and Data Science",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "NLP and Generative AI",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "MLOps",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             }
//         ]
//     },
//     {
//         "name": "Data Analytics",
//         "slug": "data-analytics",
//         "sub": [
//             {
//                 "name": "Data Analytics",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "Power BI",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             }
//         ]
//     },
//     {
//         "name": "Cloud Services",
//         "slug": "cloud-services",
//         "sub": [
//             {
//                 "name": "AWS/DevOps",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "Salesforce",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "Serice Now",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             }
//         ]
//     },
//     {
//         "name": "Development",
//         "slug": "development",
//         "sub": [
//             {
//                 "name": "Full stack Java Development",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "SpringBoot",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "Salesforce",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             }
//         ]
//     },
//     {
//         "name": "Testing",
//         "slug": "testing",
//         "sub": [
//             {
//                 "name": "Software Testing",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "ATT",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "Automation Testing",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "RPA",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             }
//         ]
//     },
//     {
//         "name": "Frontend Technology",
//         "slug": "frontend-technology",
//         "sub": [
//             {
//                 "name": "React Development",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//             {
//                 "name": "Angular Development",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             }
//         ]
//     },
//     {
//         "name": "Stock Market and Trading",
//         "slug": "stock-market-trading",
//         "sub": [
//             {
//                 "name": "Share Market",
//                 "slug": "data-science",
//                 "url": "https://vctcpune.com/nodeapi/public/images/media-17368399429-WhatsApp%20Image%202025-01-14%20at%2013.01.29.jpeg"
//             },
//         ]
//     }
// ]

const CourseCluster = () => {
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState('AI and Data Science')
    const [selectedItemData, setSelectedItemData] = useState([])



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




    return (
        <div className="clusters">
            <div className="container">
                <div className="row">
                    <h1>Courses We Offered</h1>
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
                </div>
            </div>
        </div>
    )
}
export default CourseCluster