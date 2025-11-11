import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { GraduationCap, Building2, Users, BookOpen, University } from "lucide-react";
import group1570 from "../../images/HomeSlider/Group 1570.png";
import group5836 from "../../images/HomeSlider/Group 5836.png";
import group5828 from "../../images/HomeSlider/Group 5828.png";
import icon from "../../images/HomeSlider/Icon.png";
import group1580 from "../../images/HomeSlider/Group 1580.png";
import group1580_1 from "../../images/HomeSlider/Group 1580 (1).png";
import "./HomeSlider.css";
import { useNavigate } from "react-router-dom";

const HomeSlider: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="position-relative overflow-hidden">
            <Container>
                <Row className="align-items-center p-4">
                    {/* Left Content */}
                    <Col lg={6} md={12} className="text-lg-start text-center mb-5 mb-lg-0">
                        <h1 className="fw-bold fs-1 mb-4 hero-heading">
                            Upgrade Your Skills. <br />
                            Accelerate Your <br />
                            Career with <span className="text-primary">Velocity</span>
                        </h1>
                        <p className="text-secondary fs-9 mb-4 hero-text">
                            Master the most in-demand IT courses, from coding to cloud, and
                            accelerate your journey toward a high-paying tech career.
                        </p>
                        <div className="d-lg-flex justify-content-lg-start justify-content-center">
                            <Button
                                onClick={() => navigate("/courses")}
                                variant="primary"
                                size="lg"
                                className="px-4 py-2 fw-semibold rounded-3"
                            >
                                Explore Courses
                            </Button>
                        </div>
                    </Col>

                    {/* Right Image Section */}
                    <Col lg={6} md={12} className="text-center position-relative">
                        <div className="image-wrapper position-relative d-inline-block">
                            <img src={group1570} alt="Main Hero" className="main-image" />
                            {/* Floating Elements */}
                            <img src={group1580} alt="Review" className="floating review" />
                            <img src={group1580_1} alt="Review 2" className="floating review-2" />
                            <img src={group5836} alt="Project Stats" className="floating project" />
                            <img src={group5828} alt="Monthly Visitor" className="floating visitor" />
                            <img src={icon} alt="Verified Icon" className="floating verified" />
                        </div>
                    </Col>
                </Row>

                {/* ✅ Stats Section with Lucide Icons */}
               <Row className="text-center py-5 gy-4 justify-content-center align-items-center">
  <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
    <GraduationCap className="text-primary mb-2" size={26} />
    <div><strong>1,00,000+</strong> Students Trained</div>
  </Col>

  <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
    <Building2 className="text-primary mb-2" size={26} />
    <div><strong>5+</strong> Centers</div>
  </Col>

  <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
    <Users className="text-primary mb-2" size={26} />
    <div><strong>50+</strong> Expert Instructors</div>
  </Col>

  <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
    <BookOpen className="text-primary mb-2" size={26} />
    <div><strong>15+</strong> Courses</div>
  </Col>

  <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
    <University className="text-primary mb-2" size={26} />
    <div><strong>50+</strong> Academic Associations</div>
  </Col>
</Row>

            </Container>
         
        </section>

    );
};

export default HomeSlider;
