<script setup lang="ts">
const props = defineProps<{
  color?: string;
}>();
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM7 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15H7C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17ZM17 13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13ZM7 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9Z"
      v-bind:fill="props.color ? props.color : '#5B5B5B'"
    />
  </svg>
</template>
