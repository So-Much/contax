<script setup>
import { defineProps, onMounted } from 'vue';
const props = defineProps({
    channel_icon_src: String,
    channel_name: String,
    routePath: String,
    styles: Object
})

onMounted(() => {
    for(const selector in props.styles) {
        document.documentElement.style.setProperty(selector, props.styles[selector]);
    }
})
</script>

<template>
    <div class="channel" :key="key">
        <router-link :to="routePath">
            <div class="channel_tag">
                <img :src="channel_icon_src" alt="Channel Icon" class="channel_icon"/>
                <h1 class="channel_name">{{ channel_name }}</h1>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.channel:not(:last-child) {
    border-bottom: 1.5px solid #151515;
}
.channel_tag {
  margin: 8px;
  display: flex;
  cursor: pointer;
  width: 92%;
  border-radius: 20px 0 0 20px;
}
.channel_tag:hover {
  background: var(--channel_tag_bg_hovered);
}
.channel_tag .channel_icon {
  width: 20px;
  height: 20px;
  padding: 5px;
  object-fit: cover;
}
.channel_tag .channel_name {
  color: var(--channel_text_color);
  padding: 5px;
  width: 100%;
}
</style>