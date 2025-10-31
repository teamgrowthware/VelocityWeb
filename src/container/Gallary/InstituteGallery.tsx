import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
}

const InstituteGallery: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    // ✅ Custom navigation button refs
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const galleryImages: GalleryImage[] = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
            title: "Campus Building",
            description:
                "Our modern campus facilities with state-of-the-art infrastructure",
            category: "Infrastructure",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200",
            title: "Library",
            description:
                "Extensive collection with digital resources and comfortable study areas",
            category: "Infrastructure",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200",
            title: "Classroom Learning",
            description:
                "Interactive and engaged learning environment with modern teaching aids",
            category: "Academics",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
            title: "Laboratory",
            description:
                "Advanced research and experimentation facilities for hands-on learning",
            category: "Research",
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
            title: "Workshops & Seminars",
            description: "Regular knowledge sharing sessions with industry experts",
            category: "Events",
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200",
            title: "Sports Complex",
            description:
                "Excellence in sports and fitness activities for overall development",
            category: "Sports",
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
            title: "Computer Lab",
            description:
                "High-tech computing facilities with latest software and hardware",
            category: "Infrastructure",
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200",
            title: "Auditorium",
            description:
                "Large venue for events, ceremonies, and cultural programs",
            category: "Infrastructure",
        },
    ];

    const handleImageClick = (image: GalleryImage): void => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleClose = (): void => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <>
            <section className=" bg-light">
                <div className="p-4 position-relative">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold text-dark mb-3">
                            Our Institute Gallery
                        </h2>
                        <p className="lead text-muted">
                            Explore our campus, facilities, and vibrant student life
                        </p>
                    </div>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={4}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 4 },
                        }}
                        onInit={(swiper) => {
                            // ✅ connect buttons after init
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        className="institute-gallery-swiper pb-5"
                    >
                        {galleryImages.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div
                                    className="card h-100 shadow-sm border-0 gallery-card"
                                    onClick={() => handleImageClick(image)}
                                    style={{ cursor: "pointer", overflow: "hidden" }}
                                >
                                    <div
                                        className="position-relative"
                                        style={{ height: "250px" }}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="card-img-top h-100 w-100"
                                            style={{
                                                objectFit: "cover",
                                                transition: "transform 0.3s ease",
                                            }}
                                            onMouseOver={(e) =>
                                                (e.currentTarget.style.transform = "scale(1.1)")
                                            }
                                            onMouseOut={(e) =>
                                                (e.currentTarget.style.transform = "scale(1)")
                                            }
                                        />
                                        <div className="position-absolute top-0 end-0 m-2">
                                            <span className="badge bg-primary">
                                                {image.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-body text-center">
                                        <h6 className="fw-bold mb-1">{image.title}</h6>
                                        <p className="text-muted small mb-0">
                                            {image.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* ✅ Custom Navigation Buttons */}
                    <button
                        ref={prevRef}
                        className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y shadow-sm"
                        style={{ width: "35px", height: "35px" }}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        ref={nextRef}
                        className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y shadow-sm"
                        style={{ width: "35px", height: "35px" }}
                        aria-label="Next"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </section>

            {/* Modal for Full View */}
            <Modal show={showModal} onHide={handleClose} centered size="xl">
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>{selectedImage?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    {selectedImage && (
                        <>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="img-fluid w-100"
                                style={{ maxHeight: "80vh", objectFit: "contain" }}
                            />
                            <div className="p-4">
                                <span className="badge bg-primary mb-2">
                                    {selectedImage.category}
                                </span>
                                <p className="mb-0 text-muted fs-5">
                                    {selectedImage.description}
                                </p>
                            </div>
                        </>
                    )}
                </Modal.Body>
            </Modal>

            {/* Custom CSS */}
            <style>{`
        .gallery-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        }

        .swiper-pagination-bullet {
          background: #000 !important;
          opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
          background: #0d6efd !important;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .gallery-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
        </>
    );
};

export default InstituteGallery;
