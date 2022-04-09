import axios from "axios";

import config from "../config";

const getWithToken = async (endPoint) => {
  const token = localStorage.getItem("token");
  const postConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(`${config.base}${endPoint}`, postConfig);
};

export default getWithToken;
