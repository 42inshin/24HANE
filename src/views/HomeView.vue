<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import FoldCard from "@/components/home/FoldCard.vue";
import UserNumSection from "@/components/home/UserNumSection.vue";
import BarChartCard from "@/components/home/BarChartCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { homeStore } from "@/stores/home";

const {
  apiMainInfo,
  apiAccTimes,
  getAccDate,
  getAccMonth,
  getWeeklyGraph,
  getMonthlyGraph,
  getNumberOfPeople,
} = homeStore();

const todayAccTime = ref({
  hour: 0,
  minute: 0,
});
const monthAccTime = ref({
  hour: 0,
  minute: 0,
});

const getWeeklyData = ref([]);
const getMonthlyData = ref([]);

onBeforeMount(() => {
  apiMainInfo();
  apiAccTimes();
  getAccDate();
  getAccMonth();
  getWeeklyGraph();
  getMonthlyGraph();
});
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
        <BarChartCard class="m-16 slide"></BarChartCard>
      </swiper-slide>
      <swiper-slide>
        <BarChartCard class="m-16 slide"></BarChartCard>
      </swiper-slide>
    </swiper>
    <UserNumSection />
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
