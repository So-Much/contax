import ServerExampleView from "@/views/servers/ServerExampleView.vue";
export default [
    {
        path: '/serverExample',
        name: 'serverA',
        displayName: 'serverA',
        component: () => ServerExampleView
    }
];