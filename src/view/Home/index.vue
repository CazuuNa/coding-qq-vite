<template>
  <Carousel></Carousel>
  <MainContent></MainContent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Carousel from '@/components/Carousel/index.vue'
import MainContent from '@/components/MainContent/index.vue'
export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
</style>
