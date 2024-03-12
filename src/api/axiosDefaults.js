import axios from "axios";

axios.defaults.baseURL = "https://emils-drf-api-8546c6776dcb.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;