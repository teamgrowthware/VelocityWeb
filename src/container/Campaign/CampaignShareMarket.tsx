import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Context/Theme/Context"
import { getCenters } from "../../servies/services"
import "./style.css"
import { Button } from "../../Library/Module"
import MainImage from "../../images/sharemarket.webp"
import MainImage2 from "../../images/sharemarket2.webp"

const CampaignShareMarket = () => {
    const { pagesList } = useContext(ThemeContext)
    const [pageContent, setPageContent] = useState<any>({})
    const [centerData, setCenterData] = useState<any>([])

    useEffect(() => {
        const getData = async () => {
            const data = await getCenters()
            setCenterData(data?.data?.data)
        }
        getData()
    }, [])

    useEffect(() => {
        setPageContent(pagesList?.find((item: any) => item?.slug === "about-us"))
    }, [pagesList])

    return (
        <>
            <div className="campaignWrapper">
                <div className="topHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>You're tired of losing money in the stock market whether investing or trading!</h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="banner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-12">
                                <img src={MainImage2} alt="" title="" ></img>
                            </div>
                            <div className="col-md-8 col-12">
                                <h3>Learn How to <span>Trade,</span> <span>Invest,</span> and <span>Grow</span></h3>
                                <h3 className="mb-4"><span>Your Wealth</span> - Even if You've <span>Failed</span> Before!</h3>
                                <h4>Guided by <span>Trainers</span> Who've Helped <span>Build Profitable Portfolios</span> & Strong <span>Trading Strategies</span></h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="callout">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-12 text-center">
                                <Button className="btn btn-outline-primary">Yes, Show Me To How To Profit!</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="painPoints">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1>Are You Struggling to Succeed in the Stock Market?</h1>

                            <div className="col-md-6 col-12">
                                <ul>
                                    <li>
                                        <h4>Minimize Losses & Start Profiting</h4>
                                        <p>Are you tired of losing money in the stock market, no matter how hard you try?</p>
                                    </li>
                                    <li>
                                        <h4>Stock Market Made Clear</h4>
                                        <p>
                                            Are you overwhelmed by the confusing jargon and complexity of trading and investing?</p>
                                    </li>

                                    <li>
                                        <h4>Spot Winners, Avoid Losers</h4>
                                        <p>Do you feel stuck because you can't tell which mutual funds, or stocks will grow and which won't?</p>
                                    </li>
                                    <li>
                                        <h4> Learn To Analyze Stocks</h4>
                                        <p>Do you struggle to understand technical and fundamental analysis?</p>
                                    </li>
                                    <li>
                                        <h4>Trade with Confidence, Not Guesswork</h4>
                                        <p>Do you rely on tips and rumors because you lack the confidence to make your own decisions?</p>
                                    </li>


                                    <li>
                                        <h4>Find Your Next Big Opportunity</h4>
                                        <p>Do you feel like you're missing out on profitable opportunities because you don't know where to start?</p>
                                    </li>

                                    <li>
                                        <h4>Build the Wealth You Deserve</h4>
                                        <p>Are you worried that you'll never achieve the financial freedom you've been dreaming of?</p>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-md-6 col-12">
                                <img src={MainImage} title="" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="callout">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-12 text-center">
                                <Button className="btn btn-outline-primary">Yes, Show Me To How To Profit!</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="masterclass">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-12">
                                <h1>What will learn inside the Masterclass?</h1>
                                <ol>
                                    <li>Gain the skills to analyze stocks like a pro, so you can make informed decisions and avoid costly mistakes.</li>
                                    <li>Learn how to identify high-potential stocks and mutual funds, so you can build a profitable portfolio with confidence.</li>
                                    <li>Discover step-by-step strategies for both short-term trading and long-term investing, so you can grow your wealth consistently</li>
                                    <li>Stop relying on tips and rumours - learn to trust your own analysis and make smart, independent investment decisions.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="aboutTrainers">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1>About the Trainers:</h1>
                            <div className="col-md-6 col-12">
                                <h3>📊 Technical Analysis Trainer:</h3>
                                <ol>
                                    <li><span>👨‍🏫</span> Pawan Sir</li>
                                    <li><span>🌟</span> Experience: 14+ Years in Equity, Futures, Options, & Commodities.</li>
                                    <li><span>📜</span> Certifications: NSE Certified in Advanced Options Strategies.</li>
                                    <li><span>🔍</span> Expertise: Market trend analysis, risk management strategies, and live trading sessions for practical learning.</li>
                                    <li><span>🏆</span> Achievements: Successfully trained 5,000+ students and helped them build strong trading strategies.</li>
                                </ol>
                            </div>

                            <div className="col-md-6 col-12">
                                <h3>📈 Fundamental Analysis Trainer:</h3>
                                <ol>
                                    <li><span>👨‍🏫</span>  Pawan Sir</li>
                                    <li><span>🌟</span> Experience: 14+ Years in Equity Investments & Mutual Funds.</li>
                                    <li><span>📜</span>  Certifications: NISM Certified & Registered with AMFI.</li>
                                    <li><span>🔍</span> Expertise: Portfolio management, financial statement analysis, and long-term wealth creation strategies.</li>
                                    <li><span>🏆</span> Achievements: Guided 5000</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="test">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-12">
                                <div className="inner">
                                    <strong>Warren Buffett said,</strong>'The best investment you can make is in yourself.'
                                    <p>"Start your journey to financial freedom today - your future self will thank you!"</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className="inner">
                                    "<strong>Benjamin Graham</strong> taught us to be 'intelligent investors.'
                                    <p>Don't wait - take control of your financial future now and start building wealth the smart way!”</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CampaignShareMarket