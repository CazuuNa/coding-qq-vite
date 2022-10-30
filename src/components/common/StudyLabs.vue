<template>
  <div class="study-lab-main">
    <div class="study-lab-main-menu">
      <div
        :class="[
          DefaultActive === item.id
            ? 'study-lab-main-menu-item-active'
            : 'study-lab-main-menu-item-normal',
          'study-lab-main-menu-item',
        ]"
        v-for="(item, index) in labList"
        :key="index"
        @click="clickMenu(item.id)"
      >
        <div class="study-lab-main-menu-item-icon">
          <img :src="item.icon" class="study-lab-main-menu-item-icon-pic" />
        </div>
        <div class="study-lab-main-menu-item-main">
          <div class="study-lab-main-menu-item-main-title">
            {{ item.title }}
          </div>
          <div class="study-lab-main-menu-item-main-info">
            <span v-for="(i, k) in item.infoArr" :key="'infoArr' + `${k}`">{{
              i
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="study-lab-main-content">
      <div class="study-lab-main-content-figure">
        <div class="study-lab-main-content-figure-left">
          <div class="study-lab-main-content-figure-left-top">
            <el-icon :size="24" color="#ffc919"><Collection /></el-icon>
            <span>{{ labList[DefaultActive]?.figureList?.info }}</span>
          </div>
          <div class="study-lab-main-content-figure-left-title">
            {{ labList[DefaultActive]?.figureList?.title }}
          </div>
          <div class="study-lab-main-content-figure-left-desc">
            {{ labList[DefaultActive]?.figureList?.desc }}
          </div>
          <el-space class="study-lab-main-content-figure-left-btn" :size="20">
            <el-button
              v-if="labList[DefaultActive]?.figureList?.isCreate === 1"
              size="large"
              @click="clickMessage"
              type="primary"
              round
            >
              立即创作</el-button
            >
            <el-button
              size="large"
              v-if="labList[DefaultActive]?.figureList?.isMore === 1"
              link
              @click="clickMessage"
              >了解更多<el-icon><ArrowRight /></el-icon
            ></el-button>
          </el-space>
        </div>
        <div class="study-lab-main-content-figure-right">
          <video
            :src="labList[DefaultActive]?.figureList?.video"
            autoplay
            muted
            style="width: 100%; height: 100%"
            preload="auto"
          ></video>
        </div>
      </div>
      <div class="study-lab-main-content-list">
        <div
          class="study-lab-main-content-list-main"
          v-if="labList[DefaultActive]?.studyList?.length > 0"
        >
          <div class="study-lab-main-content-list-main-title">
            <span>入门学习</span>
            <span
              class="hover-class"
              v-if="labList[DefaultActive]?.hasMore === 1"
              >更多案例</span
            >
          </div>
          <div class="study-lab-main-content-list-main-list">
            <div
              class="study-lab-main-content-list-main-list-item"
              v-for="(l, y) in labList[DefaultActive]?.studyList"
              :key="'studyList' + `&{y}`"
            >
              <div style="overflow: hidden">
                <img class="img-hover" :src="l.img" />
              </div>
              <span>{{ l.title }}</span>
            </div>
          </div>
        </div>
        <div
          class="study-lab-main-content-list-main"
          v-if="labList[DefaultActive]?.application?.length > 0"
        >
          <div class="study-lab-main-content-list-main-title">
            <span>应用截图</span>
            <span v-if="labList[DefaultActive]?.hasMore === 1">更多案例</span>
          </div>
          <div class="study-lab-main-content-list-main-list">
            <div
              class="study-lab-main-content-list-main-list-item"
              v-for="(l, y) in labList[DefaultActive]?.application"
              :key="'application' + `&{y}`"
            >
              <div style="overflow: hidden;cursor: default;">
                <img class="img-hover" :src="l.img" />
              </div>
              <span>{{ l.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { clickMessage } from "@/utils/commonFun";
import { Collection, ArrowRight } from "@element-plus/icons-vue";
// import videojs from "video.js/dist/video.min";
// import "video.js/dist/video-js.min.css";
import { ref, defineComponent, onMounted } from "vue";
let DefaultActive = ref(0);

const clickMenu = (id: number) => {
  DefaultActive.value = id;
};
const labList = [
  {
    id: 0,
    title: "创意实验室",
    infoArr: ["6+岁", "创造力", "图形化"],
    icon: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_g9ofq50ftsdcreative.png",
    figureList: {
      info: "像搭积木一样编程创作",
      title: "创意实验室",
      desc: "让学编程和搭积木一样简单，有效帮助孩子形成编程思维，锻炼逻辑思维，轻松制作有趣有料的编程项目，发挥自己的无限创意。",
      video:
        "https://wuji-30130.sz.gfp.tencent-cloud.com/20200323_8htrkrqaeb52.mp4",
      isCreate: 1,
      isMore: 1,
    },
    studyList: [
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_03b5pb9xb9xp.png",
        title: "一起去郊游",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_2058cxoa8hv.png",
        title: "让贺卡动起来",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_1e0fz8k4etw.png",
        title: "下雪吧！",
      },
    ],
    hasMore: 1,
    application: [],
  },
  {
    id: 1,
    title: "Python实验室",
    infoArr: ["7+岁", "逻辑思维", "Python"],
    icon: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_7h0exzofi7tpython.png",
    figureList: {
      info: "通用易读的编程语言",
      title: "Python实验室",
      desc: "从图形化编程到文本编程，从AI应用到硬件物联，首创带有舞台区的编辑模式，运用动画和声音制作游戏，全方面体会Python语言的乐趣。",
      video:
        "https://wuji-30130.sz.gfp.tencent-cloud.com/20200317_qrjirl2blsbpython.mp4",
      isCreate: 1,
      isMore: 1,
    },
    studyList: [
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_7wbr2yla49.png",
        title: "画星星",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_5wctvliuxin.png",
        title: "AI智能（语音+图像）",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_5hedqxj4g5c.png",
        title: "计算生日",
      },
    ],
    hasMore: 1,
    application: [],
  },
  {
    id: 2,
    title: "腾讯扣叮-编程第一课",
    infoArr: ["6-9岁", "编程启蒙", "计算思维"],
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAEFElEQVRIia2XX0wcVRTGf3NnlyW0S11boLS1FhpLADXWKqCl0QbTmFRTNT5oYoyvuIkaEx/wyRfdN01MiL41vhijSY1SH7Q2TYWaUPoHWwoNVFppkQCtlUJhd2dmx9zZuduZ2eXf4vcyOefc+31z7px77h1tsu09lkEV8DLQCuwFtgApYBw4C/QA3wOTS9E4QtFEPC8w29HZBHwONC/3Ji56gXeiifjpAI/zFIVmzHZ0drgTVyqCO7bXnZuHUEDgEeALd4my0AWh+hpCjbXoD1YjysuwzQz2nTms8WnMS6OYQ1fByqgZn8x2dB4E2qOJ+EXlDAWUfSKh+h1EDrYiNm7wDdJ0Ha0ihqiIEX5sF5lbM6R+6sEcuqaG7HW5WnPv+0FtC5HnmmQ2HwJvZZkgcqCF0kPPoJWVLrtmckz40V1oIR1r9IZyb08f7zOBblQxAE8Dp9SIyIFmSvY/saxAIaRPnCH1S683IrP7XRXDp/eWq4aSZ4sTkZBzQw01XpfDLdx9ka0uXRB5cZ+zdEVDLvsL+xwuF5J7a8jdjNlsGmsRsWhOIjNxk+SRE2SmbiMqY5S+sh9RvWnZuOQINe7EvDCihr4kvJURbqj15bHw7a9YN6aw04bzlPZK42H/8rVKoSZliQeqfESZqX+KtsV2H1ez+kbZYPk6H7HcJ8XaIurj2iKFclvatm0fcemrbYjNG0HXnbWX9orjmq+iRMjtwg85QjNzaJvuy0X1bZWse/c1FsNScXtu3mtOyowuKysz/e+ipKuF9fdN74zzwj1PHJiXr62VP4cAV48UOpoL9g9jzyfXLCI5JJcHR6XQINDvDEgbwT5VFFLHeh0uF5J7UPWJ3GFlnB5wzphiYY5cx+gd8M52uJXQTM6taQhP5a0WemUMhO6ddckrlOve4d11iKr7ixbSNqwn/LCvlb2hhCqAFsclBCVtTxYtohDaXec1DymhN3MD6ncgYuVrF9q5LXhMhP3d+/G6RSevTklHW1/m9WyWQnuUpW+t/H+ELAv77oLXM13wXrcWAQmjbwhMS3nPAEl/Cxoec5723STmwJ+r1jH6R5j7+DDJH0963Z/h3ut+Bl6XRqqr29lw1pXraKUR52gPtHuM/mGs0XEizz+VdxWzRsaCXVverL7GrbqvgHNOJoaJefEK9kKKzO07GH+M4GfKkPrhJEbfIOnu876QPGKMwatBkXZlqG/UrsS8cDIcHssK35oh2dWNnUxnMzt1AeuvCcjYThYL3xwDw1Szz0YT8da8K7H7B7BntqOz2i33j4AG2YUXDncV/B4y+/kvjxSMAe8HHb6qiybiE9FE/Ds3w9zdtgDu9cZ8vB1NxH8Lupf6EZMNTwrKDOXuvuVWqLy8y58uFZPtSx6nKnY8jwn4DzeQgHU7MSGyAAAAAElFTkSuQmCC",
    figureList: {
      info: "专为6-9岁孩子定制的编程启蒙App",
      title: "腾讯扣叮-编程第一课",
      desc: "腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。",
      video:
        "https://wuji-30130.sz.gfp.tencent-cloud.com/20210516_rfqbytd62t.MP4",
      isCreate: 2,
      isMore: 1,
    },
    studyList: [],
    hasMore: 1,
    application: [
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_667b2qum87qimg1.png",
        title: "妙趣剧情，学习不枯燥",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210516_8hkhp06cbfq04.png",
        title: "编程闯关，探索编程奥秘",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_7xvlv329fmpimg3.png",
        title: "知识解锁，收获丰富趣味知识",
      },
    ],
  },
  {
    id: 3,
    title: "3D实验室",
    infoArr: ["6+岁", "创造力", "3D立体"],
    icon: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200429_ir7137irhcn48X48.png",
    figureList: {
      info: "创意实验室的3D版本",
      title: "3D实验室",
      desc: "扣叮和艾兰岛共同出品，学会了创意实验室就可以轻松上手，培养空间思维，制作3D创意作品。也可前往艾兰岛官网体验更专业的游戏编辑器。",
      video:
        "https://wuji-30130.sz.gfp.tencent-cloud.com/20200323_8htrkrqaeb52.mp4",
      isCreate: 1,
      isMore: 0,
    },
    studyList: [],
    hasMore: 0,
    application: [],
  },
  {
    id: 4,
    title: "人工智能实验室",
    infoArr: ["6+岁", "创造力", "走进AI"],
    icon: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_whgr206kz0sai.png",
    figureList: {
      info: "算法模型，感受前沿科技",
      title: "人工智能实验室",
      desc: "初学者直接应用简单的AI能力（拍照识花、语音识别、智能聊天等），体会AI的乐趣；高阶学习者参与常见算法模型的调参过程，学习AI的底层逻辑。",
      video:
        "https://wuji-30130.sz.gfp.tencent-cloud.com/20200323_8htrkrqaeb52.mp4",
      isCreate: 1,
      isMore: 1,
    },
    studyList: [
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_f32mm1mf6bu.png",
        title: "姿态侦测",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_zezz83b7i8s.png",
        title: "涂鸦",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_vqtfx8vb56t.png",
        title: "智能聊天",
      },
    ],
    hasMore: 1,
    application: [],
  },
  {
    id: 5,
    title: "创意实验室",
    infoArr: ["6+岁", "创造力", "图形化"],
    icon: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_g9ofq50ftsdcreative.png",
    figureList: {
      info: "像搭积木一样编程创作",
      title: "创意实验室",
      desc: "让学编程和搭积木一样简单，有效帮助孩子形成编程思维，锻炼逻辑思维，轻松制作有趣有料的编程项目，发挥自己的无限创意。",
      video:
        "https://wuji-30130.sz.gfp.tencent-cloud.com/20200323_8htrkrqaeb52.mp4",
      isCreate: 1,
      isMore: 1,
    },
    studyList: [
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_03b5pb9xb9xp.png",
        title: "一起去郊游",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_2058cxoa8hv.png",
        title: "让贺卡动起来",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_1e0fz8k4etw.png",
        title: "下雪吧！",
      },
    ],
    hasMore: 1,
    application: [],
  },
  {
    id: 6,
    title: "创意实验室",
    infoArr: ["6+岁", "创造力", "图形化"],
    icon: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_g9ofq50ftsdcreative.png",
    figureList: {
      info: "像搭积木一样编程创作",
      title: "创意实验室",
      desc: "让学编程和搭积木一样简单，有效帮助孩子形成编程思维，锻炼逻辑思维，轻松制作有趣有料的编程项目，发挥自己的无限创意。",
      video:
        "https://wuji-30130.sz.gfp.tencent-cloud.com/20200323_8htrkrqaeb52.mp4",
      isCreate: 1,
      isMore: 1,
    },
    studyList: [
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_03b5pb9xb9xp.png",
        title: "一起去郊游",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_2058cxoa8hv.png",
        title: "让贺卡动起来",
      },
      {
        img: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_1e0fz8k4etw.png",
        title: "下雪吧！",
      },
    ],
    hasMore: 1,
    application: [],
  },
];
</script>
<style lang="scss" scoped>
.study-lab-main {
  width: 1200px;
  height: 600px;
  background: #fff;
  border-radius: 12px;
  padding-right: 40px;
  box-sizing: border-box;
  display: flex;
  &-menu {
    padding-left: 4px;
    box-sizing: border-box;
    background-color: #009cff;
    width: 290px;
    height: 100%;
    border-top-left-radius: 12px;
    &-item {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      height: 82px;
      position: relative;
      cursor: pointer;
      padding: 0 20px;
      border-bottom: 1px solid #0090ff;
      &-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        border-radius: 12px;
        background-color: #fff;
        align-items: center;
        justify-content: center;
        transition: all 200ms;
        &-pic {
          object-fit: cover;
          display: block;
          transition: all 200ms;
        }
      }
      &:hover {
        .study-lab-main-menu-item-icon {
          background: #fff;
          border-radius: 100%;
          .study-lab-main-menu-item-icon-pic {
            transform: scale(0.9);
          }
        }
      }
      &-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 8px;
        box-sizing: border-box;
        &-title {
          font-size: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &-info {
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            display: inline-block;
            padding: 0 4px;
          }
        }
      }
    }
    &-item-active {
      background-color: #fff;
      color: #009cff;
    }
    &-item-normal {
      color: #fff;
    }
  }
  &-content {
    flex: 1;
    padding-left: 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &-figure {
      padding: 30px 0 20px 0;
      border-bottom: 1px solid rgba(74, 89, 111, 0.1);
      display: flex;
      justify-content: space-between;
      &-left {
        width: 50%;
        padding-right: 20px;
        box-sizing: border-box;
        &-top {
          display: flex;
          span {
            padding-left: 10px;
          }
        }
        &-title {
          font-size: 24px;
          margin: 23px 0 12px;
        }
        &-desc {
          color: rgba(74, 89, 111, 0.6);
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          height: 90px;
        }
        &-btn {
          margin-top: 30px;
        }
      }
      &-right {
        width: 360px;
        height: 270px;
      }
    }
    &-list {
      width: 100%;
      padding-top: 20px;
      box-sizing: border-box;
      &-main {
        &-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
        }
        &-list {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          &-item {
            width: 32%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            .img-hover {
              object-fit: cover;
              transform: scale(1) translateZ(0);
              transition: all 220ms;
              border-radius: 8px;
              width: 258px;
              height: 140px;
              &:hover {
                transform: scale(1.05);
              }
            }
          }
        }
      }
    }
  }
}
</style>
