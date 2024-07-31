<script setup>
import ChannelRoutesView from "@/router/channels/ChannelRoutesView.vue"
import ServerRoutesView from "@/router/servers/ServerRoutesView.vue";

</script>
<template>
  <div id="app">
    <div id="container">
      <div class="nav-bar">
        <ServerRoutesView />
        <ChannelRoutesView />
      </div>
      <div class="main-content">
        <router-view></router-view>
        <router-view name="main-content"></router-view>
      </div>
      <div class="inspector">
        <router-view name="inspector"></router-view>
      </div>
    </div>
  </div>
</template>

<style>
/* Reset CSS */
@import './reset.css';
@import './global.css';
/* Theme */
#app {
  padding-top: 10px;
  min-height: 100dvh;
  background-color: var(--app_bg_color);
  color: #eeeeee;
}
#container {
  display: grid;
  grid-template-columns: 1.25fr 3fr 1fr;
  border-collapse: collapse;
}
.channels-nav {
  background-color: var(--channels_bg_color);
  border: var(--border_rounded);
}
.main-content {
  background-color: var(--main_content_bg_color);
  border: var(--border_rounded);
  padding: 12px 8%;
}
.inspector {
  background-color: var(--inspector_bg_color);
  border: var(--border_rounded);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav-bar {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
