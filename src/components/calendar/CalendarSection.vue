<script setup lang="ts">
import { ref } from "vue";
import CalPagination from "@/components/calendar/CalPagination.vue";
import { useMonthLogStore } from "@/stores/monthlog";
import CalWeek from "@/components/calendar/CalWeek.vue";

const monthLog = useMonthLogStore();
const {
  showToday,
  showSelectedDate,
  showMonth,
  showLastDate,
  showDay,
  getDateBgColor,
  getDateColor,
  setSelectedDate,
} = monthLog;

const today = new Date();

const clickDate = (date: number) => {
  setSelectedDate(date);
};
</script>

<template>
  <div class="wrap">
    <CalPagination />
    <div class="calendar">
      <CalWeek />
      <div class="days">
        <div v-for="day in showDay()" :key="day" class="noday"></div>
        <div
          v-for="date in showLastDate()"
          :key="date"
          @click="clickDate(date)"
          class="day"
          :style="{
            background: getDateBgColor(date),
            color: getDateColor(date),
          }"
          :class="{
            today: today.getMonth() === showMonth() && date === showToday(),
            selected: date === showSelectedDate(),
          }"
        >
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  user-select: none;
}

.days .day {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--gray);
  font-size: 0.875rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin: 0 auto;
  transition: all 0.2s ease-in-out;
}

.today {
  color: var(--color-primary) !important;
  border: 1px solid var(--color-primary);
}
/* .today::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  border: 1px solid var(--color-primary);
  border-radius: 14px;
} */

.days > .day.selected {
  background-color: var(--color-primary) !important;
  color: var(--white) !important;
  font-weight: 700;
  border-radius: 50%;
  border: none;
}
/* .day.selected::after {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
} */
</style>
