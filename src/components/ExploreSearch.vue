<script setup>
// import { ref } from "vue";
// const search_value = ref("");
</script>

<template>
    <div class="explore_search">
        <input type="text" name="" id="explore_search_input" placeholder="Explore Search">
        <label for="explore_search_input" class="explore_search_icon">
            <img src="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png" alt="">
        </label>
    </div>
</template>

<style scoped>
.explore_search {
  width: 60%;
  margin: 0 auto;
  padding: 10px;
  position: relative;
}
.explore_search input[type=text]#explore_search_input {
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  border: #3f434b 1px solid;
  /* border: var(--channel_tag_bg_hovered) 1px solid; */
  background: #686d76;
  caret-color: #f4f4f4;
  color: #222831;
  /* background: var(--main_content_bg_color);
  caret-color: var(--body_bg_color);
  color: var(--app_bg_color); */
  font-size: 1.2rem;
  font-weight: 300;
}
.explore_search input[type=text]#explore_search_input::placeholder {
  /* color: var(--body_bg_color); */
  color: #f4f4f4;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
}
.explore_search input[type=text]#explore_search_input:focus::placeholder {
  color: transparent;
  transition: all 0.15s ease;
}
.explore_search .explore_search_icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 9px;
}
.explore_search .explore_search_icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.explore_search input[type=text]#explore_search_input:focus {
  outline: none;
  caret-color: #333;
}
</style>