import Wrapper from "../Wrapper"
import HomeSlider from "./HomeSlider"
import Testimonials from "../Testimonials/Testimonials"
import WhyJoin from "../../components/WhyJoin"
import CourseCluster from "./CourseCluster"
import UpcomingBatch from "../UpcomingBatches/UpcomingBatch"
import Clients from "../../components/Clients"

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
                
                <Clients></Clients>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Testimonials slice={9}></Testimonials>
                        </div>
                    </div>
                </div>
                <WhyJoin></WhyJoin>
                

                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvelocitycorporatetariningcenter&tabs=posts&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="500" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </div>
                </div> */}

            </Wrapper>
        </>
    )
}

export default Home