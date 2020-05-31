<template>
     <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <h2>首页</h2>
     </div>

</template>

<script>
 import NavBar from 'components/common/navbar/NavBar';
 import {getHomeMultiData} from 'network/home.js';
export default {

    name:"Home",
 data() {
  return {

  }
 },
 components: {
     NavBar
 },
 created () {
  //  getHomeMultiData()
   getHomeMultiData().then(res => console.log(res))
 },
}
</script>

<style scoped>
  #home{
		/* height: 40px; */
	}
	.home-nav{
		background-color: var(--color-tint);
		color: white;
	}
</style>
