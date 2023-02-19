import { ref } from "vue";
import { defineStore } from "pinia";

export const useMonthLogStore = defineStore("MonthLog", () => {
  // api에서 받아온 데이터
  const logs = ref(logDatas);
  // 오늘 날짜
  const today = ref(new Date());
  // 2023 현재 보이는 년도
  const year = ref(today.value.getFullYear());
  // 0 ~ 11 현재 보이는 달
  const month = ref(today.value.getMonth());
  // 현재 월 1일의 요일
  const day = ref(new Date(year.value, month.value).getDay());
  // 현재 월의 총 일수
  const lastDate = ref(new Date(year.value, month.value + 1, 0).getDate());
  // 선택한 일
  const selectDate = ref(today.value.getDate());

  // 2023. 2 캘린더 타이틀
  const dateTitle = ref(`${year.value}. ${month.value + 1}`);

  const showLogs = () => {
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

  // 요일 계산
  const showDayText = () => {
    const day = new Date(year.value, month.value, selectDate.value).getDay();
    switch (day) {
      case 0:
        return "일";
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
    }
  };

  // 선택한 날짜 텍스트 (2.20 월요일)
  const showSelectedDateText = () => {
    return `${showMonth() + 1}.${showSelectedDate()} ${showDayText()}요일`;
  };

  const showDateTitle = () => {
    return dateTitle.value;
  };
  const setDateTitle = () => {
    dateTitle.value = `${showYear()}. ${showMonth() + 1}`;
  };

  // 오늘 날짜로 초기화
  const resetSelectedDate = () => {
    selectDate.value = today.value.getDate();
    year.value = today.value.getFullYear();
    month.value = today.value.getMonth();
    day.value = new Date(year.value, month.value).getDay();
    lastDate.value = new Date(year.value, month.value + 1, 0).getDate();
    setDateTitle();
  };

  // 해당 월 1일의 요일 계산하기
  const calcFirstDay = () => {
    day.value = new Date(year.value, month.value).getDay();
  };

  // 월 마지막 날짜(총 일수) 계산하기
  const calcLastDate = () => {
    lastDate.value = new Date(year.value, month.value + 1, 0).getDate();
  };

  // 24HANE 데이터가 시작된 날짜
  const FIRST_DAY = {
    year: 2022,
    month: 8,
    day: 1,
  };

  // 달력에 보여줄 날짜 계산하기
  const calcOptions = () => {
    const options = [];
    for (let year = FIRST_DAY.year; year <= showToday().getFullYear(); year++) {
      if (year == FIRST_DAY.year) {
        for (let month = FIRST_DAY.month - 1; month < 12; month++) {
          options.push(`${year}. ${month + 1}`);
        }
        continue;
      } else {
        for (let month = 0; month <= showToday().getMonth(); month++) {
          options.push(`${year}. ${month + 1}`);
        }
      }
    }
    return options;
  };

  // 이전 달 버튼 클릭
  const prevMonth = () => {
    if (year.value === 2022 && month.value <= 7) return;
    month.value--;
    if (month.value < 0) {
      month.value = 11;
      year.value--;
    }
    setSelectedDate(1);
    calcFirstDay();
    calcLastDate();
    setDateTitle();
  };

  // 다음 달 버튼 클릭
  const nextMonth = () => {
    if (
      today.value.getFullYear() === year.value &&
      today.value.getMonth() === month.value
    )
      return;
    month.value++;
    if (month.value > 11) {
      month.value = 0;
      year.value++;
    }
    setSelectedDate(1);
    calcFirstDay();
    calcLastDate();
    setDateTitle();
  };

  // 일별 누적시간 색상 컬러셋
  const DATE_BG_COLOR = {
    0: "transparent", // 0
    1: "rgba(115,91,242, .2)", // 0 - 3
    2: "rgba(115,91,242, .4)", // 3 - 6
    3: "rgba(115,91,242, .6)", // 6 - 9
    4: "rgba(115,91,242, .8)", // 9 이상
  };

  // 일별 누적시간 색상 계산
  const getDateBgColor = (date: number) => {
    const accTime = getDateAccTime(date);
    if (accTime == 0) return DATE_BG_COLOR[0];
    if (accTime > 9) return DATE_BG_COLOR[4];
    if (accTime > 6) return DATE_BG_COLOR[3];
    if (accTime > 3) return DATE_BG_COLOR[2];
    return DATE_BG_COLOR[1];
  };

  // 일별 로그타임 계산
  interface Log {
    inLogTime: string;
    outLogTime: string;
    accLogTime: string;
  }

  const viewLogs = ref<Log[]>([]);

  const setDisit: string = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  const changeTimetext = (accTime: number) => {
    const hour = Math.floor(accTime / 3600);
    const min = Math.floor((accTime % 3600) / 60);
    const sec = Math.floor((accTime % 3600) % 60);

    return `${setDisit(hour)}:${setDisit(min)}:${setDisit(sec)}`;
  };

  const getDateLogs: Log[] = () => {
    const tempLogs: Log[] = [];
    logs.value.inOutLogs.forEach((log) => {
      const inLogTime = new Date(log.inTimeStamp * 1000);
      const outLogTime = new Date(log.outTimeStamp * 1000);
      const accLogTime = log.durationSecond;
      const LogYear = inLogTime.getFullYear();
      const logMonth = inLogTime.getMonth();
      const logDate = inLogTime.getDate();
      if (
        LogYear === showYear() &&
        logMonth === showMonth() &&
        logDate === selectDate.value
      ) {
        tempLogs.push({
          inLogTime: `${setDisit(inLogTime.getHours())}:${setDisit(
            inLogTime.getMinutes()
          )}:${setDisit(inLogTime.getSeconds())}`,
          outLogTime: `${setDisit(outLogTime.getHours())}:${setDisit(
            outLogTime.getMinutes()
          )}:${setDisit(outLogTime.getSeconds())}`,
          accLogTime: changeTimetext(accLogTime),
        });
      }
    });
    viewLogs.value = tempLogs;
  };

  const showDataLogs = () => {
    getDateLogs();
    return viewLogs.value;
  };

  // 일별 누적시간 계산
  const getDateAccTime = (date: number) => {
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

  // 선택된 날짜의 누적시간 계산
  const getSelectedDateAccTimeText = () => {
    const accTime = getDateAccTime(showSelectedDate());
    const hour = Math.floor(accTime);
    const min = Math.floor((accTime - hour) * 60);
    if (hour === 0 && min === 0) return "0분";
    return `${hour}시간 ${min}분`;
  };

  // 선택된 월의 누적시간 계산
  const getMonthAccTime = () => {
    let duration = 0;
    logs.value.inOutLogs.forEach((log) => {
      const inTime = new Date(log.inTimeStamp * 1000);
      const LogYear = inTime.getFullYear();
      const logMonth = inTime.getMonth();
      if (
        !!log.outTimeStamp &&
        LogYear === showYear() &&
        logMonth === showMonth()
      ) {
        duration += log.durationSecond;
      }
    });
    return duration / 3600;
  };

  // 선택된 월의 누적시간 텍스트
  const getMonthAccTimeText = () => {
    const accTime = getMonthAccTime();
    const hour = Math.floor(accTime);
    const min = Math.floor((accTime - hour) * 60);
    if (hour === 0 && min === 0) return "0분";
    return `${hour}시간 ${min}분`;
  };

  // 캘린더 날짜 색상
  const getDateColor = (date: number) => {
    if (checkPastToday(date)) return "var(--color-black)";
  };

  // 오늘보다 과거인지 체크
  const checkPastToday = (date: number) => {
    if (showYear() < today.value.getFullYear()) return true; // 지난 년도
    if (showMonth() < today.value.getMonth()) return true;
    if (date < today.value.getDate()) return true;
    return false;
  };

  // 오늘인지 체크
  const checkToday = (date: number) => {
    if (date !== today.value.getDate()) return false;
    if (showYear() !== today.value.getFullYear()) return false;
    if (showMonth() !== today.value.getMonth()) return false;
    return true;
  };

  // 캘린더 제목으로 월 선택 시
  const selectMonth = () => {
    const dateArr = showDateTitle().split(". ");
    year.value = Number(dateArr[0]);
    month.value = Number(dateArr[1]) - 1;
    setSelectedDate(1);
    calcFirstDay();
    calcLastDate();
  };

  return {
    showLogs,
    setLogs,
    showToday,
    showYear,
    showMonth,
    showLastDate,
    showDay,
    showSelectedDate,
    setSelectedDate,
    resetSelectedDate,
    showSelectedDateText,
    getSelectedDateAccTimeText,
    getMonthAccTimeText,
    showDataLogs,
    dateTitle,
    showDateTitle,
    setDateTitle,
    calcOptions,
    prevMonth,
    nextMonth,
    getDateBgColor,
    getDateColor,
    checkToday,
    selectMonth,
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
