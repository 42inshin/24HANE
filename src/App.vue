<script setup lang="ts">
import { RouterView, type RouteRecordName, useRoute } from "vue-router";
import MenuBar from "@/components/MenuBar.vue";
import HeaderBar from "@/components/HeaderBar.vue";

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
