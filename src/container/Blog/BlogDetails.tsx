import { useCallback, useEffect, useMemo, useState } from "react";
import Wrapper from "../Wrapper";
import { useParams } from "react-router-dom";
import TabContainer from "../../Library/Tab/TabContainer";
import { getBlogDetails, getCategoryforCMSType, getCenterBatchByCourseId, getCourseSlug } from "../../servies/services";
import Testimonials from "../Testimonials/Testimonials";
import Clients from "../../components/Clients";
import BannerCourses from "../../images/BannerCourses.png"
import BlogCategory from "./BlogCategory";

const BlogDetails = () => {
    const { slug } = useParams();
    const [pageContentLoading, setPageContentLoading] = useState<any>(false);
    const [pageContent, setPageContent] = useState<any>({});
    const [courseModule, setCourseModule] = useState([])
    const [activeItem, setActiveItem] = useState<any>("Why");
    const [categoryContentLoading, setCategoryContentLoading] = useState<any>(false);
    const [categoryContent, setCategoryContent] = useState<any>([]);


    useEffect(() => {
        if (slug) {
            setPageContent([])
            const getData = async () => {
                setPageContentLoading(false)
                const data = await getBlogDetails(slug);
                console.log("getCourseSlug", data?.data?.data);
                setPageContent(data?.data?.data);
                setPageContentLoading(true)
            };
            getData();
        }
    }, [slug]);

    console.log("pageContent -----------", pageContent)

    useEffect(() => {
        if (slug) {
            setCategoryContent([])
            const getData = async () => {
                setCategoryContentLoading(false)
                const data = await getCategoryforCMSType("Blog");
                console.log("getCourseSlug", data?.data?.data);
                setCategoryContent(data?.data?.data);
                setCategoryContentLoading(true)
            };
            getData();
        }
    }, [slug]);

    // 

    return (
        <>
            <Wrapper>
                <div className="bannerInner" style={{ background: `url(${pageContent?.cms_image ? process.env.react_app_base_url + "/" + pageContent?.cms_image : BannerCourses})` }}> </div>
                <div className="contentMain">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="innerBox">
                                    <h2>{!pageContentLoading && "loading..."} {pageContent?.cms_title}</h2>
                                    <div
                                        className="ql-editor"
                                        dangerouslySetInnerHTML={{
                                            __html: pageContent?.cms_description,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <img
                                        src={process.env.react_app_base_url + "/" + pageContent?.attachment}
                                        alt=""
                                        title=""
                                    />
                                </div>

                                <BlogCategory></BlogCategory>
                            </div>
                        </div>
                    </div>
                    <Clients></Clients>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="testimonialsWrapper">
                                    <Testimonials slice={9}></Testimonials>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default BlogDetails;
