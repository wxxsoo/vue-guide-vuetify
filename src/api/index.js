import axios from "axios";
import { setInterceptors } from "@/api/config/interceptors";
// HTTP Reuqest $ Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

function create(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  setInterceptors(instance);
  return instance;
}

export const hackerNewsInstance = create(config.baseUrl);
