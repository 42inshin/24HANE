<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import FoldCard from "@/components/home/FoldCard.vue";
import UserNumSection from "@/components/home/UserNumSection.vue";
import BarChartCard from "@/components/home/BarChartCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useHomeStore } from "@/stores/home";
import { useMonthLogStore } from "@/stores/monthlog";

const { apiMainInfo, getWeeklyGraph, getMonthlyGraph, getNumberOfPeople } =
  useHomeStore();

const {
  apiLogsNowMonthData,
  getNowMonthAccTimeText,
  getNowDateAccTimeText,
  showNowMonthLogs,
} = useMonthLogStore();

onBeforeMount(() => {
  apiMainInfo();
  apiLogsNowMonthData();
});

const todayAccTime = ref(getNowDateAccTimeText());
const monthAccTime = ref(getNowMonthAccTimeText());
const getWeeklyData = ref(getWeeklyGraph());
const getMonthlyData = ref(getMonthlyGraph());
const numberOfPeople = ref(getNumberOfPeople());

watch(
  () => showNowMonthLogs(),
  () => {
    todayAccTime.value = getNowDateAccTimeText();
    console.log("오늘 누적", todayAccTime.value);
  }
);

watch(showNowMonthLogs, () => {
  monthAccTime.value = getNowMonthAccTimeText();
  console.log("월 누적", monthAccTime.value);
});

watch(
  () => getWeeklyGraph(),
  () => {
    getWeeklyData.value = getWeeklyGraph();
    console.log("주간 그래프", getWeeklyData.value);
  }
);

watch(
  () => getMonthlyGraph(),
  () => {
    getMonthlyData.value = getMonthlyGraph();
    console.log("월간 그래프", getMonthlyData.value);
  }
);

watch(
  () => getNumberOfPeople(),
  () => {
    numberOfPeople.value = getNumberOfPeople();
  }
);
</script>

<template>
  <main>
    <FoldCard :hour="todayAccTime.hour" :min="todayAccTime.minute">
      <template #title>이용 시간</template>
    </FoldCard>
    <FoldCard
      class="m-16"
      :hour="monthAccTime.hour"
      :min="monthAccTime.minute"
      :isMonth="true"
    >
      <template #title>월 누적 시간</template>
    </FoldCard>
    <swiper
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :modules="[Pagination]"
    >
      <swiper-slide>
        <BarChartCard
          class="m-16 slide"
          :periodsData="getWeeklyData"
        ></BarChartCard>
      </swiper-slide>
      <swiper-slide>
        <BarChartCard
          class="m-16 slide"
          :periodsData="getMonthlyData"
        ></BarChartCard>
      </swiper-slide>
    </swiper>
    <UserNumSection :numberOfPeople="numberOfPeople" />
  </main>
</template>

<style scoped>
main {
  padding: 80px 30px;
}

.m-16 {
  margin-top: 16px;
}
.mainColor {
  background-color: var(--signatue-1);
  color: var(--white);
}
</style>
