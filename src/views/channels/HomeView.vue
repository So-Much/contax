<script setup>
import ExploreSearch from '@/components/ExploreSearch.vue';
import CTASection from '@/components/CTASection.vue';
import NewsHome from '@/components/NewsHome.vue';
import FeatureSection from '@/components/FeatureSection.vue';

import { ref } from 'vue';

const isNewParticle = ref(false);

</script>

<template>
  <div>
    <ExploreSearch />
    <!-- <CTASection v-if="isNewParticle" CTA_img_src="https://i.pinimg.com/564x/8d/85/84/8d8584afd10d26fd48fbe102722e56c6.jpg" />
    <NewsHome v-else /> -->

    <!-- way 2: -->
     <component :is="isNewParticle ? CTASection : NewsHome"
     :CTA_img_src="isNewParticle ? `https://i.pinimg.com/564x/8d/85/84/8d8584afd10d26fd48fbe102722e56c6.jpg` : `none`"
     ></component>

     <FeatureSection />
     <FeatureSection />
     <FeatureSection />
  </div>
</template>

<style scoped>

</style>