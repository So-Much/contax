<script setup>
import routesPaths from "@/router/channels/channelRoutes.js";
</script>

<template>
    <nav class="channels-nav">
        <router-link class="channel" v-for="route in routesPaths" :key="route?.name" :to=route?.path>{{route?.displayName}}</router-link>
    </nav>
</template>
<style scoped>

.channels-nav {
    width: 100%;
    margin: 0 auto;
    border-radius: 20px 0 0 20px;
    border: var(--border_rounded);
}
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