<script setup lang="ts">
import { ref, watch } from "vue";
import LogoIcon from "@/components/icons/IconLogo.vue";
import NotificationIconFill from "@/components/icons/IconNotificationFill.vue";
import NotificationIconLine from "@/components/icons/IconNotificationLine.vue";
import { homeStore } from "@/stores/home";

const { getUserInfo } = homeStore();

const userInfo = ref(getUserInfo());
const isNotification = ref(false);

watch(
  () => getUserInfo(),
  () => {
    userInfo.value = getUserInfo();
  }
);
</script>

<template>
  <nav class="wrap">
    <div class="profile">
      <div class="profileImg">
        <img
          v-if="!!userInfo.profileImage"
          :src="userInfo.profileImage"
          alt="프로필 이미지"
        />
        <LogoIcon v-else />
      </div>
      <h2>{{ userInfo.login }} 님</h2>
    </div>
    <RouterLink
      to="/notification"
      class="notification"
      :class="{ on: isNotification }"
    >
      <NotificationIconFill v-if="isNotification" />
      <NotificationIconLine v-else />
    </RouterLink>
  </nav>
</template>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px 10px 30px;
  z-index: 9;
  background: var(--header-bg);
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
.profileImg svg,
.profileImg img {
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
  top: 0px;
  left: calc(50% - 2px);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: red;
}
</style>
