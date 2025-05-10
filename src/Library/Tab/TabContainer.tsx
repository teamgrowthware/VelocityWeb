import { useEffect, useState } from "react";

const TabContainer = ({
    list,
    activeTab,
    activeTabCallout,
    title
}: { list: any, activeTab: any, activeTabCallout: any, title: any }) => {
    const [activeItem, setActiveItem] = useState<any>();

    useEffect(() => {
        if (activeTab) {
            setActiveItem(activeTab)
        } else {
            setActiveItem(list?.[0])
        }
    }, [activeTab, list, title])

    return (
        <>
            <div className="tab">
                <ul>
                    {list?.map((item: any) => {
                        return (
                            <li
                                className={activeItem?.name === item?.name ? "selected" : ""}
                                onClick={() => {
                                    setActiveItem(item);
                                    activeTabCallout(item)
                                }}
                            >
                                {item?.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="clearfix"></div>
            {activeItem?.content && (
                <div className="tab-content">{activeItem?.content}</div>
            )}
        </>
    );
};
export default TabContainer;
