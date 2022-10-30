<template>
  <div class="course">
    <el-space class="course-tab" :size="20">
      <div
        :class="[
          active === item.id ? 'active-class' : '',
          'course-tab-item',
          'hover-class',
        ]"
        v-for="(item, index) in tabList"
        :key="'tabList' + `${index}`"
      >
        {{ item.title }}
      </div>
    </el-space>
    <div class="course-main">
      <div
        v-for="(item, index) in mainList[active]?.list"
        :key="'mainList' + `${index}`"
        class="course-main-item"
      >
        <div class="course-main-item-pic">
          <img @click="clickMessage" :src="item.img" class="img" />
        <span
          :class="[
            'course-main-item-flag',
            'course-main-item-flag-' +
              `${['easy', 'medium', 'difficulty'][item.difficulty]}`,
          ]"
          >{{ ["简单", "中等", "困难"][item.difficulty] }}</span
        >
        </div>
        <div class="course-main-item-title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { clickMessage } from "@/utils/commonFun";
const tabList = [
  { id: 0, title: "编辑推荐" },
  { id: 1, title: "低年级（三年级或以下）" },
  { id: 2, title: "高年级（四年级或以上）" },
  { id: 3, title: "初中及以上" },
];

const mainList = [
  {
    id: 0,
    list: [
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_fv4dtm89rf4.png",
        difficulty: 0,
        title: "欢乐打地鼠",
      },
      {
        img: "https://p.qpic.cn/qqgameedu/0/41d677564ffeed6110f452f70c691d66/0",
        difficulty: 1,
        title: "保卫农场",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_2ldwryeur4j.png",
        difficulty: 0,
        title: "旋转摩天轮",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_5ev5qjofm5u.png",
        difficulty: 1,
        title: "开动汽车",
      },
      {
        img: "https://p.qpic.cn/qqgameedu/0/57f1729002eb5790f335a8b6aad03fda/0",
        difficulty: 1,
        title: "躲避陨石",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_s2e1kqnvox.png",
        difficulty: 0,
        title: "埃舍尔视觉错觉作品",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200608_232p1644um8.png",
        difficulty: 0,
        title: "Python-Turtle 初识",
      },
      {
        img: "https://p.qpic.cn/qqgameedu/0/9f9957f843abe3a29ec671f6162ed392/0",
        difficulty: 0,
        title: "科普八大行星",
      },
    ],
  },
];
const active = ref(0);
</script>
<style lang="scss" scoped>
.course {
  &-tab {
    width: 100%;
    display: flex;
    justify-content: center;
    &-item {
      padding: 0 20px;
      border-radius: 17px;
      line-height: 34px;
      font-size: 16px;
      background-color: rgba(74, 89, 111, 0.1);
    }
    .active-class {
      background-color: #1e80ff;
      color: #fff;
    }
  }
  &-main {
    padding-top: 20px;
    box-sizing: border-box;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      width: 24%;
      border-radius: 4px 4px 0 0;
      transition: all 200ms;
      position: relative;
      padding-bottom: 30px;
      box-sizing: border-box;
      &-pic {
        height: 226px;
        width: 100%;
        overflow: hidden;
        cursor: pointer;
          border-radius: 4px 4px 0 0;
        .img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          border-radius: 4px 4px 0 0;
          transform: scale(1) translateZ(0);
          transition: all 220ms;
          &:hover {
          border-radius: 4px 4px 0 0;
            transform: scale(1.02);
          }
        }
      }
      &-title {
        margin-top: 10px;
      }
      &-flag {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 12px;
        color: #fff;
        width: 50px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
        border-radius: 2px 11px 11px 2px;
        z-index: 1;
      }
      &-flag-easy {
        background-color: #00ce9e;
      }
      &-flag-medium {
        background-color: #ff9d00;
      }
      &-flag-difficulty {
        background-color: #ff666f;
      }
    }
  }
}
</style>
