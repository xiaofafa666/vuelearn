<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index" :count="banner.length">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
 import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name:"homeSwiper",
    props:{
        banner:{
            type:Array,
            default(){
                return[]
            }
        }
    },
  data() {
    return {};
  },
  components: {
    Swiper,
     SwiperItem  
  }
};
</script>

<style scoped>
</style>
