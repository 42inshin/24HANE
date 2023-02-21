export interface UserInfo {
  login: string;
  isAdmin: boolean;
  profileImage: string;
  inoutState: "IN" | "OUT";
  tagAt?: null | string;
}

export interface MainInfo extends UserInfo {
  gaepo?: number;
  seocho?: number;
}

export interface UserAccTime {
  todayAccumationTime: number;
  monthAccumationTime: number;
}

export interface PeriodData {
  periods: string;
  total: number;
}
