import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    text: string;
    badge: string;
    badgeColor: string;
}

const Testimonials = ({ slice }: { slice?: any }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Prateek Khadson",
            role: "React Dev",
            image: "https://ui-avatars.com/api/?name=Prateek+Khadson&background=FF6B35&color=fff&size=200",
            text: "",
            badge: "React Dev",
            badgeColor: "#FF6B35"
        },
        {
            id: 2,
            name: "Vikas Koli",
            role: "Testing",
            image: "https://ui-avatars.com/api/?name=Vikas+Koli&background=4A90E2&color=fff&size=200",
            text: "",
            badge: "Testing",
            badgeColor: "#FF6B35"
        },
        {
            id: 3,
            name: "Omkar",
            role: "None",
            image: "https://ui-avatars.com/api/?name=Omkar&background=8B5CF6&color=fff&size=200",
            text: "",
            badge: "None",
            badgeColor: "#FF6B35"
        },
        {
            id: 4,
            name: "Sarah Johnson",
            role: "Full Stack Dev",
            image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=10B981&color=fff&size=200",
            text: "",
            badge: "Full Stack Dev",
            badgeColor: "#10B981"
        },
        {
            id: 5,
            name: "Rahul Sharma",
            role: "Backend Dev",
            image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=F59E0B&color=fff&size=200",
            text: "",
            badge: "Backend Dev",
            badgeColor: "#F59E0B"
        },
        {
            id: 6,
            name: "Priya Patel",
            role: "Frontend Dev",
            image: "https://ui-avatars.com/api/?name=Priya+Patel&background=EC4899&color=fff&size=200",
            text: "",
            badge: "Frontend Dev",
            badgeColor: "#EC4899"
        }
    ];

    // Auto-play effect
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const getVisibleTestimonials = () => {
        const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
        const next = (currentIndex + 1) % testimonials.length;
        return [prev, currentIndex, next];
    };

    return (
        <div className="container py-5">
            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Our success lies in our learners' success stories</h1>
                <p className="text-muted">See the amazing people who trusted VCTC and launched their careers.</p>
            </div>

            {/* Carousel Section */}
            <div className="position-relative mb-5" style={{ height: '300px' }} onMouseLeave={() => setIsAutoPlaying(true)}>
                <div className="d-flex justify-content-center align-items-center h-100 position-relative">
                    {getVisibleTestimonials().map((idx, position) => {
                        const testimonial = testimonials[idx];
                        const isCenter = position === 1;

                        return (
                            <div
                                key={testimonial.id}
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
                                <div className="card border-0 bg-white shadow p-4" style={{ width: '250px' }}>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-circle mx-auto mb-3"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                    <h5 className="fw-semibold">{testimonial.name}</h5>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
                <button
                    onClick={goToPrevious}
                    className="btn btn-outline-secondary rounded-circle"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="d-flex gap-2">
                    {testimonials.map((_, idx) => (
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
        </div>
    );
};

export default Testimonials;
