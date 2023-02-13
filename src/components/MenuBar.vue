<script setup lang="ts"></script>

<template>
  <div class="wrap">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/calendar">Calendar</RouterLink>
      <RouterLink to="/more">More</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: red;
  filter: var(--menu-shadow);
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
nav a {
  
}
</style>
