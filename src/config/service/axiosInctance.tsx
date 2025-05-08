import { Modal } from "antd";
import axios from "axios";

// const baseUrl = "http://217.76.56.73:8888";
const baseUrl = "https://api.noventer.uz";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});


axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res);
    
    return res;
  },
  (err) => {
    console.log();

    if (err?.status === 401) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("profile-storage");
      location.pathname = "/login";
    }
    if (err?.status === 400) {
      const object = err?.response?.data ?? {};
      const err_messages = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          const element = `${key} : ${JSON.stringify(object[key])}`;
          err_messages.push(element);
        }
      }

      Modal.error({
        title: "Kutilmagan xatolik",
        centered: true,
        content: <div> 
          {err_messages.map((item)=>(<p>{item}</p>))}
        </div>, 
        width: "40%"
      });
    }
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("access");
    if (access) {
      config.headers.set("Authorization", `Bearer ${access}`);
    }
    return config;
  },
  (err) => {
    console.log(err);
  }
);

export default axiosInstance;
