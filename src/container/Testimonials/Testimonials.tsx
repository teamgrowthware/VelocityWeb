import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getTestimonialsByCourseId } from '../../servies/services';
import Logo from '../../images/logo.png';

interface Testimonial {
    id: number;
    cms_title: string;
    cms_tags: string;
    cms_description: string;
    cms_course_name: string;
    cms_image: string;
}

const Testimonials = ({ slice }: { slice?: number }) => {
    const [data, setData] = useState<Testimonial[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

    // Fetch testimonials from backend
    useEffect(() => {
        const getData = async () => {
            try {
                const testimonialsData = await getTestimonialsByCourseId('Testimonials');
                const fetched = testimonialsData?.data?.data ?? [];
                setData(fetched);
            } catch (err) {
                console.error('Error fetching testimonials:', err);
            }
        };
        getData();
    }, []);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying || data.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, data.length]);

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

    const getVisibleTestimonials = () => {
        const prev = (currentIndex - 1 + data.length) % data.length;
        const next = (currentIndex + 1) % data.length;
        return [prev, currentIndex, next];
    };

    // 👇 Limit dots shown to 4 (current + neighbors)
    const getVisibleDots = (total: number, current: number, windowSize = 4) => {
        if (total <= windowSize) return Array.from({ length: total }, (_, i) => i);

        const half = Math.floor(windowSize / 2);
        let start = current - half;
        let end = current + half;

        if (start < 0) {
            start = 0;
            end = windowSize - 1;
        } else if (end >= total) {
            end = total - 1;
            start = total - windowSize;
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return (
        <div className="">
            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">
                    Our success lies in our learners' success stories
                </h1>
                <p className="text-muted">
                    Read the reviews by our students on how VCTC has helped them become solid developers.
                </p>
            </div>

            {/* Carousel */}
            <div
                className="position-relative mb-5"
                style={{ height: '300px' }}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <div className="d-flex justify-content-center align-items-center h-100 position-relative">
                    {data.length > 0 &&
                        getVisibleTestimonials().map((idx, position) => {
                            const item = data[idx];
                            const isCenter = position === 1;

                            return (
                                <div
                                    key={item?.id ?? idx}
                                    className="position-absolute text-center"
                                    style={{
                                        zIndex: isCenter ? 2 : 1,
                                        transform: isCenter
                                            ? 'scale(1) translateX(0)'
                                            : position === 0
                                                ? 'scale(0.9) translateX(-350px)'
                                                : 'scale(0.9) translateX(350px)',
                                        opacity: isCenter ? 1 : 0.4,
                                        filter: isCenter ? 'none' : 'blur(2px)',
                                        transition: 'all 0.7s ease-in-out',
                                        pointerEvents: isCenter ? 'auto' : 'none',
                                    }}
                                >
                                    <div
                                        className="card border-0 bg-white shadow p-4"
                                        style={{ width: '260px', minHeight: '260px' }}
                                    >
                                        <img
                                            src={
                                                item?.cms_image?.length > 5
                                                    ? `${process.env.react_app_base_url}/${item?.cms_image}`
                                                    : Logo
                                            }
                                            alt={item?.cms_title}
                                            className="rounded-circle mx-auto mb-3"
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <h5 className="fw-semibold">{item?.cms_title}</h5>
                                        <p className="text-muted small mb-1">{item?.cms_tags ?? 'Student'}</p>
                                        <span
                                            className="badge"
                                            style={{
                                                backgroundColor: '#FF6B35',
                                                color: '#fff',
                                            }}
                                        >
                                            {item?.cms_course_name}
                                        </span>
                                        <div
                                            className="mt-3 ql-editor text-muted small"
                                            style={{
                                                maxHeight: '70px',
                                                overflow: 'hidden',
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: item?.cms_description,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Controls */}
            {data.length > 0 && (
                <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
                    <button
                        onClick={goToPrevious}
                        className="btn btn-outline-secondary rounded-circle"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* 👇 Only 3–4 dots visible */}
                    <div className="d-flex gap-2">
                        {getVisibleDots(data.length, currentIndex, 4).map((idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className="rounded-pill border-0"
                                style={{
                                    width: idx === currentIndex ? '32px' : '12px',
                                    height: '8px',
                                    backgroundColor: idx === currentIndex ? '#FF6B35' : '#ccc',
                                    transition: 'all 0.3s',
                                }}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goToNext}
                        className="btn btn-outline-secondary rounded-circle"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Testimonials;
