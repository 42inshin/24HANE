import { ref } from "vue";
import { defineStore } from "pinia";

export const useMonthLogStore = defineStore("MonthLog", () => {
  const logs = ref(logDatas);
  const today = ref(new Date()); // 오늘 날짜
  const year = ref(today.value.getFullYear()); // 2023 보이는 년
  const month = ref(today.value.getMonth()); // 0 ~ 11 보이는 달
  const day = ref(new Date(year.value, month.value).getDay()); // 해당 월 1일의 요일
  const lastDate = ref(new Date(year.value, month.value + 1, 0).getDate()); // 해당 월 총 일수
  const selectDate = ref(today.value.getDate()); // 선택한 일

  const getLogs = () => {
    return logs.value;
  };
  const setLogs = (data: LogsData) => {
    logs.value = data;
  };

  const showToday = () => {
    return today.value;
  };
  const showYear = () => {
    return year.value;
  };
  const showMonth = () => {
    return month.value;
  };
  const showDay = () => {
    return day.value;
  };
  const showLastDate = () => {
    return lastDate.value;
  };

  const showSelectedDate = () => {
    return selectDate.value;
  };
  const setSelectedDate = (date: number) => {
    selectDate.value = date;
  };
  const resetSelectedDate = () => {
    selectDate.value = today.value.getDate();
    year.value = today.value.getFullYear();
    month.value = today.value.getMonth();
    day.value = new Date(year.value, month.value).getDay();
    lastDate.value = new Date(year.value, month.value + 1, 0).getDate();
  };

  // 해당 월 1일의 요일 계산하기
  const calcFirstDay = () => {
    day.value = new Date(year.value, month.value).getDay();
  };

  // 월 마지막 날짜(총 일수) 계산하기
  const calcLastDate = () => {
    lastDate.value = new Date(year.value, month.value + 1, 0).getDate();
  };

  // 이전 달
  const prevMonth = () => {
    month.value--;
    if (month.value < 0) {
      month.value = 11;
      year.value--;
    }
    setSelectedDate(1);
    calcFirstDay();
    calcLastDate();
  };

  // 다음 달
  const nextMonth = () => {
    month.value++;
    if (month.value > 11) {
      month.value = 0;
      year.value++;
    }
    setSelectedDate(1);
    calcFirstDay();
    calcLastDate();
  };

  // 일별 누적시간 색상
  const DATE_BG_COLOR = {
    0: "transparent", // 0
    1: "rgba(115,91,242, .2)", // 0 - 3
    2: "rgba(115,91,242, .4)", // 3 - 6
    3: "rgba(115,91,242, .6)", // 6 - 9
    4: "rgba(115,91,242, .8)", // 9 이상
  };

  const getDateBgColor = (date: number) => {
    const accTime = getAccTime(date);
    if (accTime == 0) return DATE_BG_COLOR[0];
    if (accTime > 9) return DATE_BG_COLOR[4];
    if (accTime > 6) return DATE_BG_COLOR[3];
    if (accTime > 3) return DATE_BG_COLOR[2];
    return DATE_BG_COLOR[1];
    console.log("accTime: ", date, accTime);
  };

  const checkPastToday = (date: number) => {
    if (showYear() < today.value.getFullYear()) return true; // 지난 년도
    if (showMonth() < today.value.getMonth()) return true;
    if (date < today.value.getDate()) return true;
    return false;
  };

  const checkToday = (date: number) => {
    if (date !== today.value.getDate()) return false;
    if (showYear() !== today.value.getFullYear()) return false;
    if (showMonth() !== today.value.getMonth()) return false;
    return true;
  };

  const getDateColor = (date: number) => {
    if (checkPastToday(date)) return "var(--color-black)";
  };

  const getAccTime = (date: number) => {
    let duration = 0;
    logs.value.inOutLogs.forEach((log) => {
      const logTime = new Date(log.inTimeStamp * 1000);
      const LogYear = logTime.getFullYear();
      const logMonth = logTime.getMonth();
      const logDate = logTime.getDate();
      if (
        LogYear === showYear() &&
        logMonth === showMonth() &&
        logDate === date
      ) {
        duration += log.durationSecond;
      }
      // data가 정렬되어있는 경우, 속도 빨라질수 있는 부분
      // if (startDate > date) return duration / 3600;
    });
    return duration / 3600;
  };

  return {
    getLogs,
    setLogs,
    showToday,
    showSelectedDate,
    setSelectedDate,
    resetSelectedDate,
    showYear,
    showMonth,
    showLastDate,
    showDay,
    prevMonth,
    nextMonth,
    getDateBgColor,
    getDateColor,
    checkToday,
  };
});

interface inOutLog {
  inTimeStamp: number;
  outTimeStamp: number;
  durationSecond: number;
}

interface LogsData {
  login: string;
  profileImage: string;
  inOutLogs: inOutLog[];
}

const logDatas: LogsData = {
  login: "inshin",
  profileImage:
    "https://cdn.intra.42.fr/users/04ba9ce3bea8ac58a3ff7c7bd55af2fc/inshin.jpg",
  inOutLogs: [
    {
      inTimeStamp: 1676699708,
      outTimeStamp: 1676704765,
      durationSecond: 5057,
    },
    {
      inTimeStamp: 1676608040,
      outTimeStamp: 1676629116,
      durationSecond: 21076,
    },
    {
      inTimeStamp: 1676606223,
      outTimeStamp: 1676607054,
      durationSecond: 831,
    },
    {
      inTimeStamp: 1676592228,
      outTimeStamp: 1676603885,
      durationSecond: 11657,
    },
    {
      inTimeStamp: 1676516373,
      outTimeStamp: 1676549277,
      durationSecond: 32904,
    },
    {
      inTimeStamp: 1676511176,
      outTimeStamp: 1676513849,
      durationSecond: 2673,
    },
    {
      inTimeStamp: 1676454077,
      outTimeStamp: 1676470213,
      durationSecond: 16136,
    },
    {
      inTimeStamp: 1676433448,
      outTimeStamp: 1676451942,
      durationSecond: 18494,
    },
    {
      inTimeStamp: 1676426980,
      outTimeStamp: 1676432485,
      durationSecond: 5505,
    },
    {
      inTimeStamp: 1676364497,
      outTimeStamp: 1676382381,
      durationSecond: 17884,
    },
    {
      inTimeStamp: 1676346280,
      outTimeStamp: 1676363269,
      durationSecond: 16989,
    },
    {
      inTimeStamp: 1676340730,
      outTimeStamp: 1676343573,
      durationSecond: 2843,
    },
    {
      inTimeStamp: 1676334865,
      outTimeStamp: 1676340012,
      durationSecond: 5147,
    },
    {
      inTimeStamp: 1676280346,
      outTimeStamp: 1676296930,
      durationSecond: 16584,
    },
    {
      inTimeStamp: 1676266477,
      outTimeStamp: 1676279805,
      durationSecond: 13328,
    },
    {
      inTimeStamp: 1675488017,
      outTimeStamp: 1675514746,
      durationSecond: 26729,
    },
    {
      inTimeStamp: 1675413819,
      outTimeStamp: 1675430916,
      durationSecond: 17097,
    },
    {
      inTimeStamp: 1675400333,
      outTimeStamp: 1675412926,
      durationSecond: 12593,
    },
  ],
};
