import { ref } from "vue";
import { defineStore } from "pinia";
import { getMainInfo, getAccTimes } from "@/api/userAPI";

export interface PeriodData {
  periods: string;
  total: number;
}

interface MainInfo {
  login: string;
  profileImage: string;
  isAdmin: boolean;
  gaepo: number;
  seocho: number;
  inoutState: "IN" | "OUT";
  tagAt: null | string;
}

export const homeStore = defineStore("home", () => {
  const userInfo = ref({
    loginID: "",
    isAdmin: false,
    profileImage: "",
    inoutState: "OUT",
    tagAt: null,
  });

  const accDate = ref({
    hour: 0,
    minute: 0,
  });

  const accMonth = ref({
    hour: 0,
    minute: 0,
  });

  const numberOfPeople = ref({
    gaepo: 0,
    seocho: 0,
  });

  const dumyData: PeriodData[] = [
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
    },
    {
      periods: "없음",
      total: 0,
    },
  ];

  const weeklyGraph: PeriodData[] = ref(dumyData);
  const monthlyGraph: PeriodData[] = ref(dumyData);

  const getUserInfo = () => {
    return userInfo;
  };

  const getAccDate = () => {
    return accDate;
  };

  const getAccMonth = () => {
    return accMonth;
  };

  const getNumberOfPeople = () => {
    return numberOfPeople;
  };

  const getWeeklyGraph = () => {
    return weeklyGraph;
  };

  const getMonthlyGraph = () => {
    return monthlyGraph;
  };

  /*  {
   "login": "joopark",
   "profileImage": "https://cdn.intra.42.fr/users/joopark.jpg",
   "isAdmin": false,
   "tagAt": null
   "inoutState": "OUT",

   "gaepo": 42,
   "seocho": 42,
 } */

  const apiMainInfo = async () => {
    try {
      const { data: mainInfo }: MainInfo = await getMainInfo();
      console.log(mainInfo);
      userInfo.value = {
        loginID: mainInfo.login,
        isAdmin: mainInfo.isAdmin,
        profileImage: mainInfo.profileImage,
        inoutState: mainInfo.inoutState,
        tagAt: mainInfo.tagAt,
      };
      numberOfPeople.value = {
        gaepo: mainInfo.gaepo ?? 0,
        seocho: mainInfo.seocho ?? 0,
      };
    } catch (error) {
      console.log(error);
    }
  };

  const calcSecToTime = (sec: number) => {
    const hour = Math.floor(sec / 3600);
    const minute = Math.floor((sec % 3600) / 60);
    return { hour, minute };
  };

  const apiAccTimes = async () => {
    try {
      const { data: accTimes } = await getAccTimes();
      console.log(accTimes);
      accDate.value = calcSecToTime(accTimes.todayAccumationTime);
      accMonth.value = calcSecToTime(accTimes.monthAccumationTime);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getUserInfo,
    getAccDate,
    getAccMonth,
    getNumberOfPeople,
    getWeeklyGraph,
    getMonthlyGraph,
    weeklyGraph,
    apiMainInfo,
    apiAccTimes,
  };
});
