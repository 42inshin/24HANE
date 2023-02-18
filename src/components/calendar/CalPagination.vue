<script setup lang="ts">
import VIcon from "@/components/icons/IconChevron.vue";
import { useMonthLogStore } from "@/stores/monthlog";

const monthLog = useMonthLogStore();
const { showYear, showMonth, nextMonth, prevMonth } = monthLog;
</script>

<template>
  <div class="pagination">
    <button @click="prevMonth">
      <VIcon :color="`var(--color-vbutton)`" />
    </button>
    <div class="title">{{ showYear() }}. {{ showMonth() + 1 }}</div>
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
}
</style>
