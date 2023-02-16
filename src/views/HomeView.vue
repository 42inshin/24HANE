<script setup lang="ts">
import { ref } from "vue";
import FoldCard from "@/components/home/FoldCard.vue";
import UserNumSection from "@/components/home/UserNumSection.vue";
import BarChartCard from "@/components/home/BarChartCard.vue";

const useHour = ref(12);
const useMinute = ref(42);
</script>

<template>
  <main>
    <FoldCard :hour="useHour" :min="useMinute">
      <template #title>이용 시간</template>
    </FoldCard>
    <FoldCard
      class="m-16"
      :hour="useHour"
      :min="useMinute"
      :primaryColor="true"
    >
      <template #title>월 누적 시간</template>
    </FoldCard>
    <BarChartCard class="m-16"></BarChartCard>
    <UserNumSection />
  </main>
</template>

<style scoped>
main {
  padding: 80px 30px 30px;
}

.m-16 {
  margin-top: 16px;
}
.mainColor {
  background-color: var(--signatue-1);
  color: var(--white);
}
</style>
