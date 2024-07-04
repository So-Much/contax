<script setup>

</script>

<template>
  <div class="server">
    <img
      src="https://www.google.com/imgres?q=server%20icon&imgurl=https%3A%2F%2Fvisualpharm.com%2Fassets%2F811%2FServer-595b40b75ba036ed117d8edd.svg&imgrefurl=https%3A%2F%2Fwww.visualpharm.com%2Ffree-icons%2Fserver-595b40b75ba036ed117d8edd&docid=_0_6PvFAPzrKCM&tbnid=MJM1l2OQpdTCQM&vet=12ahUKEwirxdDpu4CHAxWbna8BHWH4NwYQM3oECBYQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwirxdDpu4CHAxWbna8BHWH4NwYQM3oECBYQAA"
      alt="Server Icon" class="server_icon" />
    <h1 class="server_name">Server 1</h1>
  </div>
</template>

<style scoped>
.server {
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin: 10px auto;
}

.server:hover .server_icon {
  filter: drop-shadow(0 0 0.6rem #cbd1d6);
}

.server_icon {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.server_name {
  display: none;
}
</style>