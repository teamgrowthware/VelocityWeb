import { useEffect, useState } from "react"
import Img1 from "../images/why1.png"
import { getWhyUs } from "../servies/services"
// import './WhyJoin.css'
// Import Check icon from a library like react-icons if available, or just use a simple div/span with a checkmark
// For this example, I'll use a simple SVG or a stylized character in the CSS
// import { Check } from 'react-feather'; // Example using react-feather

// Define the structure for your data items
interface WhyUsItem {
  cms_id: string | number;
  cms_title: string;
  cms_image: string;
  cms_description: string;
}

const colorGradients = [
  "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", // orange
  "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", // blue
  "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)", // teal
  "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)", // yellow
  "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)", // purple
  "linear-gradient(135deg, #ec4899 0%, #db2777 100%)", // pink
];



const WhyJoin = () => {
  const [data, setData] = useState<WhyUsItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      const testimonialsData = await getWhyUs()
      setData(testimonialsData?.data?.data || [])
    }
    getData()
  }, [])

  // Determines the color gradient for the sticky card's border/accent
  const getBorderColor = (index: number) => {
    return colorGradients[index % colorGradients.length];
  };

  return (
    <>
      <style>{`
        .why-join-section {
          background: linear-gradient(135deg, #fff5f0 0%, #ffffff 50%, #fef1f8 100%);
          padding: 80px 0;
        }
        .section-header {
          text-align: center;
          margin-bottom:375px;
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
       
        .sticky-container {
          position: relative;
          paddingBottom: '100px'
        }
       
        /* Adjust this value to control the "height/spacing between cards"
          - Higher value means more space/scroll before the next card sticks. */
    .sticky-item-wrapper {
  min-height: 100vh;
  margin-top: -40vh; /* overlap effect */
  position: relative;
}

.sticky-card {
  position: sticky;
  top: 0;
  z-index: 1;
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border-width: 4px;
  border-style: solid;
  border-color: transparent;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.sticky-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}
 
        /* Responsive adjustments for the sticky effect */
        @media (max-width: 991.98px) {
          .sticky-item-wrapper {
            min-height: auto;
            margin-bottom: 40px;
          }
          .sticky-card {
            position: static;
            top: auto;
            margin: 0 auto;
            display: block;
            max-width: 100%;
          }
          .sticky-card img {
            max-width: 50%;
            margin-bottom: 20px;
          }
        }
 
        /* ========================================================= */
        /* --- Content Styles --- */
        /* ========================================================= */
       
        .content-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }
       
        .feature-image-wrapper {
          flex-shrink: 0;
          width: 45%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
       
        .feature-image-wrapper img {
          max-width: 40%;
          height: auto;
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          border-radius: 12px;
        }
       
        .sticky-card:hover .feature-image-wrapper img {
          transform: scale(1.05);
        }
       
        .feature-content-side {
          width: 55%;
          padding-left: 2rem;
        }
 
        /* RTL/Reverse layout styles */
        .reverse .feature-content-side {
          padding-left: 0;
          padding-right: 2rem;
        }
       
        .reverse {
          flex-direction: row-reverse;
        }
 
        /* Style the dynamically loaded content (using ql-editor) */
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
      `}</style>

      <div className="why-join-section py-6 py-md-7">
        <div className="container">
          {/* Header Section */}
          <div className="section-header mb-6">
            <h1 className="section-title">
              Why to join <span className="highlight">Velocity?</span>
            </h1>
            <p className="section-subtitle">
              Discover the features that make Velocity the perfect choice for your career growth
            </p>
          </div>

          {/* Sticky Scroll Container */}
          <div className="sticky-container">
            {data?.map((item: WhyUsItem, index: number) => {

              const isReverse = index % 2 !== 0;
              const zIndex = index + 1;

              return (
                <div
                  key={item?.cms_id || index}
                  className="sticky-item-wrapper"
                >

                  <div
                    className={`sticky-card ${isReverse ? 'reverse' : ''}`}
                    style={{
                      zIndex: zIndex,
                      // borderImage: `${getBorderColor(index)} 1`,
                      borderImageSlice: 1,
                    }}

                  >
                    {/* Image Side */}
                    <div className="feature-image-wrapper">
                      <img
                        src={item?.cms_image?.length > 5 ? process.env.react_app_base_url + "/" + item?.cms_image : Img1}
                        alt={item.cms_title}
                        title={item.cms_title}
                      />
                    </div>

                    {/* Content Side */}
                    <div className="feature-content-side">
                      <h2 className="content-title">{item.cms_title}</h2>
                      <div
                        className="ql-editor"
                        dangerouslySetInnerHTML={{ __html: item?.cms_description }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyJoin
