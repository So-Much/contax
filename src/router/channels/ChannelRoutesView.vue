<script setup>
import routesPaths from "@/router/channels/channelRoutes.js";
import ChannelRef from "@/components/minis/ChannelRef.vue";
</script>

<template>
    <nav class="channels-nav">
      <ChannelRef v-for="route in routesPaths" :key="route?.name" :routePath=route?.path :channel_name=route?.displayName channel_icon_src="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png"/>
    </nav>
</template>
<style scoped>
.channels-nav {
    width: 100%;
    margin: 0 auto;
    border-radius: 20px 0 0 20px;
}
</style>