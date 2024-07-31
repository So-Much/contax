<script setup>
import SliderImages from '@/components/SliderImages.vue';
import { reactive } from 'vue';
const slides = reactive([
    {
        src: 'https://i.pinimg.com/564x/89/a8/12/89a812fe246ffafd8fc0ee8c88512470.jpg'
    },
    {
        src: 'https://i.pinimg.com/564x/89/a8/12/89a812fe246ffafd8fc0ee8c88512470.jpg'
    },
    {
        src: 'https://i.pinimg.com/564x/89/a8/12/89a812fe246ffafd8fc0ee8c88512470.jpg'
    },
])
</script>

<template>
    <div class="news">
        <div class="news_wrapper">
            <SliderImages
             :slides="slides"
            />
        </div>
    </div>
</template>

<style scoped>
.news_wrapper {
  width: 100%;
  position: relative;
  height: 276px; /* height of picture(266px) + scrolltrack(10px) */
}

</style>