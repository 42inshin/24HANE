<script setup lang="ts">
import { ref } from "vue";
import VIcon from "@/components/icons/IconChevron.vue";
import { useMonthLogStore } from "@/stores/monthlog";

const monthLog = useMonthLogStore();
const { showDateTitle, calcOptions, nextMonth, prevMonth, selectMonth } =
  monthLog;
</script>

<template>
  <div class="pagination tapHighlight">
    <button @click="prevMonth">
      <VIcon :color="`var(--color-vbutton)`" />
    </button>
    <select
      class="title select"
      @change="selectMonth"
      v-model="monthLog.dateTitle"
      name="year-month"
    >
      <option
        v-for="(date, i) in calcOptions()"
        :key="i"
        :value="date"
        :selected="showDateTitle() === date"
      >
        {{ date }}
      </option>
    </select>
    <button @click="nextMonth">
      <VIcon :color="`var(--color-vbutton)`" />
    </button>
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
  user-select: none;
  cursor: pointer;
  text-align: center;
  font-family: var(--font-family);
}

.select {
  cursor: pointer;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
}
</style>
