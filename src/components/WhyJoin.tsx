import { useEffect, useState } from "react"
import Img1 from "../images/why1.png"
import { getWhyUs } from "../servies/services"

const WhyJoin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    const getData = async () => {
      setLoading(true);
      const testimonialsData = await getWhyUs()
      console.log("testimonialsData?", testimonialsData?.data?.data)
      setData(testimonialsData?.data?.data)
      setLoading(false);
    }
    getData()

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatImage {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .why-join-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff5f0 0%, #ffffff 50%, #fef1f8 100%);
          padding-top: 40px;
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        .why-join-section.loaded {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .section-header {
          text-align: center;
          margin-bottom: 20px;
          opacity: 0;
        }

        .section-header.loaded {
          animation: fadeInDown 1s ease-out forwards;
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

        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          padding: 20px 0;
          opacity: 0;
        }

        .grid-container.loaded {
          animation: fadeInScale 0.8s ease-out 0.3s forwards;
        }

        /* Loading Skeleton Styles */
        .skeleton-card {
          background: white;
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          height: 100%;
          opacity: 0;
          animation: scaleIn 0.5s ease-out forwards;
        }

        .skeleton-card:nth-child(1) { animation-delay: 0.1s; }
        .skeleton-card:nth-child(2) { animation-delay: 0.2s; }
        .skeleton-card:nth-child(3) { animation-delay: 0.3s; }
        .skeleton-card:nth-child(4) { animation-delay: 0.4s; }
        .skeleton-card:nth-child(5) { animation-delay: 0.5s; }
        .skeleton-card:nth-child(6) { animation-delay: 0.6s; }

        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
          border-radius: 8px;
        }

        .skeleton-image {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          border-radius: 16px;
        }

        .skeleton-title {
          height: 24px;
          width: 70%;
          margin-bottom: 1rem;
        }

        .skeleton-line {
          height: 12px;
          margin-bottom: 0.75rem;
          border-radius: 4px;
        }

        .skeleton-line:nth-child(1) { width: 100%; }
        .skeleton-line:nth-child(2) { width: 90%; }
        .skeleton-line:nth-child(3) { width: 80%; }

        /* Feature Card Styles */
        .feature-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }
        .feature-card:nth-child(5) { animation-delay: 0.5s; }
        .feature-card:nth-child(6) { animation-delay: 0.6s; }

        .content-card {
          background: white;
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .content-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-gradient);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .content-card:hover::before {
          transform: scaleX(1);
        }

        .content-card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          transform: translateY(-10px);
        }

        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .content-card:hover .image-container {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
        }

        .feature-image {
          width: 80px;
          height: 80px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .content-card:hover .feature-image {
          animation: floatImage 2s ease-in-out infinite;
        }

        .content-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .content-card:hover .content-title {
          color: #2563eb;
        }

        .ql-editor {
          flex: 1;
        }

        .ql-editor ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ql-editor li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: #475569;
          transition: all 0.2s ease;
          padding-left: 0;
        }

        .ql-editor li:hover {
          color: #1e293b;
          padding-left: 5px;
        }

        .ql-editor li::before {
          content: "✓";
          width: 20px;
          height: 20px;
          margin-right: 10px;
          margin-top: 2px;
          flex-shrink: 0;
          color: #2563eb;
          font-weight: bold;
          font-size: 1rem;
          transition: transform 0.2s ease;
        }

        .ql-editor li:hover::before {
          transform: scale(1.2);
        }

        .ql-editor p {
          margin-bottom: 0.75rem;
          color: #475569;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @media (max-width: 1199.98px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        @media (max-width: 767.98px) {
          .section-title {
            font-size: 2rem;
          }

          .grid-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .content-card {
            padding: 1.5rem;
          }

          .feature-image {
            width: 60px;
            height: 60px;
          }

          .content-title {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <div className={`why-join-section ${pageLoaded ? 'loaded' : ''}`}>
        <div className="container">
          <div className={`section-header ${pageLoaded ? 'loaded' : ''}`}>
            <h1 className="section-title">
              Why to join <span className="highlight">Velocity?</span>
            </h1>
            <p className="section-subtitle">
              Discover the features that make Velocity the perfect choice for your career growth
            </p>
          </div>

          {/* Grid Features Section */}
          <div className={`grid-container ${pageLoaded ? 'loaded' : ''}`}>
            {loading ? (
              [...Array(6)].map((_, index) => (
                <div key={index} className="skeleton-card">
                  <div className="skeleton skeleton-image"></div>
                  <div className="skeleton skeleton-title"></div>
                  <div className="skeleton-lines">
                    <div className="skeleton skeleton-line"></div>
                    <div className="skeleton skeleton-line"></div>
                    <div className="skeleton skeleton-line"></div>
                  </div>
                </div>
              ))
            ) : (
              data?.map((item: any, index: any) => {
                return (
                  <div key={item?.cms_id || index} className="feature-card">
                    <div className="content-card">
                      <div className="image-container">
                        <img
                          className="feature-image"
                          src={item?.cms_image?.length > 5 ? process.env.react_app_base_url + "/" + item?.cms_image : Img1}
                          alt={item.cms_title || "Feature"}
                          title={item.cms_title || ""}
                        />
                      </div>

                      <h2 className="content-title">{item.cms_title}</h2>
                      <div
                        className="ql-editor"
                        dangerouslySetInnerHTML={{ __html: item?.cms_description }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyJoin