import { useEffect, useState } from "react";
import { getTestimonialsByCourseId } from "../../servies/services";
import Logo from "../../images/logo.png"

const Testimonials = ({
    slice
}: {
    slice?: any
}) => {

    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const testimonialsData = await getTestimonialsByCourseId('Testimonials')
            console.log("testimonialsData?", testimonialsData?.data?.data)
            setData(testimonialsData?.data?.data)
        }
        getData()
    }, [])
    return (
        <>
            <h3 className="text-center testimonialsHeading">Our success lies in our learners success stories </h3>
            <p className="text-center testimonialsSubHeading">Read the reviews by our student on how VCTC has helped become solid developers.</p>
            <div className="row">

                {data?.slice(0, slice)?.map((item: any) => {
                    console.log("item?.cms_tags", item, item?.cms_tags)
                    return (
                        <>
                            <div className="col-md-4 mb-4">
                                <div className="innerBoxTestimonails">
                                    <div className="headerTestimonails">
                                        <div className="iconTestimonails">
                                            <img className="infoBoxImg" src={item?.cms_image?.length > 5 ? process.env.react_app_base_url + "/" + item?.cms_image : Logo} alt="" title="" />
                                        </div>
                                        <div className="titleTestimonails">
                                            <p className="ttitle"><strong>{item?.cms_title}</strong></p>
                                            <p className="ttitle2">
                                                {item?.cms_tags ?? "SDE 1"}
                                            </p>
                                            <div className="tag">{item?.cms_course_name}</div>
                                        </div>
                                    </div>
                                    <div
                                        className="ql-editor"
                                        dangerouslySetInnerHTML={{
                                            __html: item?.cms_description,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
};

export default Testimonials;
