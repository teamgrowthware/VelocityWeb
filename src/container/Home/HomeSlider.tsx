import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getSliders } from "../../servies/services";
import { NavLink } from "react-router-dom";

const HomeSlider = () => {
    const [sliderData, setSliderData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getSliders()
            console.log("data getData", data?.data?.data)
            setSliderData(data?.data?.data)
        }
        getData()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    console.log("sliderData", sliderData)

    return (
        <Slider {...settings}>
            {sliderData.map((item: any, index) => {
                console.log("item image", item?.cms_image)
                return (
                    <div className='sliderWrapper2'>
                        <div className='itemPlacement'>
                            <div className='courseCategory2'>
                                <div className='inner'>
                                    <NavLink to={item?.cms_tags}>View Details</NavLink>
                                    <div className='clearfix'></div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </Slider>
    )
}

export default HomeSlider