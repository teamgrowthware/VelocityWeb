import { useCallback, useEffect, useState } from "react"
import { Button } from "../../Library/Module"
import { NavLink, useNavigate } from "react-router-dom"
import { getCategoryforCMSType, getTestimonialsByCourseId } from "../../servies/services"
import DefaultImage from "../../images/mediaPython.jpeg"
import useMobile from "../../Library/Utility/useMobile"

const CourseCluster = () => {
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState<string | null>("AI and Data Science")
    const [selectedItemData, setSelectedItemData] = useState<any[]>([])
    const { mobileOnly } = useMobile()

    const [data, setData] = useState<any[]>([])
    const [categoryList, setCategoryList] = useState<any[]>([])

    // Fetch course cluster data
    useEffect(() => {
        const getData = async () => {
            const clustersData = await getTestimonialsByCourseId("clusters")
            setData(clustersData?.data?.data || [])
        }
        getData()
    }, [])

    // Fetch categories
    useEffect(() => {
        const getCategories = async () => {
            const clustersData = await getCategoryforCMSType("clusters")
            setCategoryList(clustersData?.data?.data || [])
            showItem("AI and Data Science")
        }
        getCategories()
    }, [])

    // Show courses for selected category
    const showItem = useCallback((id: string) => {
        if (selectedItem === id) {
            // If same item clicked, close it (toggle)
            setSelectedItem(null)
            setSelectedItemData([])
            return
        }

        setSelectedItem(id)
        const clustersListData = data.filter((item: any) => item?.cms_category === id)
        setSelectedItemData(clustersListData)
    }, [data, selectedItem])

    return (
        <>
            <style>{`
                .clusters-section {
                    padding: 60px 0;
                }

                .clusters-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 50px;
                }

                .category-card {
                    background: #ffffff;
                    border: none;
                    border-radius: 15px;
                    padding: 15px 20px;
                    margin-bottom: 10px;
                    cursor: pointer;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s ease;
                }

                .category-card.active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: #ffffff;
                    transform: translateX(5px);
                }

                .category-arrow {
                    transition: all 0.3s ease;
                }

                .category-card.active .category-arrow {
                    transform: rotate(90deg);
                    color: #fff;
                }

                .courses-content {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }

                .course-card {
                    background: #ffffff;
                    border: 2px solid #e0e7ff;
                    border-radius: 15px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
                }

                .course-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(79, 172, 254, 0.3);
                }

                .course-image {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                }

                .course-card-body {
                    padding: 15px;
                    text-align: center;
                }

                .course-card h4 {
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                .course-link {
                    display: inline-block;
                    background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
                    color: #ffffff;
                    padding: 8px 18px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.85rem;
                }

                .mobile-courses-content {
                    background: #ffffff;
                    border-radius: 10px;
                    padding: 15px;
                    margin-bottom: 20px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    animation: fadeIn 0.4s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .clusters-title {
                        font-size: 1.8rem;
                    }
                    .col-12 .course-card {
                        margin-bottom: 15px;
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
                                            className={`category-card ${selectedItem === item?.title ? "active" : ""}`}
                                            onClick={() => showItem(item?.title)}
                                        >
                                            <Button className="courseBtn">{item?.title}</Button>
                                            <span className="material-symbols-outlined category-arrow">
                                                arrow_forward_ios
                                            </span>
                                        </div>

                                        {selectedItem === item?.title && (
                                            <div className="mobile-courses-content">
                                                {selectedItemData?.length > 0 ? (
                                                    selectedItemData.map((course: any, idx: number) => (
                                                        <div key={idx} className="col-12 mb-3">
                                                            <div
                                                                className="course-card"
                                                                onClick={() => navigate(`${course?.cms_tags}`)}
                                                            >
                                                                <img
                                                                    className="course-image"
                                                                    src={
                                                                        course?.cms_image
                                                                            ? process.env.react_app_base_url +
                                                                            "/" +
                                                                            course?.cms_image
                                                                            : DefaultImage
                                                                    }
                                                                    alt={course?.cms_title}
                                                                />
                                                                <div className="course-card-body">
                                                                    <h4>{course?.cms_title}</h4>
                                                                    <NavLink
                                                                        to={`${course?.cms_tags}`}
                                                                        className="course-link"
                                                                    >
                                                                        Read More
                                                                    </NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>No courses available.</p>
                                                )}
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
                                                className={`category-card ${selectedItem === item?.title ? "active" : ""}`}
                                                onClick={() => showItem(item?.title)}
                                            >
                                                <Button className="courseBtn">{item?.title}</Button>
                                                <span className="material-symbols-outlined category-arrow">
                                                    arrow_forward_ios
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    {selectedItem && (
                                        <div className="courses-content">
                                            <h2 className="courses-heading">{selectedItem}</h2>
                                            <div className="row g-4">
                                                {selectedItemData?.map((course: any, idx: number) => (
                                                    <div key={idx} className="col-md-6">
                                                        <div
                                                            className="course-card"
                                                            onClick={() => navigate(`${course?.cms_tags}`)}
                                                        >
                                                            <img
                                                                className="course-image"
                                                                src={
                                                                    course?.cms_image
                                                                        ? process.env.react_app_base_url +
                                                                        "/" +
                                                                        course?.cms_image
                                                                        : DefaultImage
                                                                }
                                                                alt={course?.cms_title}
                                                            />
                                                            <div className="course-card-body">
                                                                <h4>{course?.cms_title}</h4>
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
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCluster
