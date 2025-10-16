import { useEffect, useState } from "react"
import Img1 from "../images/why1.png"
import { getWhyUs } from "../servies/services"

// Color gradient mapping
const colorGradients = [
  "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", // orange
  "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", // blue
  "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)", // teal
  "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)", // yellow
  "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)", // purple
  "linear-gradient(135deg, #ec4899 0%, #db2777 100%)", // pink
];

const WhyJoin = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const testimonialsData = await getWhyUs()
      console.log("testimonialsData?", testimonialsData?.data?.data)
      setData(testimonialsData?.data?.data)
    }
    getData()
  }, [])

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handleTouchStart = (e: any) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < data.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    if (currentIndex < data.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <>
      <style>{`
        .why-join-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff5f0 0%, #ffffff 50%, #fef1f8 100%);
          padding: 80px 0;
          overflow: hidden;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-title {
          font-size: 3.5rem;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 1rem;
        }        
        
        .section-title .highlight {
          color: #2563eb;
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }        
        
        .section-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .slider-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .slider-wrapper {
          overflow: hidden;
          position: relative;
          touch-action: pan-y;
          cursor: grab;
        }
        
        .slider-wrapper:active {
          cursor: grabbing;
        }
        
        .slider-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide {
          min-width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
        }
        
        .feature-card {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          animation: slideIn 0.5s ease;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .feature-card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          transform: translateY(-5px);
        }
        
        .card-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .card-image {
          width: 150px;
          height: 150px;
          object-fit: contain;
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .content-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .card-content {
          text-align: left;
        }
        
        /* Navigation Controls */
        .navigation-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 40px;
        }
        
        .nav-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          border: 2px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .nav-button:hover:not(:disabled) {
          background: #2563eb;
          border-color: #2563eb;
          color: white;
          transform: scale(1.1);
        }
        
        .nav-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .nav-button svg {
          width: 24px;
          height: 24px;
        }
        
        /* Dots Indicator */
        .dots-container {
          display: flex;
          gap: 10px;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background: #2563eb;
          transform: scale(1.2);
        }
        
        .dot:hover {
          background: #64748b;
          transform: scale(1.1);
        }
        
        /* Progress Indicator */
        .progress-indicator {
          text-align: center;
          margin-top: 20px;
          color: #64748b;
          font-weight: 500;
          font-size: 1.1rem;
        }
        
        /* Mobile Swipe Hint */
        .swipe-hint {
          text-align: center;
          color: #94a3b8;
          font-size: 0.9rem;
          margin-top: 15px;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        
        /* Style the dynamically loaded content */
        .ql-editor ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .ql-editor li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          font-size: 1.05rem;
          color: #475569;
          transition: color 0.2s ease;
        }
        
        .ql-editor li:hover {
          color: #1e293b;
        }
        
        .ql-editor li::before {
          content: "✓";
          width: 24px;
          height: 24px;
          margin-right: 12px;
          margin-top: 2px;
          flex-shrink: 0;
          color: #2563eb;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .ql-editor p {
          margin-bottom: 1rem;
          color: #475569;
          line-height: 1.6;
        }
        
        @media (max-width: 991.98px) {
          .section-title {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 767.98px) {
          .section-title {
            font-size: 2rem;
          }
          .feature-card {
            padding: 2rem;
          }
          .card-image {
            width: 120px;
            height: 120px;
          }
          .content-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="why-join-section">
        <div className="container">
          {/* Header Section */}
          <div className="section-header">
            <h1 className="section-title">
              Why to join <span className="highlight">Velocity?</span>
            </h1>
            <p className="section-subtitle">
              Discover the features that make Velocity the perfect choice for your career growth
            </p>
          </div>

          {/* Slider Container */}
          <div className="slider-container">
            <div
              className="slider-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="slider-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {data?.map((item: any, index: number) => {
                  const gradientStyle = colorGradients[index % colorGradients.length];

                  return (
                    <div key={item?.cms_id || index} className="slide">
                      <div className="feature-card">
                        {/* Image */}
                        <div className="card-image-container">
                          <img
                            className="card-image"
                            src={item?.cms_image?.length > 5
                              ? process.env.REACT_APP_BASE_URL + "/" + item?.cms_image
                              : Img1
                            }
                            alt={item.cms_title || "Feature"}
                            title={item.cms_title || "Feature"}
                          />
                        </div>

                        {/* Content */}
                        <h2 className="content-title">{item.cms_title}</h2>
                        <div
                          className="ql-editor card-content"
                          dangerouslySetInnerHTML={{ __html: item?.cms_description }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            {data.length > 0 && (
              <>
                <div className="navigation-controls">
                  {/* Previous Button */}
                  <button
                    className="nav-button"
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    aria-label="Previous slide"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Dots Indicator */}
                  <div className="dots-container">
                    {data.map((_: any, index: number) => (
                      <div
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    className="nav-button"
                    onClick={nextSlide}
                    disabled={currentIndex === data.length - 1}
                    aria-label="Next slide"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Progress Indicator */}
                <div className="progress-indicator">
                  {currentIndex + 1} / {data.length}
                </div>

                {/* Swipe Hint for Mobile */}
                <div className="swipe-hint">
                  👆 Swipe or use arrows to navigate
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyJoin