<script setup>

</script>

<template>
    <div class="user_container">
        <div class="avatar_container mask">
            <div class="avatar">
                <img src="https://www.beeart.vn/uploads/file/images/blog/apple/bee_art_logo_apple_2%20copy.jpg" alt="">
            </div>
        </div>
        <div class="infor">
            <div class="name">
                Sophie Turner
            </div>
            <div class="nickname">
                @sophie
            </div>
        </div>
    </div>
</template>

<style scoped>
.mask {
  -webkit-mask-image: url(D:\TDTU_Files\Projects\contax\src\assets\avatarframe.png);
  mask-image: url(D:\TDTU_Files\Projects\contax\src\assets\avatarframe.png);
  width: 100%;
  height: 100%;
  mask-position: center;
}
.avatar_container {
  width: 100%;
  min-height: 300px;
  height: 30dvh;
}
.avatar {
  width: 100%;
  height: auto;
}
.avatar>img {
  width: 100%;
  height: auto;
  background: no-repeat;
  object-fit: contain;
}
.name {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}
.nickname {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 300;
}
</style>