import { useEffect, useState } from "react"
import Img1 from "../images/why1.png"
import { getClients } from "../servies/services"

const Clients = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const testimonialsData = await getClients()
            console.log("testimonialsData?", testimonialsData?.data?.data)
            setData(testimonialsData?.data?.data)
        }
        getData()
    }, [])

    return (
        <div className="clients">
            <div className="container text-center">
                <h3>Our alumni are employed at renowned technology companies and promising startups.</h3>
                <p>Our alumni have established successful careers at leading technology companies, contributing to innovative advancements. They also play key roles in dynamic startups, driving growth and creating new opportunities.</p>
            </div>

            <div className="marquee-container">
                {data?.length >= 0 &&
                    <div className="marquee-content">
                        {data?.slice(0, 19)?.map((item: any) => {
                            return <div className="boxClient">
                                <img className="infoBoxImg" src={item?.cms_image?.length > 5 ? process.env.react_app_base_url + "/" + item?.cms_image : Img1} alt="" title="" />
                            </div>
                        })}
                    </div>
                }
                {data?.length >= 20 &&
                    <div className="marquee-content">
                        {data?.slice(20, 39)?.map((item: any) => {
                            return <div className="boxClient"> <img className="infoBoxImg" src={item?.cms_image?.length > 5 ? process.env.react_app_base_url + "/" + item?.cms_image : Img1} alt="" title="" /></div>
                        })}
                    </div>
                }
                {data?.length >= 40 &&
                    <div className="marquee-content">
                        {data?.slice(40, undefined)?.map((item: any) => {
                            return <div className="boxClient"> <img className="infoBoxImg" src={item?.cms_image?.length > 5 ? process.env.react_app_base_url + "/" + item?.cms_image : Img1} alt="" title="" /></div>
                        })}
                    </div>
                }
            </div>

        </div>
    )
}
export default Clients