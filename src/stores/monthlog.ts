import { ref } from "vue";
import { defineStore } from "pinia";

export const useMonthLogStore = defineStore("MonthLog", () => {
  const year = ref(new Date().getFullYear());
  const month = ref(new Date().getMonth());
  const logs = ref(logDatas);

  return { year, month, logs };
});

const logDatas = {
  login: "inshin",
  profileImage:
    "https://cdn.intra.42.fr/users/04ba9ce3bea8ac58a3ff7c7bd55af2fc/inshin.jpg",
  inOutLogs: [
    {
      inTimeStamp: 1675164307,
      outTimeStamp: 1675172890,
      durationSecond: 8583,
    },
    {
      inTimeStamp: 1675155937,
      outTimeStamp: 1675161713,
      durationSecond: 5776,
    },
    {
      inTimeStamp: 1675140936,
      outTimeStamp: 1675155101,
      durationSecond: 14165,
    },
    {
      inTimeStamp: 1675082265,
      outTimeStamp: 1675089313,
      durationSecond: 7048,
    },
    {
      inTimeStamp: 1675072995,
      outTimeStamp: 1675082034,
      durationSecond: 9039,
    },
    {
      inTimeStamp: 1675068825,
      outTimeStamp: 1675069950,
      durationSecond: 1125,
    },
    {
      inTimeStamp: 1674984280,
      outTimeStamp: 1674998367,
      durationSecond: 14087,
    },
    {
      inTimeStamp: 1674980948,
      outTimeStamp: 1674981107,
      durationSecond: 159,
    },
    {
      inTimeStamp: 1674881371,
      outTimeStamp: 1674895173,
      durationSecond: 13802,
    },
    {
      inTimeStamp: 1674797734,
      outTimeStamp: 1674823880,
      durationSecond: 26146,
    },
    {
      inTimeStamp: 1674796809,
      outTimeStamp: 1674797477,
      durationSecond: 668,
    },
    {
      inTimeStamp: 1674734194,
      outTimeStamp: 1674740693,
      durationSecond: 6499,
    },
    {
      inTimeStamp: 1674714622,
      outTimeStamp: 1674729777,
      durationSecond: 15155,
    },
    {
      inTimeStamp: 1674705897,
      outTimeStamp: 1674713829,
      durationSecond: 7932,
    },
    {
      inTimeStamp: 1674019410,
      outTimeStamp: 1674045225,
      durationSecond: 25815,
    },
    {
      inTimeStamp: 1673949823,
      outTimeStamp: 1673960288,
      durationSecond: 10465,
    },
    {
      inTimeStamp: 1673927967,
      outTimeStamp: 1673946667,
      durationSecond: 18700,
    },
    {
      inTimeStamp: 1673856196,
      outTimeStamp: 1673873524,
      durationSecond: 17328,
    },
    {
      inTimeStamp: 1673846474,
      outTimeStamp: 1673855391,
      durationSecond: 8917,
    },
    {
      inTimeStamp: 1673603442,
      outTimeStamp: 1673612257,
      durationSecond: 8815,
    },
    {
      inTimeStamp: 1673585724,
      outTimeStamp: 1673603438,
      durationSecond: 17714,
    },
    {
      inTimeStamp: 1673496358,
      outTimeStamp: 1673513404,
      durationSecond: 17046,
    },
    {
      inTimeStamp: 1673429725,
      outTimeStamp: 1673443304,
      durationSecond: 13579,
    },
    {
      inTimeStamp: 1673410785,
      outTimeStamp: 1673429638,
      durationSecond: 18853,
    },
    {
      inTimeStamp: 1672809398,
      outTimeStamp: 1672824128,
      durationSecond: 14730,
    },
    {
      inTimeStamp: 1672723069,
      outTimeStamp: 1672751940,
      durationSecond: 28871,
    },
    {
      inTimeStamp: 1672671600,
      outTimeStamp: 1672671820,
      durationSecond: 220,
    },
    {
      inTimeStamp: 1672634839,
      outTimeStamp: 1672671599,
      durationSecond: 36760,
    },
  ],
};
