import Menu from "./Menu";
import { Button, Input } from "../Library/Module";
const Footer = () => {
    return (
        <>
            <div className="SubscribeNewsletter">
                <div><span className="material-symbols-outlined mt-2">
                    login
                </span></div>
                <div><h1>Quick Chat</h1></div>
                <div><Input inputName="" placeholder="enter your mobile number"></Input></div>
                <div><Button>Submit</Button></div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-3">
                            <p><img className="footerLogo" src={Logo} alt="" title="" /></p>
                            <p>Velocity Pune is a premier IT training institute dedicated to empowering individuals with the skills and knowledge required to excel in the dynamic field of information technology.</p>
                            
                        </div> */}
                        <div className="col-md-12 mainMenu">
                            <Menu></Menu>
                        </div>

                        <div className="col-md-12 text-center">
                            {/* <h3>Get In Touch</h3> */}
                            {/* <p>Drop us a line, someone from our team will get in touch with you shortly.</p> */}
                            {/* <p></p>
                            <p></p> */}
                            <ul className="social_icons">
                            <li><span className="material-symbols-outlined">phone_in_talk</span> +91 94227 61663</li>
                            <li><span className="material-symbols-outlined">mail</span> info@vctcpune.com</li>

                                <li><a className="social_icon" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/velocitycorporatetariningcentre/?mibextid=ZbWKwL" title=""><i className="ri-facebook-fill"></i></a> </li>
                                <li><a className="social_icon" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/@velocityclassespune" title=""><i className="ri-youtube-fill"></i></a> </li>
                                <li><a className="social_icon" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/vctc_official?igsh=MXRrdXB5NmUwMmRxZA==" title=""><i className="ri-instagram-fill"></i></a> </li>
                                <li><a className="social_icon" rel="noopener noreferrer" target="_blank" href="https://t.me/Velocityclassofficial" title=""><i className="ri-twitter-fill"></i></a></li></ul>
                        </div>
                        <div className="col-md-12 text-center">
                            <p>Copyright 2025 VCTC Pune . All Rights Reserved</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer