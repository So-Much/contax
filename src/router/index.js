import { createRouter, createWebHistory } from 'vue-router'
import channelRoutes from '@/router/channels/channelRoutes.js';
import serverRoutes from '@/router/servers/serverRoutes.js';

const routes = [
  ...channelRoutes,
  ...serverRoutes
]
console.log(routes)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
