import { useEffect, useRef, useState } from "react";
import { Button } from "../../Library/Module";
import { getModuleByCourseId } from "../../servies/services";

const CourseModules = ({
    id,
    title,
    courseModuleCallback
}: any) => {
    const [showModule, setShowModule] = useState<any>([])
    const sectionRef = useRef<any>(null);
    const [isCourseModuleLoading, setIsCourseModuleLoading] = useState(false);
    const [courseModule, setCourseModule] = useState([]);

    useEffect(() => {
        setCourseModule([])
        if (id && title) {
            console.log("id, title -----------", id, title)
            setIsCourseModuleLoading(false)
            const getData = async () => {
                const moduleData = await getModuleByCourseId(id);
                setCourseModule(moduleData?.data?.data);
                setIsCourseModuleLoading(true)
                courseModuleCallback?.(moduleData?.data?.data)
            };
            getData();
        }
    }, [courseModuleCallback, id, title]);


    const addItem = (id: any) => {
        setShowModule((prevItems: any) => prevItems.includes(id) ?
            prevItems.filter((item: any) => item !== id)
            : [...prevItems, id]);
    };
    return (
        <>
            {!isCourseModuleLoading && 'Loading ...'}
            {isCourseModuleLoading && courseModule?.map((item: any, index: any) => {
                console.log("item ------- ", item?._id)
                return (
                    <>
                        <div onClick={() => {
                            addItem(item?._id)
                        }} className={`module-header ${showModule.includes(item?._id) ? 'selected' : ''}`}>
                            {showModule.includes(item?._id) ?
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                :
                                <span className="material-symbols-outlined">chevron_right</span>
                            }
                            <Button className="courseBtn">{item?.name}</Button>
                        </div>
                        {showModule.includes(item?._id) &&
                            <div ref={sectionRef} className="module-content">
                                <div
                                    className="ql-editor"
                                    dangerouslySetInnerHTML={{
                                        __html: item?.description,
                                    }}
                                ></div>
                            </div>
                        }
                    </>
                )
            })}
        </>
    )
}

export default CourseModules