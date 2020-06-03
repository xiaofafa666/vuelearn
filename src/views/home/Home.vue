<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
      <scroll class="content">
             <home-swiper :banner="banner"></home-swiper>
        <homecommend :recommend="recommend"></homecommend>
        <feature-view></feature-view>
        <tab-control class="tabcontrol" :title="['精选','流行','爆款']" @tabClick="tabClick"></tab-control>
        <good-list :goods="showGoods"></good-list>
      </scroll>
      <back-top></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import Homecommend from "./childComps/Homecommend";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backTop/backTop";


import { getHomeMultiData, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      //   result:null
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType:'pop'
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Homecommend,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  computed:{
       showGoods(){
            return this.goods[this.currentType].list
       }
  },
  created() {
    //获取首页数据
    this.getHomeMultiData();
    //获取选项卡数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
       //事件监听
     tabClick(index){
     //  console.log(index)
     switch(index){
          case 0:
               this.currentType='pop'
               break;
          case 1:
               this.currentType='new'
               break;
          case 2:
               this.currentType='sell'
               break;
     }
     },

    getHomeMultiData() {
      getHomeMultiData().then(res => {
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* width: 100vw;*/
     height: 100vh; 
  /* padding-top: 44px; */
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  /* height: 44px;
  line-height: 44px; */
  /* margin-bottom: 0px; */
}
.tabcontrol {
  position: sticky;
  top: 44px;
  background-color: white;
}
.content{
     /* height:calc(100% - 93px); */
     position: absolute;
     top: 44px;
     bottom: 49px;
     /* overflow: hidden; */
     /* z-index: 999; */
     /* margin-top: 44px; */
}
</style>
