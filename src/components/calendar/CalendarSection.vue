<script setup lang="ts">
import { ref } from "vue";
import VIcon from "@/components/icons/IconChevron.vue";
import { useMonthLogStore } from "@/stores/monthlog";

const monthLog = useMonthLogStore();
const year = ref(monthLog.year);
const month = ref(monthLog.month);
const lastDate = ref(new Date(year.value, month.value + 1, 0).getDate());
const day = ref(new Date(year.value, month.value).getDay());

const calcLastDate = () => {
  lastDate.value = new Date(year.value, month.value + 1, 0).getDate();
};

const calcFirstDay = () => {
  day.value = new Date(year.value, month.value).getDay();
  console.log(day.value);
};

const nextMonth = () => {
  month.value++;
  if (month.value > 11) {
    month.value = 0;
    year.value++;
  }
  calcFirstDay();
  calcLastDate();
};

const prevMonth = () => {
  month.value--;
  if (month.value < 0) {
    month.value = 11;
    year.value--;
  }
  calcFirstDay();
  calcLastDate();
};
</script>

<template>
  <div>
    <div class="pagination">
      <button @click="prevMonth">
        <VIcon :color="`var(--color-vbutton)`" />
      </button>
      <div class="title">{{ year }}. {{ month + 1 }}</div>
      <button @click="nextMonth">
        <VIcon :color="`var(--color-vbutton)`" />
      </button>
    </div>
    <div class="calendar">
      <div class="weekTitle">
        <div class="day">일</div>
        <div class="day">월</div>
        <div class="day">화</div>
        <div class="day">수</div>
        <div class="day">목</div>
        <div class="day">금</div>
        <div class="day">토</div>
      </div>
      <div class="days">
        <div v-for="i in day" :key="i" class="noday"></div>
        <div v-for="i in lastDate" :key="i" class="day">{{ i }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.pagination button {
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.pagination button:first-child {
  transform: rotate(180deg);
}
.pagination .title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-heading);
}

.calendar .weekTitle {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
}

.calendar .weekTitle .day {
  font-size: 0.75rem;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  margin-top: 12px;
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray);
  font-size: 0.875rem;
  cursor: pointer;
}
</style>
