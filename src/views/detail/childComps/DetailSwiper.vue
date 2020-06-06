<template>
  <swiper class="detailswiper">
    <swiper-item v-for="(item,index) in swipperimg"
    :key="index">
    <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    swipperimg: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
        };
  },
  components: {
      Swiper,
      SwiperItem
  }
};
</script>

<style scoped>
.detailswiper{
    height: 200px;
    overflow: hidden;
}
</style>
