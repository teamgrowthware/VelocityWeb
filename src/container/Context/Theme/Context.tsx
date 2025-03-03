import React, { createContext, useEffect, useState } from "react";
import { getCMS, getCourses } from "../../../servies/services";
type ThemeContextType = {
    coursesList: any;
    pagesList: any;

};
export const ThemeContext = createContext<ThemeContextType>({
    coursesList: [],
    pagesList: [],
});

const { Provider } = ThemeContext;

export const ThemeConsumer = ThemeContext.Consumer;

type ThemeProviderProps = {
    children: JSX.Element;
};

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {

    console.log("coursesList")

    const [coursesList, setCoursesList] = useState([]);
    const [pagesList, setPagesList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const APIResponse = await getCourses();
            if (APIResponse?.data?.isSuccess === true) {
                setCoursesList(APIResponse?.data?.data);
            } else {
                console.error("something went wrong, please try after sometime.")
            }
        };
        getData();
    }, [])

    console.log("coursesList", coursesList)

    useEffect(() => {
        const getData = async () => {
            const APIResponse = await getCMS();
            if (APIResponse?.data?.isSuccess === true) {
                setPagesList(APIResponse?.data?.data);
            } else {
                console.error("something went wrong, please try after sometime.")
            }
        };
        getData();
    }, [])

    console.log("pagesList", pagesList)

    return (
        <>
            <Provider
                value={{
                    coursesList,
                    pagesList
                }}
            >
                {children}
            </Provider>
        </>
    );
};

export { ThemeProvider };
