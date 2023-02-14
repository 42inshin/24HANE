<script setup lang="ts">
import { ref } from "vue";
import ChevronIcon from "@/components/icons/IconChevron.vue";
import CircleProgress from "@/components/home/CircleProgress.vue";

const props = defineProps<{
  hour: number;
  min: number;
  primaryColor?: boolean;
}>();

const isOpen = ref(false);
const goalTime = ref(0);
const colorSet = ref(props.primaryColor);

const culculatePercent = () => {
  if (goalTime.value === 0) return 0;
  return Math.round(((props.hour + props.min / 60) / goalTime.value) * 100);
};

const clickHandler = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    colorSet.value = false;
  } else {
    colorSet.value = props.primaryColor;
  }
};
</script>

<template>
  <div class="wrap" :class="{ on: isOpen, primaryColor: colorSet }">
    <div class="textWrap use" @click="clickHandler">
      <h2>
        <slot name="title"></slot>
      </h2>
      <div>
        <span class="timeNumber">
          {{ props.hour }}
        </span>
        <span class="timeText">시간{{ " " }}</span>
        <span class="timeNumber">
          {{ props.min }}
        </span>
        <span class="timeText">분</span>
        <div class="vIcon" :class="{ on: isOpen }">
          <ChevronIcon :primaryColor="colorSet" />
        </div>
      </div>
    </div>
    <div class="textWrap goal" :class="{ on: isOpen }">
      <h2>목표 시간</h2>
      <div>
        <select v-model="goalTime" class="timeNumber select">
          <option :value="0" selected>0</option>
          <option v-for="index in 24" :key="index" :value="index">
            {{ index }}
          </option>
        </select>
        <span class="timeText">시간</span>
      </div>
    </div>
    <CircleProgress :percent="culculatePercent()" :goalTime="goalTime" />
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  padding: 26px 20px;
}

.wrap.on {
  height: 260px;
}

.wrap.primaryColor {
  background-color: var(--color-primary);
}
.wrap.primaryColor .textWrap,
.wrap.primaryColor .textWrap .timeNumber {
  color: #fff;
}

.textWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: top;
}

.textWrap.use {
  cursor: pointer;
}

.textWrap.use.on {
  padding: 0;
}

.textWrap.goal {
  margin-top: 16px;
  margin-right: 20px;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}

.textWrap.goal.on {
  opacity: 1;
}

h2 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
}

.timeNumber {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
}

.goal .timeNumber {
  width: 50px;
  height: 30px;
  border: none;
  text-align: right;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: Inter, sans-serif;
}

.select {
  cursor: pointer;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
}

.timeText {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
}

.vIcon {
  display: inline-block;
  position: relative;
  margin-left: 10px;
  transition: transform 0.3s linear;
}

.vIcon.on {
  transform: rotate(90deg);
}
</style>
