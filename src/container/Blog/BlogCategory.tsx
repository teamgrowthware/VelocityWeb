import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryforCMSType } from "../../servies/services";

const BlogCategory = () => {
    const [categoryContentLoading, setCategoryContentLoading] = useState<any>(false);
    const [categoryContent, setCategoryContent] = useState<any>([]);


    useEffect(() => {
        setCategoryContent([])
        const getData = async () => {
            setCategoryContentLoading(false)
            const data = await getCategoryforCMSType("Blog");
            console.log("getCourseSlug", data?.data?.data);
            setCategoryContent(data?.data?.data);
            setCategoryContentLoading(true)
        };
        getData();

    }, []);
    return (
        <>
            <div className="mb-3">
                <div className="infoBoxCourse">
                    <h3>Category</h3>
                    <ul>
                        {categoryContent?.map((item: any) => {
                            return <li>
                                <p> <span className="material-symbols-outlined">view_module</span> {item?.title}</p>
                                {/* <p className="rightInfo">{courseModule?.length}</p> */}
                            </li>
                        })}


                    </ul>
                </div>
            </div>
        </>
    )
}


export default BlogCategory