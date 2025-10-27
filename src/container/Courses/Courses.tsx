import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Context/Theme/Context"
import Wrapper from "../Wrapper"
import BannerCourses from "../../images/BannerCourses.png"
import { useNavigate } from "react-router-dom"

const Courses = () => {
    const { coursesList } = useContext(ThemeContext)
    const navigate = useNavigate()
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <Wrapper>
            <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

                <div className="bannerInner" style={{ background: `url(${BannerCourses})` }}> </div>

                <div style={{
                    background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)',
                    minHeight: 'calc(100vh - 400px)',
                    padding: '60px 20px'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: '2rem'
                        }}>
                            {coursesList.map((item: any, index: any) => (
                                <div
                                    key={item.slug}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    style={{
                                        background: 'white',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        boxShadow: hoveredCard === index
                                            ? '0 20px 40px rgba(99, 102, 241, 0.25)'
                                            : '0 4px 6px rgba(0, 0, 0, 0.07)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        cursor: 'pointer',
                                        transform: hoveredCard === index ? 'translateY(-12px)' : 'translateY(0)',
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    {/* Image */}
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '220px',
                                        overflow: 'hidden'
                                    }}>
                                        <img style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                            transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                                        }} src={process.env.react_app_base_url + "/" + item?.image} alt="" title="" />

                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(139, 92, 246, 0.9))',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: hoveredCard === index ? 1 : 0,
                                            transition: 'opacity 0.4s ease'
                                        }}>
                                            <span style={{
                                                fontSize: '3rem',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                transform: hoveredCard === index ? 'translateX(0)' : 'translateX(-20px)',
                                                transition: 'transform 0.4s ease'
                                            }}>→</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div style={{
                                        padding: '1.5rem',
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <h4 style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 700,
                                            color: hoveredCard === index ? '#6366f1' : '#1e293b',
                                            marginBottom: '0.75rem',
                                            transition: 'color 0.3s ease'
                                        }}>
                                            {item.name}
                                        </h4>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: '#64748b',
                                            lineHeight: 1.6,
                                            marginBottom: '1.25rem',
                                            flex: 1
                                        }}>
                                            {item?.short_description}
                                        </p>

                                        {/* Meta */}
                                        <div style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            marginBottom: '1.25rem',
                                            paddingTop: '1rem',
                                            borderTop: '1px solid #e2e8f0'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{ fontSize: '1.25rem', color: '#6366f1' }}>⏱</span>
                                                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e293b' }}>
                                                    {item.duration}
                                                </span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{ fontSize: '1.25rem', color: '#6366f1' }}>₹</span>
                                                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e293b' }}>
                                                    {item.fees}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <button
                                            onClick={() => navigate(`/courses/${item?.slug}`)}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem',
                                                padding: '0.75rem 1.5rem',
                                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '8px',
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                transform: hoveredCard === index ? 'translateX(4px)' : 'translateX(0)'
                                            }}>
                                            Learn More
                                            <span style={{
                                                transition: 'transform 0.3s ease',
                                                transform: hoveredCard === index ? 'translateX(4px)' : 'translateX(0)'
                                            }}>→</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`
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

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
            `}</style>
            </div>
        </Wrapper>

    );
};

export default Courses;