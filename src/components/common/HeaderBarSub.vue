<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="wrap">
    <h2>{{ props.title }}</h2>
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 30px;
  z-index: 9;
}

h2 {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
