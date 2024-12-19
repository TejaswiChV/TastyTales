import axios from "axios";
export const getWebsiteName = () => {
  return axios
    .get("http://localhost:8080/home/websiteName")
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
};
