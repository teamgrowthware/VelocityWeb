import React, { createContext, useEffect, useState } from "react";
import { getCourses } from "../../../servies/services";
type ThemeContextType = {
    coursesList: any;
};
export const ThemeContext = createContext<ThemeContextType>({
    coursesList: [],
});

const { Provider } = ThemeContext;

export const ThemeConsumer = ThemeContext.Consumer;

type ThemeProviderProps = {
    children: JSX.Element;
};

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
    
    console.log("coursesList")
    
    const [coursesList, setCoursesList] = useState([]);

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

    return (
        <>
            <Provider
                value={{
                    coursesList,
                }}
            >
                {children}
            </Provider>
        </>
    );
};

export { ThemeProvider };
