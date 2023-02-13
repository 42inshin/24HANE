<script setup lang="ts">
import { ref } from "vue";
import LogoIcon from "@/components/icons/IconLogo.vue";
import NotificationIconFill from "@/components/icons/IconNotificationFill.vue";
import NotificationIconLine from "@/components/icons/IconNotificationLine.vue";

const intraId = ref("Anonymouse");
const isNotification = ref(false);
</script>

<template>
  <nav class="wrap">
    <div class="profile">
      <div class="profileImg">
        <LogoIcon />
      </div>
      <h2>{{ intraId }} 님</h2>
    </div>
    <div class="notification" :class="{ on: isNotification }">
      <NotificationIconFill v-if="isNotification" />
      <NotificationIconLine v-else />
    </div>
  </nav>
</template>

<style scoped>
.wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 0 30px;
  z-index: 9;
}

.profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  user-select: none;
}

.profileImg {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}
.profileImg svg {
  width: 100%;
  height: 100%;
}

.profile h2 {
  margin-left: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-heading);
}

.notification {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  cursor: pointer;
}

.notification.on::before {
  content: "";
  position: absolute;
  display: block;
  top: 6px;
  left: calc(50% - 2px);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: red;
}
</style>
