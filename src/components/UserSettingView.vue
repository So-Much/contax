<script setup>
import UserContainer from '@/components/minis/UserContainer.vue';

import { ref } from 'vue';
const Username = ref('So-Much')
</script>

<template>
    <div>
        {{ Username }}
        <UserContainer />
    </div>
</template>

<style scoped>

</style>