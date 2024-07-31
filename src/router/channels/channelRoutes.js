import HomeView from '@/views/channels/HomeView.vue';
import MusicView from '@/views/channels/MusicView.vue';
import StudentHubView from '@/views/channels/StudentHubView.vue';
import MessageView from '@/views/channels/MessageView.vue';
import UserSettingView from '@/components/UserSettingView.vue';

export default [
    {
        path: '/',
        name: 'home',
        displayName: 'Home',
        components: {
          default: HomeView,
          inspector: UserSettingView
        }
      },
      {
        path: '/home/music',
        name: 'music-channel',
        displayName: 'Music',
        components: {
          default: () => MusicView,
        }
      },
      {
        path: '/home/student-hub',
        name: 'student-hub-channel',
        displayName: 'Student Hub',
        component: () => StudentHubView
      },
      {
        path: '/home/messages',
        name: 'message-channel',
        displayName: 'Messages',
        component: () => MessageView
      }
];