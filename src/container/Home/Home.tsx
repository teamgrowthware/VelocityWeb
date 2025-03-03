import Wrapper from "../Wrapper"
import HomeSlider from "./HomeSlider"
import Testimonials from "../Testimonials/Testimonials"
import WhyJoin from "../../components/WhyJoin"
import CourseCluster from "./CourseCluster"
import UpcomingBatch from "../UpcomingBatches/UpcomingBatch"

const Home = () => {
    return (
        <>
            <Wrapper>
                <HomeSlider></HomeSlider>
                <CourseCluster></CourseCluster>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <UpcomingBatch></UpcomingBatch>
                        </div>
                    </div>
                </div>
                <WhyJoin></WhyJoin>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Testimonials slice={9}></Testimonials>
                        </div>
                    </div>
                </div>
            </Wrapper >
        </>
    )
}

export default Home