import Img1 from "../images/why1.png"
import Img2 from "../images/why2.png"
import Img3 from "../images/why3.png"
import Img4 from "../images/why4.png"
import Img5 from "../images/why5.png"
import Img6 from "../images/why6.png"

const WhyJoin = () => {
    return (
        <div className="whyUs">
            <div className="container">
                <h1>Why to join Velocity?</h1>
                <div className="row">
                    
                    <div className="col-md-4">
                        <div className="inner">
                            <img src={Img1} alt="" title="" />
                            <h3>Daily Mock interview</h3>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="inner">
                            <img src={Img2} alt="" title="" />
                            <h3>Weekly Mock interview </h3>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="inner">
                            <img src={Img3} alt="" title="" />
                            <h3>Career Guidance </h3>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="inner">
                            <img src={Img4} alt="" title="" />
                            <h3>Senior Students Guidance </h3>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="inner">
                            <img src={Img5} alt="" title="" />
                            <h3>Course Completion Certificate</h3>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="inner">
                            <img src={Img6} alt="" title="" />
                            <h3>Weekly Assignment </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default WhyJoin