<script setup lang="ts">
import { RouterView, type RouteRecordName } from "vue-router";
import MenuBar from "@/components/MenuBar.vue";
import HeaderBar from "@/components/HeaderBar.vue";

const checkValidRoute = (routeName: RouteRecordName | null | undefined) => {
  const unvisableRoutes = ["login", "auth"];
  return !unvisableRoutes.includes(routeName as string);
};
</script>

<template>
  <HeaderBar v-if="checkValidRoute($route.name)" />
  <RouterView />
  <MenuBar v-if="checkValidRoute($route.name)" />
</template>

<style scoped></style>
