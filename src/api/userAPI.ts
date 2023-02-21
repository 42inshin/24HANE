import { instance } from "@/api/baseAPI";
// import { UserInfoResponse } from "@/types/user";

const isLoginURL = "user/login/isLogin";
export const getIsLogin = async () => {
  try {
    const response = await instance.get(isLoginURL);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const userInfoURL = "v1/tag-log/maininfo";
export const getUserInfo = async () => {
  // const response = await instance.get<UserInfoResponse>(userInfoURL);
  const response = await instance.get(userInfoURL);
  return response;
};

const accTimesURL = "v1/tag-log/accumulationTimes";
export const getAccTimes = async () => {
  const response = await instance.get(accTimesURL);
  return response;
};
