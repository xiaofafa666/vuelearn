<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :title="['精选','流行','爆款']"
      @tabClick="tabClick"
      ref="tabcontrol01"
      class="tabcontrolbb"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="Totop"
      :probe-type="3"
      @scroll="scrollmove"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <homecommend :recommend="recommend" ></homecommend>
      <feature-view></feature-view>
      <tab-control
        :title="['精选','流行','爆款']"
        @tabClick="tabClick"
        ref="tabcontrol02"
      ></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backtoTop" v-show="isshowbacktop"></back-top>
  </div>
</template>

<script>
import { debounce } from "common/utils";

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
      currentType: "pop",
      isshowbacktop: false,
      taboffsetTop: 0,
      isTabFixed:false,
      saveY:0
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
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated(){
    this.$refs.Totop.scrollTo(0, this.saveY, 0);
    this.$refs.Totop.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.Totop.getScrollY();
  },
  created() {
    //获取首页数据
    this.getHomeMultiData();
    //获取选项卡数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.Totop.refresh);
    //监听图片加载完成
    this.$bus.$on("imageLoad", () => {
      // console.log("图片加载完成");
      // this.$refs.Totop.refresh()
      refresh();
    });
  },
  methods: {
    //事件监听
    tabClick(index) {
      //  console.log(index)
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol01.currentIndex = index;
      this.$refs.tabcontrol02.currentIndex = index;
    },

    backtoTop() {
      //  console.log("返回顶部");
      console.log(this.$refs.Totop.scroll);
      this.$refs.Totop.scroll.scrollTo(0, 0, 500);
    },
    scrollmove(position) {
      //  console.log(position.y);
      //返回顶部是否显示
      this.isshowbacktop = -position.y > 1000
      // -position.y > 1000
      //   ? (this.isshowbacktop = true)
      //   : (this.isshowbacktop = false);
        //是否显示选项卡固定
        // console.log(this.tabOffsetTop)

    this.isTabFixed = -position.y > this.taboffsetTop;
      // console.log(this.$refs.tabcontrol02.$el.offsetTop)
    }
    ,
    loadMore() {
      console.log("上拉加载触发");
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      console.log(this.$refs.tabcontrol02.$el.offsetTop)
      this.taboffsetTop = this.$refs.tabcontrol02.$el.offsetTop;
    },

    getHomeMultiData() {
      getHomeMultiData().then(res => {
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // console.log(this.$refs.Totop.scroll)
        this.$refs.Totop.scroll.finishPullUp();
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
.tabcontrolbb{
  position: relative;
  z-index: 8;
  top: 44px;
  background-color: white;
  /* top: 44px; */
}
.content {
  /* height:calc(100% - 93px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  /* z-index: 999; */
  /* margin-top: 44px; */
}
</style>
