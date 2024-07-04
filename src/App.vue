<script setup>
import { ref } from "vue";
import ChannelRoutesView from "@/router/channels/ChannelRoutesView.vue"
import ServerRoutesView from "@/router/servers/ServerRoutesView.vue";

// CSS Variables - Templates
// Dark Theme
// const body_bg_color = ref('#f4f4f4');
const app_bg_color = ref('#222831');
const channels_bg_color = ref('#373a40');
// const channel_tag_bg_hovered = ref('#3f434b');
// const channel_text_color = ref('#a7b0b9');
const main_content_bg_color = ref('#686d76');
const inspector_bg_color = ref('#373a40');
const border_rounded = ref('#a7b0b9 1px solid');


</script>
<template>
  <div id="app">
    <div id="container">
      <div class="nav-bar">
        <ServerRoutesView />
        <ChannelRoutesView />
      </div>
      <div class="main-content">
        Router View Main-content
        <router-view></router-view>
        <router-view name="main-content"></router-view>
      </div>
      <div class="inspector">
        <router-view name="inspector">Router View Inspector</router-view>
      </div>
    </div>
  </div>
</template>

<style>
/* Reset CSS */
@import './reset.css';
/* Theme */
#app {
  padding-top: 10px;
  min-height: 100dvh;
  background-color: v-bind(app_bg_color);
  color: #eeeeee;
}
#container {
  display: grid;
  grid-template-columns: 1.25fr 3fr 1fr;
  border-collapse: collapse;
}
.channels-nav {
  background-color: v-bind(channels_bg_color);
}
.main-content {
  background-color: v-bind(main_content_bg_color);
  border: v-bind(border_rounded);
  padding: 12px 8%;
}
.inspector {
  background-color: v-bind(inspector_bg_color);
}

.nav-bar {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
