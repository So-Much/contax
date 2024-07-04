<script setup>
import serverRoutes from '@/router/servers/serverRoutes.js';
console.log(serverRoutes)
</script>

<template>
    <nav class="servers-nav">
        <div class="server">
            <router-link v-for="route in serverRoutes" 
            :key="route?.name" 
            :to="route?.path"
            >
            {{ route?.displayName }}
        </router-link>
        </div>
    </nav>
</template>

<style scoped>
.server-nav {
    width: 70%;
    margin: 0 auto;
}
.server {
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin: 10px auto;
}
.server:hover .server_icon{
  filter: drop-shadow(0 0 0.6rem #cbd1d6);
}
.servers .server_icon {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.servers .server_name {
  display: none;
}
</style>