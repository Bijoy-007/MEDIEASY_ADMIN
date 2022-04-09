import axios from "axios";

import config from "../config";

const postWithOutToken = async (endPoint, body) => {
  console.log(config);
  return axios.post(`${config.base}${endPoint}`, body);
};

export default postWithOutToken;
