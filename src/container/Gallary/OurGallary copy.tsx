import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Modal } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

interface GalleryImage {
  _id: string;
  image: string;
  title: string;
  description: string;
}

const Ourgallary: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [index, setIndex] = useState<number>(0);

  // Fetch images from API
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/gallary');
        if (res.data.success) {
          setGalleryImages(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching gallery:', err);
      }
    };
    fetchGallery();
  }, []);

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
    <>
      <Header />
      <section className="bg-light">
        <div className="p-4">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-3">Our Institute Gallery</h2>
            <p className="lead text-muted">
              Explore our campus, facilities, and vibrant student life
            </p>
          </div>

          {galleryImages.length > 0 ? (
            <>
              <div className="gallery-slider-wrapper">
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  interval={3000}
                  pause="hover"
                  className="shadow-lg rounded"
                >
                  {galleryImages.map((image, idx) => (
                    <Carousel.Item key={image._id}>
                      <div
                        className="position-relative"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleImageClick(image)}
                      >
                        <img
                          className="d-block w-100 carousel-image"
                          src={image.image}
                          alt={image.title}
                          style={{
                            height: '600px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                          }}
                        />
                      </div>
                      <Carousel.Caption className="carousel-custom-caption">
                        <h3 className="fw-bold text-white mb-2">{image.title}</h3>
                        <p className="text-white fs-5">{image.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className="row g-3 mt-4">
                {galleryImages.map((image, idx) => (
                  <div key={image._id} className="col-lg-3 col-md-4 col-6">
                    <div
                      className={`thumbnail-wrapper ${index === idx ? 'active' : ''}`}
                      onClick={() => setIndex(idx)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={image.image}
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
            </>
          ) : (
            <div className="text-center">
              <p>Loading gallery images...</p>
            </div>
          )}
        </div>
      </section>

      <Modal show={showModal} onHide={handleClose} centered size="xl" className="gallery-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedImage && (
            <>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="img-fluid w-100"
                style={{ maxHeight: '80vh', objectFit: 'contain' }}
              />
              <div className="p-4">
                <p className="mb-0 text-muted fs-5">{selectedImage.description}</p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
      <Footer />
    </>
  );
};

export default Ourgallary;
