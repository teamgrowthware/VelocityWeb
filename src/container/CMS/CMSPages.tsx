import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../Context/Theme/Context';
import Wrapper from '../Wrapper';
import ReferrerForm from './ReferrerForm';
import BannerCourses from '../../images/BannerCourses.png';

const CMSPages = () => {
    const { pagesList } = useContext(ThemeContext);
    const [pageContent, setPageContent] = useState<any>({});
    const [isVisible, setIsVisible] = useState(false);
    const { slug } = useParams();

    useEffect(() => {
        const content = pagesList?.find((item: any) => item?.slug === slug);
        setPageContent(content);
        setTimeout(() => setIsVisible(true), 100);
    }, [pagesList, slug]);

    const bannerImage = pageContent?.cms_image
        ? `${process.env.REACT_APP_BASE_URL}/${pageContent.cms_image}`
        : BannerCourses;

    return (
        <Wrapper>
            <div className="bannerInner" style={{ background: `url(${pageContent?.cms_image ? process.env.react_app_base_url + "/" + pageContent?.cms_image : BannerCourses})` }}> </div>
            <div className="py-5 content-section position-relative overflow-hidden">
                <div className="container position-relative">
                    <div className="row g-4">
                        <div className={slug === 'refer-and-earn' ? "col-lg-7" : "col-lg-12"}>
                            <div className={`content-card bg-white rounded-4 shadow-lg p-4 p-md-5 ${isVisible ? 'visible' : ''}`}>
                                {pageContent?.title && (
                                    <div className="content-header mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="header-icon me-3">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <h1 className="fw-bold mb-0 text-primary">{pageContent.title}</h1>
                                        </div>
                                        <div className="title-underline"></div>
                                    </div>
                                )}

                                <div
                                    className="ql-editor cms-content"
                                    dangerouslySetInnerHTML={{
                                        __html: pageContent?.description,
                                    }}
                                ></div>
                            </div>
                        </div>
                        {slug === 'refer-and-earn' &&
                            <div className={slug === 'refer-and-earn' ? "col-lg-5" : "col-lg-112"}>
                                <ReferrerForm></ReferrerForm>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <style>{`

        /* Content Section */
        .content-section {
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
            }

        .content-card {
          border: 1px solid rgba(99, 102, 241, 0.1);
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .content-card.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .content-header {
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(99, 102, 241, 0.1);
        }

        .header-icon {
          width: 48px;
          height: 48px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .title-underline {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 2px;
          margin-top: 0.5rem;
        }

        /* CMS Content Styling */
        .cms-content {
          font-size: 1rem;
          line-height: 1.8;
          color: #4b5563;
        }

        .cms-content h1, .cms-content h2, .cms-content h3 {
          color: #1f2937;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .cms-content h1 { font-size: 2rem; }
        .cms-content h2 { font-size: 1.5rem; }
        .cms-content h3 { font-size: 1.25rem; }

        .cms-content p {
          margin-bottom: 1rem;
        }

        .cms-content ul, .cms-content ol {
          padding-left: 2rem;
          margin-bottom: 1.5rem;
        }

        .cms-content li {
          margin-bottom: 0.5rem;
        }

        .cms-content strong {
          color: #1f2937;
          font-weight: 600;
        }

        .cms-content a {
          color: #6366f1;
          text-decoration: none;
          border-bottom: 1px solid rgba(99, 102, 241, 0.3);
          transition: all 0.3s ease;
        }

        .cms-content a:hover {
          color: #4f46e5;
          border-bottom-color: #4f46e5;
        }
        /* Shadows */
        .shadow-lg {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
        }

        .rounded-4 {
          border-radius: 1rem !important;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .form-sticky {
            position: relative;
            top: 0;
          }

          .banner-hero {
            min-height: 280px;
            background-attachment: scroll !important;
          }

          .display-4 {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .content-card {
            padding: 1.5rem !important;
          }

          .cms-content {
            font-size: 0.95rem;
          }
        }
      `}</style>
        </Wrapper>
    );
};

export default CMSPages;