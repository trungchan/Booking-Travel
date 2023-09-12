import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    headers: {
        // dữ liệu trong yêu cầu và phản hồi là định dạng JSON
        "Content-Type": "application/json",
    }
});

// axiosClient.interceptors.request.use(function (config) {

//     const token = localStorage.getItem("token")
//     if (token) {
//         config.headers["Authorization"] = "Bearer " + token
//     }
//     return config;
// }, function (error) {

//     return Promise.reject(error);
// });

// Add a response interceptor
// axiosClient.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     return Promise.reject(error);
// });

export const Api = (method, endPoint, payLoad) => {
    return axiosClient(endPoint, { method: method, data: payLoad }).then((resp) => {
        // console.log("ressss::", resp);
        return resp.data;
    }).catch((error) => {
        console.log(error);
    });
};


// const interceptAuth = () => {
//   const instance = axios.create({
//     baseURL: "http://localhost:8080/api/v1/",
//     headers: {
//       "Accept-Language": "en-US",
//       "Content-Type": "application/json",
//     },
//   });

//   instance.interceptors.request.use((cf) => {
//     const token = localStorage.getItem("token");
//     if (token && cf?.headers) {
//       cf.headers["Authorization"] = "Bearer " + token;
//     }
//     return cf;
//   });
//   instance.interceptors.response.use(
//     (response) => {
//       // Do something with response data
//       return response;
//     },
//     (error) => {
//       // Do something with response error
//       return Promise.reject(error);
//     }
//   );
//   return instance;
// };

// const instance = interceptAuth()

// export default instance;
