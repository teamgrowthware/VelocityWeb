import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Context/Theme/Context"
import Wrapper from "../Wrapper"
import BannerCourses from "../../images/BannerCourses.png"
import { getCenters } from "../../servies/services"

const AboutUs = () => {
    const { pagesList } = useContext(ThemeContext)
    const [pageContent, setPageContent] = useState<any>({})
    const [centerData, setCenterData] = useState<any>([])

    useEffect(() => {
        const getData = async () => {
            const data = await getCenters()
            setCenterData(data?.data?.data)
        }
        getData()
    }, [])

    useEffect(() => {
        setPageContent(pagesList?.find((item: any) => item?.slug === "about-us"))
    }, [pagesList])

    return (
        <>
            <Wrapper>
                <div className="bannerInner" style={{background:`url(${pageContent?.image ? process.env.react_app_base_url + "/" + pageContent?.image : BannerCourses})`}}> </div>
                <div className='eventsUpcomingBatchWrapper' id='upcoming_batches'>
                    <div className="container">
                        <div className='row'>
                            <div className='eventWrapper'>
                                <h2>About Us</h2>
                                <p>Velocity Pune is a premier IT training institute dedicated to empowering individuals with the skills and knowledge required to excel in the dynamic field of information technology. Our comprehensive curriculum, experienced faculty, and state-of-the-art facilities ensure that students receive industry-relevant education, preparing them for successful careers in the IT sector. Offering a diverse range of courses, from foundational programming languages to advanced technologies, we cater to both beginners and professionals seeking to enhance their expertise.</p>
                            </div>
                        </div>
                        <div className='terms_conditions'>
                            <div className="paymentContent content">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="inner3 text-center">
                                            <span className="material-symbols-outlined">
                                                rocket_launch
                                            </span>
                                            <h4>Our Mission</h4>
                                            <p>Our mission is to deliver world-class IT education by offering cutting-edge, industry-aligned training programs that combine technical expertise with practical learning. We strive to inspire creativity, nurture innovation, and develop holistic skill sets that enable students to thrive in the competitive IT landscape. Through a commitment to lifelong learning and inclusivity, we aim to bridge the skills gap, advance technological growth, and empower individuals to transform their aspirations into reality.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="inner4  text-center">
                                            <span className="material-symbols-outlined">
                                                editor_choice
                                            </span>
                                            <h4>Our Vision</h4>
                                            <p>Our vision is to become a leading center of excellence in IT education, recognized globally for delivering transformative, industry-relevant training. We aspire to empower individuals with the skills, knowledge, and confidence to innovate, lead, and contribute meaningfully to the ever-evolving world of technology. By fostering a culture of excellence and inclusivity, we aim to shape future-ready professionals who drive progress and create a positive impact on society.</p>
                                        </div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default AboutUs