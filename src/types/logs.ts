export interface InOutLog {
  inTimeStamp: number;
  outTimeStamp: number;
  durationSecond: number;
}

export interface LogsData {
  login: string;
  profileImage: string;
  inOutLogs: inOutLog[];
}

// 일별 로그타임 계산
export interface Log {
  inLogTime: string;
  outLogTime: string;
  accLogTime: string;
}
