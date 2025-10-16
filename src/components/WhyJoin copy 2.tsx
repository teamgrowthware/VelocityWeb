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
  useEffect(() => {


    const getData = async () => {
      const testimonialsData = await getWhyUs()
      console.log("testimonialsData?", testimonialsData?.data?.data)
      setData(testimonialsData?.data?.data)
    }
    getData()
  }, [])
  return (
    <>
      <style>{`
        .why-join-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff5f0 0%, #ffffff 50%, #fef1f8 100%);
          padding: 80px 0;
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
        
        .feature-row {
          margin-bottom: 100px;
        }
        
        .feature-row:last-child {
          margin-bottom: 0;
        }
        .content-card {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .content-card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          transform: translateY(-5px);
        }
        
        .content-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }
        
        .description-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .description-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          font-size: 1.05rem;
          color: #475569;
          transition: color 0.2s ease;
        }
        
        .description-list li:hover {
          color: #1e293b;
        }
        
        .check-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          margin-top: 2px;
          flex-shrink: 0;
          color: #2563eb;
          transition: transform 0.2s ease;
        }
        
        .description-list li:hover .check-icon {
          transform: scale(1.2);
        }
        
        @media (max-width: 991.98px) {
          .section-title {
            font-size: 2.5rem;
          }
         .feature-row {
            margin-bottom: 60px;
          }
        }
        
        @media (max-width: 767.98px) {
          .section-title {
            font-size: 2rem;
          }
          .content-card {
            padding: 2rem;
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

          {/* Features Section */}
          {data?.map((item: any, index: any) => {

            const isReverse = index % 2 !== 0;
            const gradientStyle = colorGradients[index % colorGradients.length];

            return (
              <div key={item?.cms_id || index} className="feature-row">
                <div className={`row align-items-center ${isReverse ? 'flex-lg-row-reverse' : ''}`}>
                  {/* Icon Side */}
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <div className="d-flex justify-content-center">
                      <img className="w-25" src={item?.cms_image?.length > 5 ? process.env.react_app_base_url + "/" + item?.cms_image : Img1} alt="" title="" />

                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="col-12 col-lg-6">
                    <div className="content-card">
                      <h2 className="content-title">{item.cms_title}</h2>
                      <div
                        className="ql-editor"
                        dangerouslySetInnerHTML={{ __html: item?.cms_description }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
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
      `}</style>
    </>
  )
}
export default WhyJoin