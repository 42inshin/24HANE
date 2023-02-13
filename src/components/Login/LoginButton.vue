<script setup lang="ts"></script>

<template>
  <button class="button">
    <router-link to="/auth">LOG IN</router-link>
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
