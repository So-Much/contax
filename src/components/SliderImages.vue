<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    slides: Array,
    styles: Object
})

for(const selector in props.styles) {
    document.documentElement.style.setProperty(selector, props.styles[selector]);
}

</script>

<template>
    <div class="slider">
        <a v-for="(slide, idx) in slides" :key="idx">
            <img :src="slide.src" alt="new 1">
        </a>
    </div>
</template>

<style scoped>
.slider {
  border: 1px solid #333;
  width: 100%;
  border-radius: 20px;
  display: flex;
  gap: 10px;
  position: absolute;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.slider::-webkit-scrollbar {
  height: 10px;
}
.slider::-webkit-scrollbar-track {
  background: var(--body_bg_color);
  border: 1px solid #333;
  border-radius: 10px;
}
.slider::-webkit-scrollbar-thumb {
  background: var(--channels_bg_color);
  border-radius: 10px;
}
</style>