<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.backtop {
  position: absolute;
  bottom: 60px;
  right: 4px;
  z-index: 1;
}
.backtop img {
  width: 50px;
  height: 50px;
}
</style>
