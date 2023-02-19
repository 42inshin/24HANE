<script setup lang="ts">
import { useMonthLogStore } from "@/stores/monthlog";
const { getMonthAccTimeText } = useMonthLogStore();
</script>

<template>
  <div class="month">총 {{ getMonthAccTimeText() }}</div>
</template>

<style scoped>
.month {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin: 16px 0 20px;
  background-color: var(--black);
  color: var(--white);
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  border: 2px solid #fff;
}
</style>
