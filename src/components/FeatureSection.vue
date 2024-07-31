<script setup>
import FeatureItem from '@/components/minis/FeatureItem.vue';
</script>

<template>
    <div class="content_list">
        <div class="content_list_header">
            <h1 class="content_list_name">
                Featured Community
            </h1>
            <p class="nav_all">
                <a href="">See all</a>
            </p>
        </div>
        <div class="content_list_body">
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
        </div>
    </div>
</template>

<style scoped>
.content_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.content_list_header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 12px 0 4px;
}
.content_list_name {
  font-weight: 600;
  font-size: 1.5rem;
}
.nav_all>a {
  color: var(--channel_text_color);
  padding: 2px;
  font-size: 1.15rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: end;
}
.nav_all>a:hover {
  color: #eeeeee;
}
.content_list_body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

</style>