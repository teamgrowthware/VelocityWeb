import { useCallback, useEffect, useState } from "react"
import { Button } from "../../Library/Module"
import { useNavigate } from "react-router-dom"
import { getCategoryforCMSType, getTestimonialsByCourseId } from "../../servies/services"
import DefaultImage from "../../images/mediaPython.jpeg"
import useMobile from "../../Library/Utility/useMobile"

const CourseCluster = () => {
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState<string | null>("AI and Data Science")
    const [selectedItemData, setSelectedItemData] = useState([])
    const { mobileOnly } = useMobile()

    const [data, setData] = useState([])
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        const getData = async () => {
            const clustersData = await getTestimonialsByCourseId('clusters')
            console.log("clusters?", clustersData?.data?.data)
            setData(clustersData?.data?.data)
        }
        getData()
    }, [])

    const showItem = useCallback((id: any) => {
        console.log("showItem id---d--", id, data)
        setSelectedItem(id)
        const clustersListData: any = data?.filter((item: any) => item?.cms_category === id)
        console.log("showItem id----- clustersListData", clustersListData)
        setSelectedItemData(clustersListData)
    }, [data])

    const showcloseItem = useCallback((id: string) => {
        if (selectedItem === id) {
            setSelectedItem(null)
            setSelectedItemData([])
            return
        }

        setSelectedItem(id)
        const clustersListData = data.filter((item: any) => item?.cms_category === id)
        setSelectedItemData(clustersListData)
    }, [data, selectedItem])

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
                    padding: 0px 0;
                    // min-height: 80vh;
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                }
                
                .clusters-title {
                    font-size: 2rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 20px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
                    color: #333;
                }
                
                .category-card {
                    background: #ffffff;
                    border: none;
                    border-radius: 15px;
                    padding: 0px 20px;
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
                    font-size: 0.8rem;
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
                    padding: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .courses-heading {
                    color: #667eea;
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    padding-bottom: 5px;
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
                    border-color: #4facfe;
                }
                
                .course-card-body {
                    padding: 20px;
                }
                
                .course-card h4 {
                    color: #333;
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 15px;
                    min-height: 20px;
                }
                
                .course-image {
                    width: 100%;
                    height: 150px;
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
                    color: #ffffff;
                }
                
                /* Mobile Specific Styles */
                .mobile-category-tabs {
                    display: flex;
                    overflow-x: auto;
                    gap: 10px;
                    padding: 10px 0 20px;
                    margin-bottom: 20px;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                }
                
                .mobile-category-tabs::-webkit-scrollbar {
                    display: none;
                }
                
                .mobile-category-tab {
                    flex-shrink: 0;
                    background: #ffffff;
                    border: 2px solid #e0e7ff;
                    border-radius: 25px;
                    padding: 12px 24px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: #333;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }
                
                .mobile-category-tab.active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: #ffffff;
                    border-color: #667eea;
                    transform: scale(1.05);
                    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
                }
                
                .mobile-courses-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                    gap: 20px;
                    padding: 0 5px;
                }
                
                .mobile-course-card {
                    background: #ffffff;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .mobile-course-card:active {
                    transform: scale(0.98);
                }
                
                .mobile-course-image {
                    width: 100%;
                    height: 100px;
                    object-fit: cover;
                }
                
                .mobile-course-body {
                    padding: 20px;
                }
                
                .mobile-course-title {
                    color: #333;
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 15px;
                    line-height: 1.4;
                }
                
                .mobile-course-link {
                    display: inline-block;
                    background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
                    color: #ffffff;
                    padding: 10px 20px;
                    border-radius: 20px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 10px rgba(13, 110, 253, 0.3);
                }
                
                .mobile-course-link:hover {
                    color: #ffffff;
                    box-shadow: 0 6px 15px rgba(13, 110, 253, 0.4);
                }
                
                .mobile-section-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 10px;
                    color: #333;
                }
                
                .mobile-section-subtitle {
                    text-align: center;
                    color: #666;
                    font-size: 0.95rem;
                    margin-bottom: 25px;
                    padding: 0 20px;
                }
                
                @media (max-width: 768px) {
                    .clusters-section {
                        padding: 40px 0;
                    }
                    
                    .clusters-title {
                        font-size: 1.8rem;
                        margin-bottom: 15px;
                    }
                    .mobile-section-title {
                        font-size: 1.5rem;
                    }
                }
                
                @media (min-width: 769px) {
                    .mobile-category-tabs,
                    .mobile-courses-grid,
                    .mobile-section-title,
                }
            `}</style>

            <div className="clusters-section">
                <div className="p-4">
                    {mobileOnly ? (
                        <>
                            <h1 className="mobile-section-title">Explore Our Courses</h1>
                            <p className="mobile-section-subtitle">
                                Choose a category to discover courses
                            </p>

                            <div className="mobile-category-tabs">
                                {categoryList?.map((item: any) => (
                                    <div
                                        key={item?.title}
                                        className={`mobile-category-tab ${selectedItem === item?.title ? 'active' : ''}`}
                                        onClick={() => showItem(item?.title)}
                                    >
                                        {item?.title}
                                    </div>
                                ))}
                            </div>

                            <div className="mobile-courses-grid">
                                {selectedItemData?.map((course: any, idx: number) => (
                                    <div
                                        key={idx}
                                        className="mobile-course-card"
                                        onClick={() => navigate(`${course?.cms_tags}`)}
                                    >
                                        <img
                                            className="mobile-course-image"
                                            src={course?.cms_image ? process.env.react_app_base_url + "/" + course?.cms_image : DefaultImage}
                                            alt={course?.cms_title}
                                        />
                                        <div className="mobile-course-body">
                                            <h4 className="mobile-course-title">{course?.cms_title}</h4>
                                            <div className="mobile-course-link">
                                                Explore Course
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="clusters-title">Courses We Offered</h1>
                            <div className="row">
                                <div className="col-md-3">
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

                                <div className="col-md-9">
                                    <div className="courses-content">
                                        <h2 className="courses-heading">{selectedItem}</h2>
                                        <div className="row g-2">
                                            {selectedItemData?.map((course: any, idx: number) => (
                                                <div key={idx} className={`${selectedItemData.length == 4 ? 'col-md-3' : 'col-md-4'}`}>
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
                                                            <div className="course-link">
                                                                Read More
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default CourseCluster