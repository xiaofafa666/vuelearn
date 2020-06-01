<template>
     <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banner="banner"></home-swiper> 
        <homecommend :recommend="recommend"></homecommend>
     </div>

</template>

<script>
 import NavBar from 'components/common/navbar/NavBar';
 import HomeSwiper from './childComps/HomeSwiper'
 import Homecommend from './childComps/Homecommend'

 import {getHomeMultiData} from 'network/home.js';
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
     HomeSwiper,
     Homecommend
 },
 created () {
  //  getHomeMultiData()
   getHomeMultiData().then(
        res => {
          console.log(res)
          this.banner = res.data.banner.list
          this.recommend =res.data.recommend.list
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
