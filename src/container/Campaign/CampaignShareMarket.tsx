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


const getNextFriday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilFriday = (6 - dayOfWeek + 7) % 7;
    const nextFriday = new Date(today);
    nextFriday.setDate(today.getDate() + daysUntilFriday);

    // Optional: Format the date to a string, for example: 'March 28, 2025'
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return nextFriday.toLocaleDateString(undefined, options);
}

const CampaignShareMarket = () => {

    const [timeLeft, setTimeLeft] = useState<any>('');

    // Function to calculate the next Friday at 4 PM
    const getNextFridayAt4PM = () => {
        const now = new Date();
        const dayOfWeek = now.getDay();
        const daysUntilFriday = (6 - dayOfWeek + 7) % 7; // 5 is Friday
        const nextFriday = new Date(now);
        nextFriday.setDate(now.getDate() + daysUntilFriday); // Set to next Friday
        nextFriday.setHours(16, 0, 0, 0); // Set time to 4 PM (16:00)

        return nextFriday;
    };

    // Function to update the countdown every second
    const updateCountdown = useCallback(() => {
        const targetDate: any = getNextFridayAt4PM();
        const now: any = new Date();
        const timeDifference: any = targetDate - now;

        if (timeDifference <= 0) {
            setTimeLeft("The countdown has finished!");
            // clearInterval(intervalId as any);
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Days remaining

            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            // setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

            setTimeLeft({
                day: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }
    }, [])


    // Setting up the interval to update every second
    useEffect(() => {
        updateCountdown(); // Initial update
        const intervalId: any = setInterval(updateCountdown, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId as any);
    }, [updateCountdown]);

    return (
        <>
            <div className="campaignWrapper">
                <div className="topHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>
                                    You're tired of losing money in the stock market whether
                                    investing or trading!
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
                                    Learn How to <span>Trade,</span> <span>Invest,</span> and{" "}
                                    <span>Grow</span>{" "}<br></br>
                               
                                    <span>Your Wealth</span> - Even if You've <span>Failed</span>{" "}
                                    Before!
                                </h3>
                                <h4>
                                    Guided by <span>Trainers</span> Who've Helped {" "}
                                    <span>Build <br></br> Profitable Portfolios</span> & Strong
                                    {" "}<span>Trading Strategies</span>
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="callout">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-12 text-center">
                                <Button className="btn btn-outline-primary">
                                    Yes, Show Me To How To Make Profit!
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="workshopDetails">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-12 hide-mobile">
                                <img src={MainImage2} alt="" title=""></img>
                            </div>
                            <div className="col-md-6 col-12">
                                <h1>Workshop Details</h1>
                                <ul>
                                    <li>
                                        <span>
                                            <img src={Icon1} alt="" title="" />
                                            Date
                                        </span>
                                        {getNextFriday()}
                                    </li>
                                    <li><span>
                                        <img src={Icon2} alt="" title="" />
                                        Time
                                    </span> 4:00 PM</li>
                                    <li> <span>
                                        <img src={Icon3} alt="" title="" />
                                        Duration
                                    </span>  1 Hour</li>
                                    <li> <span>
                                        <img src={Icon4} alt="" title="" />
                                        Venue
                                    </span>Zoom</li>
                                    <div className="clearfix"></div>
                                </ul>


                                <h1>Begins in</h1>

                                <ul className="list4">
                                    <li>

                                        {timeLeft?.day}
                                        <span>

                                            Days
                                        </span>
                                    </li>

                                    <li>

                                        {timeLeft?.hours}
                                        <span>

                                            Hours
                                        </span>
                                    </li>

                                    <li>
                                        {timeLeft?.minutes}

                                        <span>
                                            Minutes
                                        </span>
                                    </li>

                                    <li>

                                        {timeLeft?.seconds}
                                        <span>

                                            Seconds
                                        </span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="painPoints">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-12">
                                <h1>Are You Struggling to Succeed in the Stock Market?</h1>
                                <ul>
                                    <li>
                                        <h4>Minimize Losses & Start Profiting</h4>
                                        <p>
                                            Are you tired of losing money in the stock market, no
                                            matter how hard you try?
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Stock Market Made Clear</h4>
                                        <p>
                                            Are you overwhelmed by the confusing jargon and complexity
                                            of trading and investing?
                                        </p>
                                    </li>

                                    <li>
                                        <h4>Spot Winners, Avoid Losers</h4>
                                        <p>
                                            Do you feel stuck because you can't tell which mutual
                                            funds, or stocks will grow and which won't?
                                        </p>
                                    </li>
                                    <li>
                                        <h4> Learn To Analyze Stocks</h4>
                                        <p>
                                            Do you struggle to understand technical and fundamental
                                            analysis?
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Trade with Confidence, Not Guesswork</h4>
                                        <p>
                                            Do you rely on tips and rumors because you lack the
                                            confidence to make your own decisions?
                                        </p>
                                    </li>

                                    <li>
                                        <h4>Find Your Next Big Opportunity</h4>
                                        <p>
                                            Do you feel like you're missing out on profitable
                                            opportunities because you don't know where to start?
                                        </p>
                                    </li>

                                    <li>
                                        <h4>Build the Wealth You Deserve</h4>
                                        <p>
                                            Are you worried that you'll never achieve the financial
                                            freedom you've been dreaming of?
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="callout">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-12 text-center">
                                <Button className="btn btn-outline-primary">
                                    Yes, Show Me To How To Make Profit!
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="masterclass">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-12">
                                <h1>What will you learn inside the Masterclass?</h1>
                                <ol>
                                    <li>
                                        Gain the skills to analyze stocks like a pro, so you can
                                        make informed decisions and avoid costly mistakes.
                                    </li>
                                    <li>
                                        Learn how to identify high-potential stocks and mutual
                                        funds, so you can build a profitable portfolio with
                                        confidence.
                                    </li>
                                    <li>
                                        Discover step-by-step strategies for both short-term trading
                                        and long-term investing, so you can grow your wealth
                                        consistently
                                    </li>
                                    <li>
                                        Stop relying on tips and rumours - learn to trust your own
                                        analysis and make smart, independent investment decisions.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="benefitWorkshop">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12 text-center">
                                <h1>Who can benefit from this workshop?</h1>
                            </div>


                            <div className="col-md-4 col-12 mb-3">
                                <div className="innerBox">
                                    <img src={Benefit1} title="" alt="" />
                                    <h2>Working Professionals</h2>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mb-3">
                                <div className="innerBox">
                                    <img src={Benefit2} title="" alt="" />
                                    <h2>Business Owners</h2></div>
                            </div>
                            <div className="col-md-4 col-12 mb-3">
                                <div className="innerBox">
                                    <img src={Benefit3} title="" alt="" />
                                    <h2>Traders</h2></div>
                            </div>
                            <div className="col-md-4 col-12 mb-3">
                                <div className="innerBox">
                                    <img src={Benefit4} title="" alt="" />
                                    <h2>Investors</h2></div>
                            </div>
                            <div className="col-md-4 col-12 mb-3">
                                <div className="innerBox">
                                    <img src={Benefit5} title="" alt="" />
                                    <h2>Stock Market Enthusiasts</h2></div>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="aboutTrainers">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1>About the Trainers:</h1>
                            <div className="col-md-6 col-12">
                                <div className="trainerPlaceholder">
                                    <img src={PawanSir} alt="" title="" />
                                </div>
                                <p className="white">Pawan Sir</p>
                                <h3>📊 Technical Analysis Trainer:</h3>
                                <ol>
                                    <li>
                                        <span><img src={Icon5} title="" alt="" /></span> Experience: 14+ Years in Equity, Futures,
                                        Options, & Commodities.
                                    </li>
                                    <li>
                                        <span><img src={Icon6} title="" alt="" /></span> Certifications: NSE Certified in Advanced
                                        Options Strategies.
                                    </li>
                                    <li>
                                        <span><img src={Icon8} title="" alt="" /></span> Expertise: Market trend analysis, risk
                                        management strategies, and live trading sessions for
                                        practical learning.
                                    </li>
                                    <li>
                                        <span><img src={Icon7} title="" alt="" /></span> Achievements: Successfully trained 5,000+
                                        students and helped them build strong trading strategies.
                                    </li>
                                </ol>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="trainerPlaceholder">
                                    <img src={PravinSir} alt="" title="" />
                                </div>
                                <p className="white">Pravin Sir</p>
                                <h3>📈 Fundamental Analysis Trainer:</h3>
                                <ol>
                                    <li>
                                        <span><img src={Icon5} title="" alt="" /></span> Experience: 14+ Years in Equity Investments
                                        & Mutual Funds.
                                    </li>
                                    <li>
                                        <span><img src={Icon6} title="" alt="" /></span> Certifications: NISM Certified & Registered
                                        with AMFI.
                                    </li>
                                    <li>
                                        <span><img src={Icon8} title="" alt="" /></span> Expertise: Portfolio management, financial
                                        statement analysis, and long-term wealth creation
                                        strategies.
                                    </li>
                                    <li>
                                        <span><img src={Icon7} title="" alt="" /></span> Achievements: Guided 5000+ investors in building profitable portfolios and
                                        achieving financial goals.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="test">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-12 mobile-mergin-bottom">
                                <div className="inner">
                                    <div className="profilePhoto">
                                        <img src={WarrenBuffett} alt="" title="" />
                                    </div>
                                    <strong>Warren Buffett said,</strong>'The best investment you
                                    can make is in yourself.'
                                    <p>
                                        "Start your journey to financial freedom today - your future
                                        self will thank you!"
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className="inner">
                                    <div className="profilePhoto">
                                        <img src={BenjaminGraham} alt="" title="" />
                                    </div>
                                    "<strong>Benjamin Graham</strong> taught us to be 'intelligent
                                    investors.'
                                    <p>
                                        Don't wait - take control of your financial future now and
                                        start building wealth the smart way!”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="container">
                        <div className="row">
                            <h2>Testimonials</h2>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test1} alt="" title="" />
                                </div>
                            </div>

                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test2} alt="" title="" />
                                </div>
                            </div>

                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test3} alt="" title="" />
                                </div>
                            </div>

                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test4} alt="" title="" />
                                </div>
                            </div>

                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test5} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test6} alt="" title="" />
                                </div>
                            </div>

                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test7} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test8} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test9} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test10} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test11} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test12} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test13} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test14} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test15} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test16} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test17} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test18} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test19} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test20} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test21} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test22} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test23} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test24} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test25} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test26} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test27} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test28} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test29} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test30} alt="" title="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="inner">
                                    <img src={Test31} alt="" title="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="faqs">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-md-12 col-12">
                                <h2>FAQs</h2>
                                <ul>
                                    <li>
                                        <h4>Who is this masterclass best suited for?</h4>
                                        <p>
                                            This masterclass is ideal for anyone wanting to succeed in
                                            the stock market - beginners, experienced traders,
                                            investors looking for long-term returns, and those tired
                                            of losing money on bad investments.
                                        </p>
                                    </li>

                                    <li>
                                        <h4>What is the format of the masterclass?</h4>
                                        <p>It's a live, interactive session conducted on Zoom.</p>
                                    </li>

                                    <li>
                                        <h4>Will the masterclass be interactive?</h4>
                                        <p>
                                            The masterclass is designed to be interactive, not just
                                            one-sided.
                                        </p>
                                    </li>

                                    <li>
                                        <h4>Can I get a recording of the masterclass?</h4>
                                        <p>
                                            No, recordings will not be available. The real value comes
                                            from attending live and engaging inside the masterclass.
                                        </p>
                                    </li>

                                    <li>
                                        <h4>Will I receive reminders before the masterclass?</h4>
                                        <p>
                                            You will receive email reminders before the live
                                            masterclass begins.
                                        </p>
                                    </li>

                                    <li>
                                        <h4>
                                            What if I don't receive the email for the masterclass?
                                        </h4>
                                        <p>
                                            If you don't receive the email reminders, please write to
                                            info@vctcpune.com immediately so we can ensure you don't
                                            miss this masterclass. Be sure to check your spam or
                                            promotions folder as emails sometimes land there.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

 
            </div>
        </>
    );
};

export default CampaignShareMarket;
