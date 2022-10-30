<template>
  <el-collapse-transition>
    <div v-show="scrollValue > 200" class="scroll">
      <div
        @click="goToLaboratory('laboratory')"
        :class="[
          scrollValue - 760 >= 0 && 1586 - scrollValue > 0 ? 'active' : '',
          'scroll-item',
          'hover-class',
        ]"
      >
        实验室
      </div>
      <div
        @click="goToLaboratory('study')"
        :class="[
          scrollValue - 1586 >= 0 ? 'active' : '',
          'scroll-item',
          'hover-class',
        ]"
      >
        学好课
      </div>
      <div @click="goToLaboratory('nav')" class="scroll-item hover-class">
        回顶部
      </div>
    </div>
  </el-collapse-transition>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

onMounted(() => {
  window.addEventListener("scroll", scrollTop, true);
});
const scrollValue = ref(0);
// 实时滚动条高度
const scrollTop = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  scrollValue.value = scroll;
};

const goToLaboratory = (anchorName: string) => {
  let anchorElement = document.getElementById(anchorName);
  if (anchorElement) {
    anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};
</script>
<style lang="scss" scoped>
.scroll {
  position: fixed;
  right: 20px;
  bottom: 50px;
  width: 60px;
  background-color: #fff;
  box-shadow: 2px 2px 0 #ccc;
  &-item {
    height: 40px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    &:hover {
      background-color: #0080ff;
      color: #fff;
    }
  }
  .active {
    background-color: #0080ff;
    color: #fff;
  }
}
</style>
