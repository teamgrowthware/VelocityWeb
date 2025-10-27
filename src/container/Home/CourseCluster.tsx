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
        <>
            <style>{`
                .clusters-section {
                    padding: 60px 0;
                    min-height: 100vh;
                }
                
                .clusters-title {
                    // color: #ffffff;
                    font-size: 2.5rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 50px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
                }
                
                .category-card {
                    background: #ffffff;
                    border: none;
                    border-radius: 15px;
                    padding:0px 20px;
                    margin-bottom: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                
                .category-card:hover {
                    transform: translateX(10px);
                    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
                }
                
                .category-card.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: #ffffff;
                    transform: translateX(10px);
                    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
                }
                
                .category-card .btn {
                    background: transparent;
                    border: none;
                    color: #333;
                    font-weight: 600;
                    font-size: 1.1rem;
                    padding: 0;
                    text-align: left;
                    width: 100%;
                }
                
                .category-card.active .btn {
                    color: #ffffff;
                }
                
                .category-arrow {
                    font-size: 1.2rem;
                    transition: all 0.3s ease;
                }
                
                .category-card.active .category-arrow {
                    color: #ffffff;
                    transform: rotate(90deg);
                }
                
                .courses-content {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .courses-heading {
                    color: #667eea;
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    padding-bottom: 15px;
                }
                
                .course-card {
                    background: #ffffff;
                    border: 2px solid #e0e7ff;
                    border-radius: 15px;
                    padding: 0;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    height: 100%;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
                }
                
                .course-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 10px 25px rgba(79, 172, 254, 0.3);
                    border-color:linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);

                }
                
                .course-card-body {
                    padding: 20px;
                }
                
                .course-card h4 {
                    color: #333;
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 15px;
                    min-height: 60px;
                }
                
                .course-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 10px;
                    margin-bottom: 15px;
                }
                
                .course-link {
                    display: inline-block;
                             background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);

                    color: #ffffff;
                    padding: 10px 25px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 10px rgba(79, 172, 254, 0.3);
                }
                
                .course-link:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 15px rgba(79, 172, 254, 0.4);
                }
                
                .mobile-courses-content {
                    background: #ffffff;
                    border-radius: 15px;
                    padding: 25px 15px;
                    margin: 15px 0;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }
                
                @media (max-width: 768px) {
                    .clusters-title {
                        font-size: 2rem;
                        margin-bottom: 30px;
                    }
                    
                    .courses-content {
                        padding: 20px;
                    }
                    
                    .courses-heading {
                        font-size: 1.5rem;
                    }
                }
            `}</style>

            <div className="clusters-section">
                <div className="container">
                    <h1 className="clusters-title">Courses We Offered</h1>

                    <div className="row">
                        {mobileOnly ? (
                            <div className="col-12">
                                {categoryList?.map((item: any) => (
                                    <div key={item?.title}>
                                        <div
                                            className={`category-card d-flex justify-content-between align-items-center ${selectedItem === item?.title ? 'active' : ''}`}
                                            onClick={() => showItem(item?.title)}
                                        >
                                            <Button className="courseBtn">{item?.title}</Button>
                                            <span className="material-symbols-outlined category-arrow">arrow_forward_ios</span>
                                        </div>

                                        {item?.title === selectedItem && (
                                            <div className="mobile-courses-content">
                                                <h2 className="courses-heading">{selectedItem}</h2>
                                                <div className="row g-3">
                                                    {selectedItemData?.map((course: any, idx: number) => (
                                                        <div key={idx} className="col-6">
                                                            <div
                                                                className="course-card"
                                                                onClick={() => navigate(`${course?.cms_tags}`)}
                                                            >
                                                                <div className="course-card-body">
                                                                    <h4>{course?.cms_title}</h4>
                                                                    <img
                                                                        className="course-image"
                                                                        src={course?.cms_image ? process.env.react_app_base_url + "/" + course?.cms_image : DefaultImage}
                                                                        alt={course?.cms_title}
                                                                    />
                                                                    <NavLink
                                                                        to={`${course?.cms_tags}`}
                                                                        className="course-link"
                                                                    >
                                                                        Read More
                                                                    </NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                <div className="col-md-4">
                                    <div className="d-flex flex-column">
                                        {categoryList?.map((item: any) => (
                                            <div
                                                key={item?.title}
                                                className={`category-card d-flex justify-content-between align-items-center ${selectedItem === item?.title ? 'active' : ''}`}
                                                onClick={() => showItem(item?.title)}
                                            >
                                                <Button className="courseBtn">{item?.title}</Button>
                                                <span className="material-symbols-outlined category-arrow">arrow_forward_ios</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="courses-content">
                                        <h2 className="courses-heading">{selectedItem}</h2>
                                        <div className="row g-4">
                                            {selectedItemData?.map((course: any, idx: number) => (
                                                <div key={idx} className="col-md-6">
                                                    <div
                                                        className="course-card"
                                                        onClick={() => navigate(`${course?.cms_tags}`)}
                                                    >
                                                        <div className="course-card-body">
                                                            <h4>{course?.cms_title}</h4>
                                                            <img
                                                                className="course-image"
                                                                src={course?.cms_image ? process.env.react_app_base_url + "/" + course?.cms_image : DefaultImage}
                                                                alt={course?.cms_title}
                                                            />
                                                            <NavLink
                                                                to={`${course?.cms_tags}`}
                                                                className="course-link"
                                                            >
                                                                Read More
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCluster