export interface UserInfo {
  loginID: string;
  isAdmin: boolean;
  profileImage: string;
  inoutState: "IN" | "OUT";
  tagAt?: null | string;
}

export interface UserDurationTime {
  todayDurationTime: number;
  monthDurationTime: number;
}

export interface UserInfoResponse {
  login: UserInfo["loginID"];
  profileImage: UserInfo["profileImage"];
  isAdmin: UserInfo["isAdmin"];
  inoutState: UserInfo["inoutState"];
  tagAt: UserInfo["tagAt"];
  gaepo?: number;
  seocho?: number;
}
