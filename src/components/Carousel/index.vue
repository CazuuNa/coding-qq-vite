<template>
  <div class="carousel">
    <el-carousel
      indicator-position="none"
      height="330"
      arrow="never"
      interval="5000"
      @change="onCarouselChange"
      ref="carousel"
    >
      <el-carousel-item v-for="item in list" :key="item.id" :name="item.id"
        ><el-image
          @click="clickImage"
          fit="fill"
          class="carousel-img"
          :src="item.img"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="indicator-main">
      <span class="prev hover-class icon-hover" @click="onCarouselPrevIndex">
        <el-icon :size="20">
          <ArrowLeft />
        </el-icon>
      </span>
      <div class="indicator-item">
        <span
          @click="onCarouselChangeIndex(index)"
          :class="[
            index === curCarouselIndex ? 'active-item' : '',
            'indicator-item-span',
            'hover-class',
          ]"
          v-for="(item, index) in list"
          :key="index"
          >{{ item.title }}</span
        >
      </div>
      <span class="next hover-class icon-hover" @click="onCarouselNextIndex">
        <el-icon :size="20"><ArrowRight /></el-icon>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";

import { ElMessage } from "element-plus";
const list = ref([
  {
    img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_2huzgbj4onv.png",
    title: "第四届追梦营",
    id: 0,
  },
  {
    img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20221017_i1n62bthmuobanner.png",
    title: "深圳创客节创意编程大赛",
    id: 1,
  },
  {
    img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220901_rz0z7qqh2gtgebanner.jpg",
    title: "深圳TGE虚拟机器人挑战赛",
    id: 2,
  },
  {
    img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_9e0choci7rg_20220909101245.jpg",
    title: "编程与人工智能活动",
    id: 3,
  },
  {
    img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20211230_u9kh06gxj4a79e15a997c42203c515773168a900f9.jpg",
    title: "腾讯游戏年度故事片",
    id: 4,
  },
]);

const carousel = ref<HTMLFormElement>();

let curCarouselIndex = ref(0);
const onCarouselChange = (key: number) => {
  curCarouselIndex.value = key;
};

const onCarouselChangeIndex = (index: number) => {
  carousel.value?.setActiveItem(index);
};

const onCarouselPrevIndex = () => {
  carousel.value?.setActiveItem(curCarouselIndex.value - 1);
};

const onCarouselNextIndex = () => {
  carousel.value?.setActiveItem(curCarouselIndex.value + 1);
};

const clickImage = () => {
  ElMessage({
    message: "开发中，敬请期待！",
    type: "warning",
    showClose: true,
  });
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  .carousel-img {
    cursor: pointer;
  }
  .indicator-main {
    position: absolute;
    width: 1200px;
    left: 50%;
    bottom: 0;
    margin-left: -600px;
    height: 50px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    z-index: 9;
    display: flex;

    .prev {
      display: flex;
      border-right: 1px solid rgba(255, 255, 255, 0.6);
      width: 50px;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    .indicator-item {
      flex: 1;
      display: flex;
      &-span {
        flex: 1;
        border-right: 1px solid rgba(255, 255, 255, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .active-item {
        color: #009cff;
        border-bottom: 2px solid #009cff;
      }
    }
    .next {
      display: flex;
      // border-left: 1px solid rgba(255, 255, 255, 0.6);
      width: 50px;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    .icon-hover:hover {
      background-color: #fff;
    }
    
  }
  .indicator-main::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 6px;
    width: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));
  }
}
</style>
