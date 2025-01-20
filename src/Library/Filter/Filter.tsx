import React, { useEffect, useState, useMemo, useCallback } from "react";
import CustomTooltip from "../Tooltip/Tippy";
import Button from "../Button/Button";
import { DownloadExcel, donwloadOptions, objectLenght } from "../Utility/Utility";

import moment from "moment";
import { Select, SideDrawer } from "../Module";

type InputProps = {
    readonly?: boolean
    filter?: any
    sidebarFilterData: (data: any) => void
}

const statusOption = [
    { text: "Emergency", id: 1, value: "Emergency" },
    { text: "Regular", id: 2, value: "Regular" },
];

const Filters = ({
    readonly = false,
    filter,
    sidebarFilterData
}: InputProps): JSX.Element => {
    const [formData, setFormData] = useState<any>();
    const [open, setOpen] = useState(false)

    const onChangeSingleCallback = (data: any) => {
        setFormData((prevState: any) => ({
            ...prevState,
            ...data,
        }));
    };

    useEffect(() => {
        let obj = {}
        filter?.map((item: any) => {
            let source = { [item?.name]: item?.default?.value }
            return Object.assign(obj, source)
        })
        setFormData(obj)
    }, [filter, sidebarFilterData])

    const CloseDrawer = () => {
        setOpen(false)
    };

    const submit = () => {
        setOpen(false)
        sidebarFilterData(formData)
    }
    const Cancel = () => {
        setOpen(false)
        sidebarFilterData(setFormData([]))
    }

    const count = useMemo(() => {
        return objectLenght(filter)
    }, [filter])

    return (
        <>
            <Button
                buttonText={"Filter"}
                buttonStyleOutline
                onClick={() => setOpen(true)}
                icon="filter_alt"
                buttonStyleType={"primary"} >
                <span className="count">
                    {count}
                </span>
            </Button>

            {open && (
                <SideDrawer
                    size={'450px'}
                    pagetitle={`Filter`}
                    action={CloseDrawer}
                >
                    <div className="p-2">
                        {filter?.map((item: any) => {
                            return (
                                <>
                                    <Select
                                        inputName={item?.name}
                                        labelName={item?.label}
                                        options={item?.options ?? []}
                                        onChangeSingleCallback={onChangeSingleCallback}
                                        selectedItem={item?.options?.find(
                                            (selected: any) => {
                                                console.log("item.value", item?.default)
                                                return (selected.value === formData?.[item?.name])
                                            }
                                        )}
                                        required={true}
                                        placeholder={item?.placeholder}
                                        search_option={false}
                                        isLoading={true}
                                        value={formData?.[item?.name]}
                                    ></Select>
                                </>
                            )
                        })}



                        <Button
                            buttonText={"Submit"}
                            onClick={() => submit()}
                            className="float-right"
                            buttonStyleType={"primary"} />
                    </div>
                </SideDrawer>
            )}



        </>
    );
};

export default Filters;
