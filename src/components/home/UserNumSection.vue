<script setup lang="ts">
import { ref } from "vue";
import UserNumCard from "@/components/home/UserNumCard.vue";

const userNumInGapo = ref(121);
const userNumInSeocho = ref(423);
</script>

<template>
  <section class="userNumSection">
    <h2>실시간 현황</h2>
    <div class="userNumCards">
      <UserNumCard class="m-8" :userNum="userNumInGapo">
        <template #title>개포</template>
      </UserNumCard>
      <UserNumCard class="m-8" :userNum="userNumInSeocho">
        <template #title>서초</template>
      </UserNumCard>
    </div>
  </section>
</template>

<style scoped>
.userNumSection {
  margin-top: 16px;
}

.userNumSection h2 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 8px;
}

.userNumCards {
  display: flex;
  justify-content: center;
  grid-gap: 20px;
}
</style>
