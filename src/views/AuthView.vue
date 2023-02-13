<script setup lang="ts">
import TextLogoIcon from "@/components/icons/IconTextLogo.vue";
import router from "@/router";
import { onMounted } from "vue";

onMounted(() => {
  const timeout = 1500;

  setTimeout(() => {
    router.push("/home");
  }, timeout);
});
</script>

<template>
  <div class="wrap">
    <TextLogoIcon />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-background);
  padding: 30px;
}
</style>
