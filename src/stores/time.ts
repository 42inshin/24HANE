import { ref } from "vue";
import { defineStore } from "pinia";

export const useTimeStore = defineStore("useTime", () => {
  const dayHour = ref(0);
  const dayMinute = ref(0);
  const monthHour = ref(0);
  const monthMinute = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }

  return { dayHour, dayMinute, monthHour, monthMinute };
});
