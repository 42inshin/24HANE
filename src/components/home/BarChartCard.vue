<script setup lang="ts">
import { ref } from "vue";
const timeArr = ref([8, 0, 24, 31, 12, 0]);

const calcTimePercent = (time: number, times: number[]) => {
  const maxTime = Math.max(...times);
  const percent = Math.round((time / maxTime) * 100);
  if (percent === 0) return "6px";
  return percent + "%";
};

const clickIndex = ref(0);
</script>

<template>
  <div class="wrap">
    <h3>최근 주간 그래프<span> (6주)</span></h3>
    <div class="detailView">
      <div class="title">2.12(월) - 2.18(일)</div>
      <div class="timeView">
        <div class="time">총 42시간</div>
        <div class="time">평균 6.2시간</div>
      </div>
    </div>
    <ul>
      <li
        class="tapHighlight"
        :class="{ on: clickIndex == i }"
        v-for="(time, i) in timeArr"
        :key="i"
        @click="clickIndex = i"
      >
        <div :style="{ height: calcTimePercent(time, timeArr) }"></div>
      </li>
    </ul>
    <div class="preiodBox">
      <div class="period">
        <div class="text">최근 순</div>
        <div class="text">오래된 순</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 20px;
}

h3 {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--black);
}
h3 span {
  font-weight: 400;
  color: var(--gray);
}

.detailView {
  font-size: 0.75rem;
  color: #fff;
  text-align: right;
  margin-top: 10px;
  transition: transform 0.3s ease-in-out;
  background: var(--black);
  height: 60px;
  border-radius: 10px;
  padding: 11px 20px;
  display: flex;
  justify-content: space-between;
}

.detailView div {
  font-weight: 700;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px auto 0;
  height: 90px;
  padding: 0 20px;
  max-width: 280px;
}

ul li {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  height: 100%;
}

ul li:active {
  transform: scale(1.1) translateY(-5px);
}

ul li div {
  background: var(--bar-gradation);
  list-style: none;
  display: inline-block;
  width: 26px;
  border-radius: 4px 4px 0px 0px;
}

ul li.on::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: -21px;
  left: 4px;
  width: 0;
  height: 0;
  border-bottom: 8px solid transparent;
  border-top: 13px solid var(--black);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.preiodBox {
  margin-top: 4px;
}

.period {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 280px;
  padding: 0 20px;
  margin: 0 auto;
}
.text {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gray);
}
</style>
