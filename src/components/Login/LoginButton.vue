<script setup lang="ts">
import { getAccessToken } from "@/utils/cookie";
const originURL = window.location.origin;
const backendURL = import.meta.env.VITE_APP_API_URL;
console.log(`${backendURL}/user/login/42?redirect=${originURL}/auth`);
console.log(getAccessToken());
</script>

<template>
  <button class="button">
    <a :href="`${backendURL}/user/login/42?redirect=${originURL}/auth`"
      >LOG IN</a
    >
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  border: none;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  background-color: var(--color-background-btn);
  max-width: 330px;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--color-heading-on);
  font-weight: 700;
  padding: 0;
}
.button a {
  display: block;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
