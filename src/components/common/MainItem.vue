<template>
  <div class="main">
    <h2 :class="[isHot ? 'main-title-hot' : '','main-title']">
      {{title}}
    </h2>
    <p v-if="info !== ''">{{info}}</p>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isHot: {
    type: Boolean,
    default: false,
  },
  title: {
    type:String,
    default:''
  },
  info:{
    type:String,
    default:''
  }
});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  &-title {
    display: flex;
    font-size: 40px;
  }
  &-title-hot::after {
    content: '热门';
    width: 44px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff666f;
    color: #fff;
    font-size: 14px;
    border-radius: 12px 12px 12px 0;
    line-height: 24px;
    margin-left: 6px;
  }
}
</style>