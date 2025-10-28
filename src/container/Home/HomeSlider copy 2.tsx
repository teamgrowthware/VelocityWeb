import React, { useEffect, useRef, useState } from "react";
import { getSliders } from "../../servies/services";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./HomeSlider.css";

const HomeSlider: React.FC = () => {
    const [sliderData, setSliderData] = useState<any[]>([]);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const getData = async () => {
            const data = await getSliders();
            setSliderData(data?.data?.data || []);
        };
        getData();
    }, []);

    return (
        <div className="position-relative w-100 overflow-hidden home-slider mb-0">
            <Swiper
                modules={[Navigation, Autoplay]} // Removed Pagination
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                speed={800}
                className="w-100 slider-container"
                onBeforeInit={(swiper) => {
                    if (swiper.params && (swiper.params as any).navigation) {
                        (swiper.params as any).navigation.prevEl = prevRef.current;
                        (swiper.params as any).navigation.nextEl = nextRef.current;
                    }
                }}
            >
                {sliderData.length === 0 ? (
                    <SwiperSlide>
                        <div
                            className="d-flex flex-column justify-content-center align-items-center text-center position-relative slide-content"
                            style={{
                                backgroundImage:
                                    'url("https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?w=1060")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "68vh",
                            }}
                        >
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                            <div className="position-relative text-white px-4 fade-up">
                                <h1 className="display-6 fw-bold mb-3 text-shadow">
                                    Welcome to Velocity Training Center
                                </h1>
                                <p className="lead mb-3 text-light">
                                    Empowering learners with industry-ready skills in IT, Software, and
                                    Emerging Technologies.
                                </p>
                                <NavLink to="/" className="btn btn-primary px-4 py-2 rounded-pill shadow">
                                    View Details
                                </NavLink>
                            </div>
                        </div>
                    </SwiperSlide>
                ) : (
                    sliderData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center text-center position-relative slide-content"
                                style={{
                                    backgroundImage: `url("${item?.cms_banner ||
                                        "https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?w=1060"
                                        }")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "40vh",
                                }}
                            >
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

                                <div className="position-relative text-white px-4 fade-up">
                                    <h2 className="display-6 fw-bold mb-3 text-shadow text-white">
                                        {item?.cms_title || "Welcome to Velocity Training Center"}
                                    </h2>
                                    <p className="lead mb-3 text-light">
                                        Empowering learners with industry-ready skills in IT, Software, and
                                        Emerging Technologies. Start your journey today!
                                    </p>

                                    {item?.cms_tags && (
                                        <NavLink
                                            to={item?.cms_tags}
                                            className="btn btn-primary px-4 py-2 rounded-pill shadow"
                                        >
                                            View Details
                                        </NavLink>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                )}

                {/* Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="swiper-button-prev btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y ms-3 shadow nav-btn"
                    aria-label="Previous slide"
                    type="button"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    ref={nextRef}
                    className="swiper-button-next btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y me-3 shadow nav-btn"
                    aria-label="Next slide"
                    type="button"
                >
                    <ChevronRight size={20} />
                </button>
            </Swiper>
        </div>
    );
};

export default HomeSlider;
