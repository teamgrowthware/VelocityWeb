import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import group1570 from "../../images/HomeSlider/Group 1570.png";
import group5836 from "../../images/HomeSlider/Group 5836.png";
import group5828 from "../../images/HomeSlider/Group 5828.png";
import icon from "../../images/HomeSlider/Icon.png";
import group1580 from "../../images/HomeSlider/Group 1580.png";
import group1580_1 from "../../images/HomeSlider/Group 1580 (1).png";
import "./HomeSlider.css";

const HomeSlider: React.FC = () => {
    return (
        <section className="hero-section position-relative overflow-hidden py-5">
            <Row className="align-items-center p-4">
                {/* Left Content */}
                <Col lg={6} md={12} className="text-lg-start text-center mb-5 mb-lg-0">
                    <h1 className="fw-bold  fs-1 mb-4 hero-heading">
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
                        <img
                            src={group1570}
                            alt="Main Hero"
                            className=" main-image"
                        />

                        {/* Floating Elements */}
                        <img src={group1580} alt="Review" className="floating review" />
                        <img
                            src={group1580_1}
                            alt="Review 2"
                            className="floating review-2"
                        />
                        <img src={group5836} alt="Project Stats" className="floating project" />
                        <img src={group5828} alt="Monthly Visitor" className="floating visitor" />
                        <img src={icon} alt="Verified Icon" className="floating verified" />
                        {/* <img src={group1570} alt="Pattern" className="floating pattern" /> */}
                        {/* <img src={group} alt="Dash Pattern" className="floating dash" /> */}
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default HomeSlider;
