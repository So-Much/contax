<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    CTA_img_src: String,
    styles: Object
})
for(const selector in props.styles) {
    document.documentElement.style.setProperty(selector, props.styles[selector]);
}
</script>

<template>
    <div class="cta_section">
        <div class="cta_wrapper">
            <img :src="CTA_img_src" alt="" class="CTA_main">
        </div>
    </div>
</template>

<style scoped>
.cta_wrapper {
  width: 80%;
  margin: 8px auto;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #151515;
  background-color: #fff;
}
.cta_wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>