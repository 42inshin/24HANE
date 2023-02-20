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
export const getLogsDay = (year: number, month: number, day: number) => {
  return instance.get(getLogsDayURL, {
    params: {
      year,
      month,
      day,
    },
  });
};

const getLogsMonthURL = "v1/tag-log/permonth";
export const getLogsmonth = (year: number, month: number) => {
  return instance.get(getLogsMonthURL, {
    params: {
      year,
      month,
    },
  });
};
