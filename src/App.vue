<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Nav from "./components/Nav/index.vue";
import Footer from "./components/Footer/index.vue";
import BackTop from "./components/BackTop/index.vue";


</script>

<template>
  <el-container>
    <el-header><Nav /></el-header>
    <el-main>
      <div class="main" >
        <div class="main-view">
          <router-view></router-view>
        </div>
      </div>
    </el-main>
    <el-footer><Footer /> </el-footer>
  </el-container>
  <BackTop />
</template>


<style lang="scss">
.el-header,
.el-footer {
  height: 60px;
}
.el-main {
  width: 100%;
  padding: 0 !important;
}
.main {
  width: 100%;
  display: flex;
  height: 100%;
  .main-view {
    flex: 1;
  }
}
</style>
