import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Modal } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import img1 from '../../images/ourGallary/img1.jpeg'
import img2 from '../../images/ourGallary/img2.jpeg'
import img3 from '../../images/ourGallary/img3.jpeg'
import img4 from '../../images/ourGallary/img4.jpeg'


interface GalleryImage {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
}

const Ourgallary: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [index, setIndex] = useState<number>(0);

    const galleryImages: GalleryImage[] = [
        // {
        //     id: 1,
        //     src: img1,
        //     title: 'Campus Building',
        //     description: '',
        //     category: 'Infrastructure'
        // },
        {
            id: 1,
            src: img2,
            title: 'Students',
            description: '',
            category: 'Infrastructure'
        },
        {
            id: 1,
            src: img3,
            title: 'Campus Building',
            description: '',
            category: 'Infrastructure'
        },
        {
            id: 1,
            src: img4,
            title: 'Computer Lab',
            description: 'High-tech computing facilities with latest software and hardware',
            category: 'Infrastructure'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200',
            title: 'Library',
            description: 'Extensive collection with digital resources and comfortable study areas',
            category: 'Infrastructure'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200',
            title: 'Classroom Learning',
            description: 'Interactive and engaged learning environment with modern teaching aids',
            category: 'Academics'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200',
            title: 'Laboratory',
            description: 'Advanced research and experimentation facilities for hands-on learning',
            category: 'Research'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200',
            title: 'Workshops & Seminars',
            description: 'Regular knowledge sharing sessions with industry experts',
            category: 'Events'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200',
            title: 'Sports Complex',
            description: 'Excellence in sports and fitness activities for overall development',
            category: 'Sports'
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200',
            title: 'Auditorium',
            description: 'Large venue for events, ceremonies, and cultural programs',
            category: 'Infrastructure'
        }
    ];

    const handleSelect = (selectedIndex: number): void => {
        setIndex(selectedIndex);
    };

    const handleImageClick = (image: GalleryImage): void => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleClose = (): void => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <><Header />
            <section className="pt-2 bg-light">
                <div className="p-2">
                    {/* Header */}
                    <div className="text-center mb-2">
                        <h2 className="fs-1 fw-bold text-dark mb-3">Our Institute Gallery</h2>
                        <p className="lead text-muted m-0" >
                            Explore our campus, facilities, and vibrant student life
                        </p>
                    </div>

                    {/* Main Slider */}
                    <div className="gallery-slider-wrapper">
                        <Carousel
                            activeIndex={index}
                            onSelect={handleSelect}
                            interval={3000}
                            pause="hover"
                            className="shadow-lg rounded"
                        >
                            {galleryImages.map((image) => (
                                <Carousel.Item key={image.id}>
                                    <div
                                        className="position-relative"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleImageClick(image)}
                                    >
                                        <img
                                            className="d-block w-100 carousel-image"
                                            src={image.src}
                                            alt={image.title}
                                            style={{
                                                height: '500px',
                                                objectFit: 'cover',
                                                borderRadius: '10px'
                                            }}
                                        />
                                        <div className="carousel-overlay">
                                            <span className="badge bg-primary mb-2 fs-6">{image.category}</span>
                                        </div>
                                    </div>
                                    <Carousel.Caption className="carousel-custom-caption">
                                        <h3 className="fw-bold text-white mb-2">{image.title}</h3>
                                        <p className="text-white fs-5">{image.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="row g-3 mt-4">
                        {galleryImages.map((image, idx) => (
                            <div key={image.id} className="col-lg-3 col-md-4 col-6">
                                <div
                                    className={`thumbnail-wrapper ${index === idx ? 'active' : ''}`}
                                    onClick={() => setIndex(idx)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="img-fluid rounded shadow-sm"
                                        style={{
                                            height: '120px',
                                            width: '100%',
                                            objectFit: 'cover',
                                            border: index === idx ? '3px solid #0d6efd' : '3px solid transparent',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                    <div className="thumbnail-title mt-2 text-center">
                                        <small className="fw-semibold">{image.title}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for Full View */}
            <Modal
                show={showModal}
                onHide={handleClose}
                centered
                size="xl"
                className="gallery-modal"
            >
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
                                style={{ maxHeight: '80vh', objectFit: 'contain' }}
                            />
                            <div className="p-4">
                                <span className="badge bg-primary mb-2">{selectedImage.category}</span>
                                <p className="mb-0 text-muted fs-5">{selectedImage.description}</p>
                            </div>
                        </>
                    )}
                </Modal.Body>
            </Modal>

            <Footer />
            {/* Custom CSS */}
            <style>{`
        .gallery-slider-wrapper {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
        }

        .carousel-image {
          transition: transform 0.3s ease;
        }

        .carousel-item:hover .carousel-image {
          transform: scale(1.05);
        }

        .carousel-overlay {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
        }

        .carousel-custom-caption {
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 20px 20px;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          width: 3rem;
          height: 3rem;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
        }

        .thumbnail-wrapper {
          transition: transform 0.3s ease;
        }

        .thumbnail-wrapper:hover {
          transform: translateY(-5px);
        }

        .thumbnail-wrapper.active img {
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.4);
        }

        .gallery-modal .modal-content {
          border-radius: 15px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .carousel-image {
            height: 400px !important;
          }
          
          .carousel-custom-caption h3 {
            font-size: 1.2rem;
          }
          
          .carousel-custom-caption p {
            font-size: 0.9rem;
          }
        }
      `}</style>
        </>
    );
};

export default Ourgallary;