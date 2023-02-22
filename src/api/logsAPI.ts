import { instance } from "./baseAPI";

export type LogsResponse = {
  login: string; //loginID 로 변경해서 사용
  profileImage: string;
  inOutLogs: InOutLog[];
};

export type InOutLog = {
  inTimeStamp: number;
  outTimeStamp: number;
  durationSecond: number;
};

const getLogsDayURL = "v1/tag-log/perday";
export const getLogsDate = async (year: number, month: number, day: number) => {
  const response = await instance.get(getLogsDayURL, {
    params: {
      year,
      month,
      day,
    },
  });
  return response;
};

const getLogsMonthURL = "v1/tag-log/permonth";
export const getLogsmonth = async (year: number, month: number) => {
  const response = await instance.get(getLogsMonthURL, {
    params: {
      year,
      month,
    },
  });
  return response;
};
