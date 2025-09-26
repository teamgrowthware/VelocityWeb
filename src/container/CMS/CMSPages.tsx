import Wrapper from "../Wrapper"
import BannerCourses from "../../images/BannerCourses.png"
import { ThemeContext } from "../Context/Theme/Context"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReferrerForm from "./ReferrerForm"

const CMSPages = () => {

    const { pagesList } = useContext(ThemeContext)
    const [pageContent, setPageContent] = useState<any>({})
    const { slug } = useParams();

    useEffect(() => {
        const content = pagesList?.find((item: any) => {
            return item?.slug === slug;
        });
        setPageContent(content);
    }, [pagesList, slug]);


    return (
        <>
            <Wrapper>
                <div className="bannerInner" style={{background:`url(${pageContent?.cms_image ? process.env.react_app_base_url + "/" + pageContent?.cms_image : BannerCourses})`}}> </div>
                <div className="cmsWrapper">
                    <div className="container">
                        <div className="row">
                            <div className={slug === 'refer-and-earn' ? "col-md-8" : "col-md-12"}>
                                <h1>{pageContent?.title}</h1>
                                <div
                                    className="ql-editor"
                                    dangerouslySetInnerHTML={{
                                        __html: pageContent?.description,
                                    }}
                                ></div>
                            </div>


                            {slug === 'refer-and-earn' &&
                                <div className="col-md-4">
                                    <ReferrerForm></ReferrerForm>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default CMSPages