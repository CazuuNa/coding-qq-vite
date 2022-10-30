<template>
  <div class="main-content bg-gary">
    <div class="hot-notice">
      <i class="hot-notice-voice hot-notice-spr"></i>
      <el-carousel
        height="22px"
        class="hot-notice-message"
        direction="vertical"
        arrow="never"
      >
        <el-carousel-item v-for="item in data" :key="item.id">
          <span class="hover-class">{{ item.message }}</span>
          <svg-icon iconName="icon-hot"></svg-icon>
        </el-carousel-item>
      </el-carousel>
    </div>
    <MainItem title="赛事活动专区" :isHot="true">
      <div class="competition-activity">
        <div
          class="competition-activity-item"
          v-for="(item, index) in CompetitionActivityList"
          :key="index"
        >
          <el-image
            :src="item.image"
            fit="fill"
            @click="clickMessage"
          ></el-image>
          <div class="competition-activity-item-main">
            <div class="hover-class" @click="clickMessage">
              {{ item.title }}
            </div>
            <div class="competition-activity-item-main-btn">
              <el-button
                size="large"
                @click="clickMessage"
                type="primary"
                round
                >{{
                  item.CompetitionOrActivity === "1" ? "活动首页" : "大赛首页"
                }}</el-button
              >
              <el-button size="large" @click="clickMessage" round>{{
                item.CompetitionOrActivity === "1" ? "课程资源" : "赛事课程"
              }}</el-button>
            </div>
          </div>
        </div>
      </div>
    </MainItem>

    <MainItem
      title="编程好工具，学习更轻松"
      :isHot="false"
      info="选择适合你的编程神器"
      id="laboratory"
    >
      <StudyLabs></StudyLabs>
    </MainItem>
  </div>
  <div class="main-content" id="study">
    <MainItem title="趣味课程，名师名家带你学" :isHot="false" info="学习丰富的权威认证课程">
    <Course></Course>
  </MainItem>
  </div>
</template>

<script lang="ts" setup>
import MainItem from "@/components/common/MainItem.vue";
import StudyLabs from "@/components/common/StudyLabs.vue";
import Course from "@/components/common/Course.vue";
import { clickMessage } from "@/utils/commonFun";
const data = [
  {
    message: "腾讯编程课进村，这是孩子们创作的“APP”",
    isHot: 1,
    id: 0,
  },
  {
    message: "立项四年，腾讯互娱如何做编程教育",
    isHot: 1,
    id: 1,
  },
  {
    message: "2021腾讯追梦营嘉年华圆满落幕",
    isHot: 1,
    id: 2,
  },
];

const CompetitionActivityList = [
  {
    image:
      "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220415_hemm5ge5tw240x170.png",
    title: "【进行中】2022第四届腾讯青少年人工智能追梦营",
    CompetitionOrActivity: "1",
  },
  {
    image:
      "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220303_2f00pe66e4pimage.png",
    title: "【进行中】全国中小学信息技术创新与实践大赛（NOC）",
    CompetitionOrActivity: "2",
  },
];
</script>

<style lang="scss" scoped>
.main-content {
  padding-bottom: 60px;
  box-sizing: border-box;
  .hot-notice {
    height: 70px;
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    border-radius: 0 0 12px 12px;
    box-sizing: border-box;
    padding: 0 28px;
    display: flex;
    align-items: center;
    &-spr {
      display: inline-block;
      background-image: url("@/assets/image/icon.png");
    }
    &-voice {
      background-position: 0px -40px;
      width: 138px;
      height: 22px;
    }
    &-message {
      width: 50%;
      padding: 0 14px;
    }
  }
  .competition-activity {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    &-item {
      box-sizing: border-box;
      width: 49%;
      height: 220px;
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      &-main {
        flex: 1;
        display: flex;
        padding-left: 10px;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        &-btn {
          display: flex;
          justify-content: flex-start;
        }
      }
    }
  }
}
.bg-gary {
  background-color: #eff3f8;
}
</style>
