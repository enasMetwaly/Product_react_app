import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // Show loader
    console.log(config)
    config.headers['Accept-Language'] = 'ar'
    if(localStorage.getItem('access_token')){
        config.headers['Autherization'] = 'TOKEEEN'
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    // Hide loader
    // Do something with response data
    return response;
}, function (error) {
    // Hide loader
    // Do something with response error
    return Promise.reject(error);
});
