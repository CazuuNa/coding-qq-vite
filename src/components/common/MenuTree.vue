<template>
  <div class="menu">
    <span
      :class="[menu.key === activePath ? 'active-item' : '', 'normal-item']"
      v-for="(menu, key) in allRoutes"
      :key="key"
      :index="menu.key"
      @click="selectMenu(menu.key)"
      >{{ menu.title }}</span
    >
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";

const route = useRoute();
const router = useRouter();

// const allRoutes = router.options.routes

// const activePath = computed(() => {
//   return route.path
// })

const activePath = ref("1");

const allRoutes = ref([
  { title: "首页", key: "1", path: "/" },
  { title: "实验室", key: "2", path: "/labs" },
  { title: "课程", key: "3", path: "/lesson" },
  { title: "名师团", key: "4", path: "/teacher-group" },
  { title: "校园", key: "5", path: "/campus" },
  { title: "社区", key: "6", path: "/community" },
  { title: "追梦营", key: "7", path: "/zhuimengying" },
  { title: "CodingDay", key: "8", path: "/coding-day" },
  { title: "赛事活动", key: "9", path: "/noc" },
]); //菜单列表

const selectMenu = (key: string) => {
  if (key !== "1") {
    return ElMessage({
      message: "开发中，敬请期待！",
      type: "warning",
      showClose: true,
    });
  }
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 20px;
  .active-item {
    color: #0080ff;
    font-weight: bold;
  }
  .normal-item {
    padding: 0 15px;
    line-height: 34px;
    cursor: pointer;
  }
  .normal-item:hover {
    border-radius: 12px;
    background-color: #f4f5f5;
  }
}
</style>
