<template>
     <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
         <swiper>
             <swiper-item v-for="(item,index) in banner.list"
             :key="index"
             :count="banner.length"
             >
                  <a :href="item.link">
                       <img :src="item.image" alt="">
                  </a>
             </swiper-item>
        </swiper>
     </div>

</template>

<script>
 import NavBar from 'components/common/navbar/NavBar';
 import {getHomeMultiData} from 'network/home.js';
 import {Swiper,SwiperItem} from 'components/common/swiper'
export default {

    name:"Home",
 data() {
  return {
     //   result:null
     banner:[],
     recommend:[],
  }
 },
 components: {
     NavBar,
     Swiper,
     SwiperItem
 },
 created () {
  //  getHomeMultiData()
   getHomeMultiData().then(
        res => {
          console.log(res)
          this.banner = res.data.banner
          this.recommend =res.data.recommend
        })
 },
}
</script>

<style scoped>
  
	.home-nav{
		background-color: var(--color-tint);
		color: white;
	}
</style>
