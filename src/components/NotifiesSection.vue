<script setup>
import NotifyItemView from '@/components/minis/NotifyItemView.vue';

import { ref } from 'vue';
const notifiesQuantity = ref(3);
</script>

<template>
    <div class="notify" v-for="(item, idx) in items" :key="idx">
        <NotifyItemView />
    </div>
</template>

<style scoped>

</style>