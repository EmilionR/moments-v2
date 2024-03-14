import axios from "axios";

// https://emils-drf-api-8546c6776dcb.herokuapp.com/
// https://8000-emilionr-emilsdrfapi-noo9k8scmiq.ws-eu110.gitpod.io/
axios.defaults.baseURL = "https://emils-drf-api-8546c6776dcb.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();