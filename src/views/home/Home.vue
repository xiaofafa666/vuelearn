<template>
     <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banner="banner"></home-swiper> 
        <homecommend :recommend="recommend"></homecommend>
        <feature-view></feature-view>
        <tab-control :title="['精选','流行','爆款']"></tab-control>
          <ul>
               <li>列表1</li>
               <li>列表2</li>
               <li>列表3</li>
               <li>列表4</li>
               <li>列表5</li>
               <li>列表6</li>
               <li>列表7</li>
               <li>列表8</li>
               <li>列表9</li>
               <li>列表10</li>
               <li>列表11</li>
               <li>列表12</li>
               <li>列表13</li>
               <li>列表14</li>
               <li>列表15</li>
               <li>列表16</li>
               <li>列表17</li>
               <li>列表18</li>
               <li>列表19</li>
               <li>列表20</li>
               <li>列表21</li>
               <li>列表22</li>
               <li>列表23</li>
               <li>列表24</li>
               <li>列表25</li>
          </ul>

     </div>

</template>

<script>
 import HomeSwiper from './childComps/HomeSwiper'
 import Homecommend from './childComps/Homecommend'
 import FeatureView from './childComps/FeatureView'

 import NavBar from 'components/common/navbar/NavBar'
 import TabControl from '../../components/content/tabControl/TabControl'

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
     Homecommend,
     FeatureView,
     TabControl
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
     #home{
          padding-top: 43px;
     }
	.home-nav{
		background-color: var(--color-tint);
		color: white;
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          z-index: 9;
          /* margin-bottom: 0px; */
	}
</style>
