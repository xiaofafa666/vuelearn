<template>
  <div class="detail">
    <detailnavbar class="detailnavbar" @itemClick="itemClick" ref="detailnav"></detailnavbar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
      <detail-swiper :swipperimg="swipperimg" class="swipper"></detail-swiper>
      <detail-goods :goods="goods"></detail-goods>
      <detail-goods-shop :goodsshop="goodsshop"></detail-goods-shop>
      <detail-goods-info :goodsinfo="goodsinfo" @loadDetailImg="loadDetailImg"></detail-goods-info>
      <detail-goods-params :goodsparams="goodsparams" ref="params"></detail-goods-params>
      <detail-goods-comment :goodsrate="goodsrate" ref="comment"></detail-goods-comment>
      <detail-goods-recommend :goods="recommends" ref="recommend"></detail-goods-recommend>
    </scroll>
    <back-top class="backtop" @click.native="ClickTop" v-show="isshowbacktop"></back-top>
    <detailbottomnav class="bottomnav"></detailbottomnav>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import Detailnavbar from "views/detail/childComps/Detailnavbar";
import Detailbottomnav from "views/detail/childComps/Detailbottomnav";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailGoods from "views/detail/childComps/DetailGoods";
import DetailGoodsShop from "views/detail/childComps/DetailGoodsshop";
import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
import DetailGoodsParams from "views/detail/childComps/DetailGoodsParams";
import DetailGoodsComment from "views/detail/childComps/DetailGoodscomment";
import DetailGoodsRecommend from "components/content/goods/GoodList";

import {
  getDetail,
  Goods,
  Goodsshop,
  Goodsparams,
  getRecommend
} from "network/detail";

import BackTop from "components/content/backTop/backTop";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      swipperimg: null,
      goods: {},
      goodsshop: {},
      goodsinfo: {},
      goodsparams: {},
      goodsrate: {},
      recommends: [],
      DistancetoTop: [],
      isshowbacktop:false
      // currentIndex:0
    };
  },
  methods: {
    loadDetailImg() {
      //刷新better-scroll可滚动高度
      this.$refs.scroll.refresh();

      this.DistancetoTop=[];
      this.DistancetoTop.push(0);
      this.DistancetoTop.push(this.$refs.params.$el.offsetTop),
        this.DistancetoTop.push(this.$refs.comment.$el.offsetTop),
        this.DistancetoTop.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.DistancetoTop);
    },
    itemClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.DistancetoTop[index], 200);
    },
    scroll(position) {
      // console.log(position)
      const positionY = -position.y;

      // var ind = 0
      for (var i = 0; i < this.DistancetoTop.length; i++) {
        // console.log(this.DistancetoTop.length-1)
        // ind = i+1
        // console.log(this.DistancetoTop[this.DistancetoTop.length-1])

        // console.log(positionY)
        if (
          positionY >= this.DistancetoTop[i] &&
          positionY < this.DistancetoTop[i + 1]
        ) {
          this.$refs.detailnav.currentIndex = i;
          // console.log(this.$refs.detailnav)
        } else if (
          positionY >= this.DistancetoTop[this.DistancetoTop.length - 1]
        ) {
          this.$refs.detailnav.currentIndex = this.DistancetoTop.length - 1;
        }
      }
      /**
       * 是否显示返回顶部按钮,默认不显示，当滑动距离大于1000时显示
       */
      this.isshowbacktop = positionY > 1000;
    },
    ClickTop() {
      //返回滚动顶部
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  },
  created() {
    //商品id
    this.iid = this.$route.params.iid;
    //获取商品详情
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.swipperimg = data.itemInfo.topImages;
      // console.log(res);
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取关于店铺信息
      this.goodsshop = new Goodsshop(data.shopInfo);
      //获取商品详情展示
      this.goodsinfo = data.detailInfo;
      //获取商品参数信息
      this.goodsparams = new Goodsparams(data.itemParams);
      //获取评论信息
      this.goodsrate = data.rate.list[0];
    });

    //获取推荐数据
    getRecommend().then(res => {
      // console.log(res)
      this.recommends = res.data.list;
    });
    // this.getDistanceY = debounce(() => {
    //   console.log(1111);
    // });
  },
  components: {
    Scroll,
    Detailnavbar,
    Detailbottomnav,
    DetailSwiper,
    DetailGoods,
    DetailGoodsShop,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailGoodsComment,
    DetailGoodsRecommend,
    BackTop
  }
};
</script>

<style scoped>
.detailnavbar {
  position: relative;
  z-index: 9;
}
/*.swipper{
  z-index: 10; 
}*/
.detail {
  position: relative;
  background-color: white;
  z-index: 9;
  height: 100vh;
}
.content {
  position: absolute;
  overflow: hidden;
  left: 0px;
  top: 44px;
  bottom: 44px;
}
.bottomnav {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  background-color: #ffe6e8;
  height: 44px;
}
</style>
