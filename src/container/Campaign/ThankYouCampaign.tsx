import "./style.css";
import { Button } from "../../Library/Module";
import MainImage2 from "../../images/sharemarket2.jpg";
import PravinSir from "../../images/Pravin-Sir.jpg";
import PawanSir from "../../images/Pawan-Sir.jpg";
import Test1 from "../../images/testimonials/1.jpeg";
import Test2 from "../../images/testimonials/2.jpeg";
import Test3 from "../../images/testimonials/3.jpeg";
import Test4 from "../../images/testimonials/4.jpeg";
import Test5 from "../../images/testimonials/5.jpeg";
import Test6 from "../../images/testimonials/6.jpeg";
import Test7 from "../../images/testimonials/7.jpeg";
import Test8 from "../../images/testimonials/8.jpeg";
import Test9 from "../../images/testimonials/9.jpeg";
import Test10 from "../../images/testimonials/10.jpeg";
import Test11 from "../../images/testimonials/11.jpeg";
import Test12 from "../../images/testimonials/12.jpeg";
import Test13 from "../../images/testimonials/13.jpeg";
import Test14 from "../../images/testimonials/14.jpeg";
import Test15 from "../../images/testimonials/15.jpeg";
import Test16 from "../../images/testimonials/16.jpeg";
import Test17 from "../../images/testimonials/17.jpeg";
import Test18 from "../../images/testimonials/18.jpeg";
import Test19 from "../../images/testimonials/19.jpeg";
import Test20 from "../../images/testimonials/20.jpeg";
import Test21 from "../../images/testimonials/21.jpeg";
import Test22 from "../../images/testimonials/22.jpeg";
import Test23 from "../../images/testimonials/23.jpeg";
import Test24 from "../../images/testimonials/24.jpeg";
import Test25 from "../../images/testimonials/25.jpeg";
import Test26 from "../../images/testimonials/26.jpeg";
import Test27 from "../../images/testimonials/27.jpeg";
import Test28 from "../../images/testimonials/28.jpeg";
import Test29 from "../../images/testimonials/29.jpeg";
import Test30 from "../../images/testimonials/30.jpeg";
import Test31 from "../../images/testimonials/31.jpeg";


import Benefit1 from "../../images/campaign/Working-Professionals.jpg";
import Benefit2 from "../../images/campaign/Business-Owners.jpg";
import Benefit3 from "../../images/campaign/Traders.jpg";
import Benefit4 from "../../images/campaign/Investors.jpg";
import Benefit5 from "../../images/campaign/Stock-Market-Enthusiasts.jpg";

import Icon1 from "../../images/campaign/calendar-line.png"
import Icon2 from "../../images/campaign/calendar-line.png"
import Icon3 from "../../images/campaign/calendar-line.png"
import Icon4 from "../../images/campaign/calendar-line.png"


import Icon5 from "../../images/campaign/shield-star-line.png"
import Icon6 from "../../images/campaign/award-fill.png"
import Icon7 from "../../images/campaign/medal-fill.png"
import Icon8 from "../../images/campaign/bar-chart-grouped-line.png"

import WarrenBuffett from "../../images/campaign/buffett_0.jpg"
import BenjaminGraham from "../../images/campaign/Benjamin-graham.jpg"

import { useCallback, useEffect, useState } from "react";
import CampaignForm from "./CampaignForm";


const ThankYouCampaign = () => {



    return (
        <>
            <div className="campaignWrapper">
                <div className="topHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>
                                  
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="container">
                        <div className="row  align-items-center justify-content-center">
                            <div className="col-md-7 col-12">
                                <h3 className="mb-4">
                                    <span>CONGRATULATIONS!!!</span>
                                </h3>
                                <h4>
                                    On Taking Your First Step Towards <span>Growing Wealth</span> Through <span>Smart Trading & Investing</span> 🚀
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="aboutTrainers">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1>Please Complete These Final Action Steps to Unlock <br></br> Your Workshop
                                Access</h1>
                            <div className="col-md-6 col-12">
                                <p className="white">STEP #1</p>
                                <ol>
                                    <li><span>📲</span>
                                        Join Our Private WhatsApp Community
                                    </li>
                                    <li>
                                        <span><img src={Icon5} title="" alt="" /></span>
                                        Stay updated with exclusive webinar reminders, bonus resources, and insider tips.
                                    </li>
                                    <li>
                                        <span>👉</span>
                                        <a href="#" target="_blank"> <Button buttonStyleType="primary">Joining Whatsapp Community</Button> </a>
                                    </li>
                                </ol>
                            </div>
                            <div className="col-md-6 col-12">
                                <p className="white"> STEP #2</p>
                                <ol>
                                    <li>
                                        <span> 📧</span>  Check Your Inbox in the Next 5 Minutes
                                    </li>
                                    <li>
                                        <span><img src={Icon6} title="" alt="" /></span> You'll receive an email from our team (Search for “VCTC” in your inbox).
                                    </li>
                                    <li>
                                        <span><img src={Icon8} title="" alt="" /></span>This mail contains your webinar link + important instructions.
                                    </li>

                                </ol>
                            </div>

                            <h3>If you don't see the email in your INBOX, please check your JUNK/SPAM/PROMOTIONS folders.</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ThankYouCampaign;
