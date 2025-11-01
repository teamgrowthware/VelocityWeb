import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/Theme/Context";
import Wrapper from "../Wrapper";
import BannerCourses from "../../images/BannerCourses.png";
import { getCenters } from "../../servies/services";
import Roadmap from "./RoadMap";

const AboutUs = () => {
  const { pagesList } = useContext(ThemeContext);
  const [pageContent, setPageContent] = useState<any>({});
  const [centerData, setCenterData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCenters();
      setCenterData(data?.data?.data);
    };
    getData();
  }, []);

  useEffect(() => {
    setPageContent(pagesList?.find((item: any) => item?.slug === "about-us"));
  }, [pagesList]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />
      <style>
        {`
          /* Fade-in animation */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .blue-theme-h2 {
            color: #0288D1;
            font-weight: 700;
            margin-bottom: 1.5rem;
            animation: fadeIn 0.8s ease-out;
          }

          .blue-theme-h4 {
            color: #03A9F4;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .bannerInner {
            width: 100%;
            height: 400px;
            background-size: cover !important;
            background-position: center top  !important;
             background-repeat: no-repeat !important;
            background-color: #81D4FA;
            border-radius: 0 0 10px 10px;
            animation: fadeIn 1s ease-out;
          }

          .eventsUpcomingBatchWrapper {
            padding: 3rem 0;
            background-color: #E3F2FD;
          }

          .eventWrapper {
            padding: 2rem;
            text-align: center;
            animation: fadeIn 1s ease-out 0.2s backwards;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            margin: 0 auto;
          }

          .eventWrapper p {
            color: #4A5568;
            line-height: 1.8;
          }

          .terms_conditions {
            padding-top: 3rem;
          }

          .inner-card {
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: 12px;
            background-color: #FFFFFF;
            box-shadow: 0 4px 20px rgba(3, 169, 244, 0.1);
            transition: all 0.3s ease;
            animation: fadeIn 1s ease-out 0.4s backwards;
            height: 100%;
          }

          .inner-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 30px rgba(3, 169, 244, 0.3);
          }

          .inner-card span.material-symbols-outlined {
            font-size: 3rem;
            color: #03A9F4;
            margin-bottom: 1rem;
            transition: transform 0.3s ease;
          }

          .inner-card:hover span.material-symbols-outlined {
            transform: rotate(-5deg) scale(1.1);
          }

          @media (max-width: 768px) {
            .bannerInner {
              height: 250px;
            }
          }
        `}
      </style>

      <Wrapper>
        {/* Banner */}
        {/* <div
          className="bannerInner"
          style={{
            backgroundImage: `url(${pageContent?.image
              ? process.env.react_app_base_url + "/" + pageContent?.image
              : BannerCourses
              })`,
          }}
        ></div> */}
        <Roadmap />

        {/* About Section */}
        <section className="eventsUpcomingBatchWrapper" id="upcoming_batches">
          <div className="">
            <div className="row justify-content-center">
              <div className="">
                <div className="eventWrapper">
                  <h2 className="blue-theme-h2 display-6">About Velocity Pune</h2>
                  <p className="fs-5">
                    Velocity Pune is a premier IT training institute dedicated to
                    empowering individuals with the skills and knowledge required to
                    excel in the dynamic field of information technology. Our
                    comprehensive curriculum, experienced faculty, and state-of-the-art
                    facilities ensure that students receive industry-relevant
                    education, preparing them for successful careers in the IT sector.
                    Offering a diverse range of courses, from foundational programming
                    languages to advanced technologies, we cater to both beginners and
                    professionals seeking to enhance their expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="terms_conditions">
              <div className="row gy-4">
                {/* Mission */}
                <div className="col-md-6">
                  <div className="inner-card text-center h-100">
                    <span className="material-symbols-outlined">
                      rocket_launch
                    </span>
                    <h4 className="blue-theme-h4 h3">Our Mission</h4>
                    <p className="mt-3">
                      Our mission is to deliver world-class IT education by offering
                      cutting-edge, industry-aligned training programs that combine
                      technical expertise with practical learning. We strive to inspire
                      creativity, nurture innovation, and develop holistic skill sets
                      that enable students to thrive in the competitive IT landscape.
                      Through a commitment to lifelong learning and inclusivity, we aim
                      to bridge the skills gap, advance technological growth, and
                      empower individuals to transform their aspirations into reality.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="col-md-6">
                  <div className="inner-card text-center h-100">
                    <span className="material-symbols-outlined">
                      auto_stories
                    </span>
                    <h4 className="blue-theme-h4 h3">Our Vision</h4>
                    <p className="mt-3">
                      Our vision is to become a leading center of excellence in IT
                      education, recognized globally for delivering transformative,
                      industry-relevant training. We aspire to empower individuals with
                      the skills, knowledge, and confidence to innovate, lead, and
                      contribute meaningfully to the ever-evolving world of technology.
                      By fostering a culture of excellence and inclusivity, we aim to
                      shape future-ready professionals who drive progress and create a
                      positive impact on society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default AboutUs;
