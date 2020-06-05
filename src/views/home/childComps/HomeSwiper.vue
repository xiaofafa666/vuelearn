<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index" :count="banner.length">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
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
    return {
      isLoad:false
    };
  },
  components: {
    Swiper,
     SwiperItem  
  },
  methods: {
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
};
</script>

<style scoped>
</style>
