<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import MenuBar from "@/components/common/MenuBar.vue.js";
import HeaderBar from "@/components/common/HeaderBar.vue.js";

const route = useRoute();

const checkValidRoute = (visibleRoutes: string[]) => {
  return visibleRoutes.includes(route.name as string);
};
</script>

<template>
  <HeaderBar v-if="checkValidRoute(['home'])" />
  <RouterView />
  <MenuBar
    v-if="checkValidRoute(['home', 'calendar', 'more', 'notification'])"
  />
</template>

<style scoped></style>
