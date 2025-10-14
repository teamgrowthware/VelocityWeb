import { useEffect, useState } from "react";
import { getTestimonialsByCourseId } from "../../servies/services";
import Logo from "../../images/logo.png";

// Import your icons (make sure they are installed or replace them)
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Quote } from "lucide-react";

interface Testimonial {
    id: string;
    image: string;
    name: string;
    badge: string;
    badgeColor: string;
    text: string;
    cms_image?: string;
    cms_title?: string;
    cms_tags?: string;
    cms_course_name?: string;
    cms_description?: string;
}

interface TestimonialsProps {
    slice?: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({ slice }) => {
    const [data, setData] = useState<Testimonial[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Fetch data
    useEffect(() => {
        const getData = async () => {
            const testimonialsData = await getTestimonialsByCourseId("Testimonials");
            console.log("testimonialsData?", testimonialsData?.data?.data);
            setData(testimonialsData?.data?.data || []);
        };
        getData();
    }, []);

    // Auto-play effect
    useEffect(() => {
        if (!isAutoPlaying || data.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, data.length]);

    // Navigation
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
        setIsAutoPlaying(false);
    };

    // Get 3 visible items: [prev, current, next]
    const getVisibleTestimonials = () => {
        if (data.length === 0) return [];
        const prev = (currentIndex - 1 + data.length) % data.length;
        const next = (currentIndex + 1) % data.length;
        return [prev, currentIndex, next];
    };

    return (
        <>
            <h3 className="text-center testimonialsHeading">
                Our success lies in our learners success stories
            </h3>
            <p className="text-center testimonialsSubHeading">
                Read the reviews by our student on how VCTC has helped become solid developers.
            </p>

            <div className="row">
                <div className="relative w-full">
                    {/* Carousel Section */}
                    <div className="relative h-[500px] mb-8 overflow-hidden">
                        <div className="flex items-center justify-center h-full relative">
                            {getVisibleTestimonials().map((idx, position) => {
                                const testimonial = data[idx];
                                const isCenter = position === 1;

                                return (
                                    <div
                                        key={testimonial?.id || idx}
                                        className={`absolute transition-all duration-700 ease-in-out ${isCenter
                                            ? "z-20 scale-100 opacity-100 translate-x-0"
                                            : position === 0
                                                ? "z-10 scale-90 opacity-40 -translate-x-[400px] blur-sm"
                                                : "z-10 scale-90 opacity-40 translate-x-[400px] blur-sm"
                                            }`}
                                        style={{
                                            pointerEvents: isCenter ? "auto" : "none",
                                        }}
                                    >
                                        <div className="bg-white rounded-3xl shadow-2xl p-8 w-[450px] h-[420px] relative overflow-hidden group hover:shadow-3xl transition-shadow duration-300">
                                            {/* Decorative gradient */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-400 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                                            {/* Quote icon */}
                                            <div className="absolute top-6 right-6 text-orange-500 opacity-20">
                                                <Quote size={48} />
                                            </div>

                                            {/* Profile */}
                                            <div className="flex items-center mb-6 relative z-10">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-20 h-20 rounded-full border-4 border-orange-100 shadow-lg"
                                                />
                                                <div className="ml-4">
                                                    <h3 className="text-xl font-bold text-gray-900">
                                                        {testimonial.name}
                                                    </h3>
                                                    <span
                                                        className={`inline-block mt-2 px-4 py-1 ${testimonial.badgeColor} text-white text-sm font-semibold rounded-full`}
                                                    >
                                                        {testimonial.badge}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Testimonial Text */}
                                            <div className="relative z-10">
                                                <p className="text-gray-700 leading-relaxed overflow-y-auto max-h-[220px] pr-2 custom-scrollbar">
                                                    {testimonial.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <button
                            onClick={goToPrevious}
                            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 text-black hover:text-white transition-all duration-300 group"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
                        </button>

                        <div className="flex gap-2">
                            {data.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? "w-8 bg-orange-500"
                                        : "w-2 bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 text-black hover:text-white transition-all duration-300 group"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Static testimonials below the carousel */}
                {data?.slice(0, slice)?.map((item, index) => {
                    return (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="innerBoxTestimonails">
                                <div className="headerTestimonails">
                                    <div className="iconTestimonails">
                                        {/* <img
                                            className="infoBoxImg"
                                            src={
                                                item?.cms_image?.length > 5
                                                    ? `${process.env.REACT_APP_BASE_URL}/${item.cms_image}`
                                                    : Logo
                                            }
                                            alt={item.cms_title || ""}
                                        /> */}
                                    </div>
                                    <div className="titleTestimonails">
                                        <p className="ttitle">
                                            <strong>{item?.cms_title}</strong>
                                        </p>
                                        <p className="ttitle2">{item?.cms_tags ?? "SDE 1"}</p>
                                        <div className="tag">{item?.cms_course_name}</div>
                                    </div>
                                </div>
                                <div
                                    className="ql-editor"
                                    dangerouslySetInnerHTML={{
                                        __html: item?.cms_description || "",
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Scrollbar Styling */}
            {/* <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff6b35;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ff5520;
        }
      `}</style> */}
        </>
    );
};

export default Testimonials;
