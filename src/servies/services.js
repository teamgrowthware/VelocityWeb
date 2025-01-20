import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { createBrowserHistory } from "history";
// import { cacheAdapterEnhancer } from 'axios-extensions';
// import axiosRetry from 'axios-retry';

const user_details = localStorage.getItem('user_details');
const user_details_parse = JSON.parse(user_details)
const token = user_details_parse?.token
const historyConfig = {
    basename: 'tatva-admin/'
};

export const history = createBrowserHistory(historyConfig);

export let site_data = {
    "site_name": "CMS",
    "site_title": "",
    "welcome_back": "Welcome Back !",
    "login_note": "Sign in to continue to Admin Panel"

    //  {site_data.site_name} 
}

export const API = axios.create({
    baseURL: `/`,
    headers: { 'Cache-Control': 'no-cache' },
    // disable the default cache and set the cache flag
    // adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false, cacheFlag: 'useCache' })
});



// axiosRetry(axios, { retries: 3 });




export const setUpAxios = async () => {

    // return (
    //     axios.interceptors.response.use(undefined, (err) => {
    //         const { config, message } = err;
    //         if (!config || !config.retry) {
    //             return Promise.reject(err);
    //         }
    //         // retry while Network timeout or Network Error
    //         if (!(message.includes("timeout") || message.includes("Network Error"))) {
    //             return Promise.reject(err);
    //         }
    //         config.retry -= 1;
    //         const delayRetryRequest = new Promise((resolve) => {
    //             setTimeout(() => {
    //                 console.log("retry the request", config.url);
    //                 resolve();
    //             }, config.retryDelay || 1000);
    //         });
    //         return delayRetryRequest.then(() => axios(config));
    //     })
    // )

    return (
        API.interceptors.response.use(response => {
            console.log("response", response)
            return response;
        }, error => {
            console.log("error", JSON.stringify(error));
            console.log("message aixos", error.response, error.message)
            if (!error.response) {
                alert("Server is not running")
                console.log("Interceptor - Server is not running");

            } else if (error.response.status === 401) {

                console.log("Interceptor - 401 - Unauthorized: Token Invalid, please login again");

            } else if (error.response.status === 400) {

                console.log("Interceptor - 400" + error.response.data.messages);
                return error.response;

            } else if (error.response.status === 404) {
                alert("API not Found")
                console.log("API not Found");
                return null;

            } else {

                const { config, message } = error;
                if (!config || !config.retry) {
                    return Promise.reject(error);
                }

                // retry while Network timeout or Network Error
                // if (!(message.includes("timeout") || message.includes("Network Error"))) {
                //     return Promise.reject(error);
                // }
                config.retry -= 1;
                const delayRetryRequest = new Promise((resolve) => {
                    setTimeout(() => {
                        console.log("retry the request", config.url);
                        resolve();
                    }, config.retryDelay || 1000);
                });
                return delayRetryRequest.then(() => axios(config));
            }
        })
    )

}


// when request, can set retry times and retry delay time
// axios.get(url, {retry: 3, retryDelay: 3000});


/***** Login ******/

export const authenticate = async (data) => {
    const response = await API.post(process.env.react_app_base_url + '/api/v1/user/login', data)
    return response;
};

export const getCourses = async (id, useCache) => {
    console.log("service FieldById", id)
    const response = await API.get(process.env.react_app_base_url + '/api/v1/cources?status=0&sortBy=order_id=-1', {
        headers: {
            "auth-token": `${token}`,
        }
    })
    console.log("response", response)
    return response;
};
