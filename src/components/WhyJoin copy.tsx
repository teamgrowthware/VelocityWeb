import { useEffect, useState } from "react"
import Img1 from "../images/why1.png"
import { getWhyUs } from "../servies/services"

const WhyJoin = () => {

    // getWhyUs

    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const testimonialsData = await getWhyUs()
            console.log("testimonialsData?", testimonialsData?.data?.data)
            setData(testimonialsData?.data?.data)
        }
        getData()
    }, [])
    return (
        <div className="whyUs">
            <div className="container">
                <h1>Why to join Velocity?</h1>
                <div className="row">
                    {data?.map((item: any) => {
                        return (
                            <div className="col-md-4">
                                <div className="inner">
                                    <div className="card-container">
                                        <div className="card">
                                            <div className="card-front">
                                                <img className="infoBoxImg" src={item?.cms_image?.length > 5 ? process.env.react_app_base_url + "/" + item?.cms_image : Img1} alt="" title="" />
                                                <h3>{item?.cms_title}</h3>
                                            </div>
                                            <div className="card-back">
                                                <h3>{item?.cms_title}</h3>
                                                <div
                                                    className="ql-editor"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.cms_description,
                                                    }}
                                                ></div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}



                </div>
            </div>
        </div>
    )
}
export default WhyJoin