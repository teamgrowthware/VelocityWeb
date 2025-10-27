import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

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

    const galleryImages: GalleryImage[] = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
            title: 'Campus Building',
            description: 'Our modern campus facilities with state-of-the-art infrastructure',
            category: 'Infrastructure'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
            title: 'Library',
            description: 'Extensive collection with digital resources',
            category: 'Infrastructure'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
            title: 'Classroom Learning',
            description: 'Interactive and engaged learning environment',
            category: 'Academics'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
            title: 'Laboratory',
            description: 'Advanced research and experimentation facilities',
            category: 'Research'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
            title: 'Workshops & Seminars',
            description: 'Regular knowledge sharing sessions',
            category: 'Events'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800',
            title: 'Sports Complex',
            description: 'Excellence in sports and fitness activities',
            category: 'Sports'
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
            title: 'Computer Lab',
            description: 'High-tech computing facilities for students',
            category: 'Infrastructure'
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
            title: 'Auditorium',
            description: 'Large venue for events and ceremonies',
            category: 'Infrastructure'
        }
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
            <section className="py-5 bg-light">
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold text-dark mb-3">Our Institute Gallery</h2>
                        <p className="lead text-muted">
                            Explore our campus, facilities, and vibrant student life
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="row g-4">
                        {galleryImages.map((image) => (
                            <div key={image.id} className="col-lg-3 col-md-4 col-sm-6">
                                <div
                                    className="card h-100 shadow-sm border-0 gallery-card"
                                    onClick={() => handleImageClick(image)}
                                    style={{ cursor: 'pointer', overflow: 'hidden' }}
                                >
                                    <div className="position-relative" style={{ height: '250px' }}>
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="card-img-top h-100 w-100"
                                            style={{
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        />
                                        <div
                                            className="position-absolute top-0 end-0 m-2"
                                        >
                                            <span className="badge bg-primary">{image.category}</span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{image.title}</h5>
                                        <p className="card-text text-muted small">{image.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for Image Preview */}
            <Modal
                show={showModal}
                onHide={handleClose}
                centered
                size="lg"
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
                                style={{ maxHeight: '70vh', objectFit: 'contain' }}
                            />
                            <div className="p-4">
                                <span className="badge bg-primary mb-2">{selectedImage.category}</span>
                                <p className="mb-0 text-muted">{selectedImage.description}</p>
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
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
        }
        
        .gallery-modal .modal-content {
          border-radius: 15px;
          overflow: hidden;
        }
        
        .card {
          border-radius: 12px;
        }
      `}</style>
        </>
    );
};

export default InstituteGallery;