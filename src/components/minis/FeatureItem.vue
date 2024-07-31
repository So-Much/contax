<script setup>

</script>

<template>
    <div class="content_item">
        <div class="main_card">
            <img src="https://i.pinimg.com/564x/5b/79/f3/5b79f3d3609cf3bd778c6a1b486b69de.jpg" alt="">
        </div>
        <div class="flipToTop">
            <div class="flipToTop_icon">
                <img src="https://www.beeart.vn/uploads/file/images/blog/apple/bee_art_logo_apple_2%20copy.jpg" alt="" class="flipToTop_icon">
            </div>
            <!-- content card -->
            <div class="flipToTop_content">
                <h1 class="flipToTop_title">Title</h1>
                <p class="flipToTop_description">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consequatur atque sit eveniet nisi omnis! Veritatis, mollitia possimus
                    saepe architecto ipsa quisquam nobis neque, similique enim reiciendis
                    dignissimos vero tempora officiis?</p>
                <div class="flipToTop_subcontent">
                    <p class="flipToTop_subcontent_left">Post: 5days ago</p>
                    <p class="flipToTop_subcontent_right">Views: 3000</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content_item {
  width: 100%;
  height: auto;
  border-radius: 20px;
  border: var(--border_rounded);
  overflow: hidden;
  cursor: pointer;
  box-shadow: #222831 0 0 0.5rem;
  position: relative;
}
.main_card {
  width: 100%;
  height: auto;
  background-color: #eeeeee;
}
.main_card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.flipToTop {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(238, 238, 238, 0.8);
  color: #151515;
  max-height: 0;
  transition: all 0.35s ease-in;
  border-radius: 100% 100% 0% 0% / 100% 100% 0% 0%;
  margin-top: 10px;
}
.flipToTop_icon {
  position: relative;
  margin-bottom: 25px; /* 25px is 1/2 the height of the icon */
}
.flipToTop_icon>img{
  width: 0;
  height: 0;
  padding: 5px;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.35s ease-in;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.content_item:hover .flipToTop {
  max-height: 100%;
}
.content_item:hover .flipToTop .flipToTop_icon>img {
  width: 50px;
  height: 50px;
}
.flipToTop_content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.flipToTop_title {
  font-size: 1.2rem;
  font-weight: 600;
}
.flipToTop_description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.flipToTop_subcontent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 0.8rem;
  color: #3f434b;
  font-weight: 600;
  opacity: 0.8;
}
.flipToTop_subcontent_left {
  text-align: left;
}
.flipToTop_subcontent_right {
  text-align: right;
}
</style>