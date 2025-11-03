import Wrapper from "../Wrapper"
import HomeSlider from "./HomeSlider"
import Testimonials from "../Testimonials/Testimonials"
import WhyJoin from "../../components/WhyJoin"
import CourseCluster from "./CourseCluster"
import UpcomingBatch from "../UpcomingBatches/UpcomingBatch"
import Clients from "../../components/Clients"
import InstituteGallery from "../Gallary/InstituteGallery"

const Home = () => {
    return (
        <>
            <Wrapper>
                <HomeSlider></HomeSlider>
                <CourseCluster></CourseCluster>
                <div className="p-4">
                    <div className="row">
                        <div className="col-md-12">
                            <UpcomingBatch></UpcomingBatch>
                        </div>
                    </div>
                </div>
                <WhyJoin></WhyJoin>
                <Clients></Clients>
                <div className="p-4">
                    <div className="row">
                        <div className="col-md-12">
                            <Testimonials slice={9}></Testimonials>
                        </div>
                    </div>
                </div>
                <InstituteGallery />



                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvelocitycorporatetariningcenter&tabs=posts&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="500" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </div>
                </div> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14724.203742459324!2d75.86501435!3d22.689147699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1760430327345!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} loading="lazy"></iframe>

            </Wrapper>
        </>
    )
}

export default Home