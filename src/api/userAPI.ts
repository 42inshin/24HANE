import { instance } from "api/baseAPI";
import { UserInfoResponse } from "types/User";

const isLoginURL = "user/login/isLogin";
export const getIsLogin = () => {
  return instance.get(isLoginURL);
};

const userInfoURL = "v1/tag-log/maininfo";
export const getUserInfo = () => {
  return instance.get<UserInfoResponse>(userInfoURL);
};

const accTimesURL = "v1/tag-log/accumulationTimes";
export const getAccTimes = () => {
  return instance.get(accTimesURL);
};
