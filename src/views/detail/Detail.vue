<template>
  <div class="detail">
      <detailnavbar  class="detailnavbar"></detailnavbar>
    <scroll class="content1" ref="scroll">
 <detail-swiper :swipperimg="swipperimg" class="swipper"></detail-swiper>
 <detail-goods :goods="goods"></detail-goods>
 <detail-goods-shop :goodsshop="goodsshop"></detail-goods-shop>
 <detail-goods-info :goodsinfo="goodsinfo" @loadDetailImg="loadDetailImg"></detail-goods-info>
 <detail-goods-params :goodsparams="goodsparams" ></detail-goods-params>
 <detail-goods-comment :goodsrate="goodsrate" ></detail-goods-comment>
 <detail-goods-recommend :goods="recommends" ></detail-goods-recommend>
  
    
    </scroll>
  </div>
</template>

<script>
//转化时间戳

import Scroll from "components/common/scroll/Scroll";
import Detailnavbar from "views/detail/childComps/Detailnavbar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailGoods from "views/detail/childComps/DetailGoods";
import DetailGoodsShop from "views/detail/childComps/DetailGoodsshop";
import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
import DetailGoodsParams from "views/detail/childComps/DetailGoodsParams";
import DetailGoodsComment from "views/detail/childComps/DetailGoodscomment";
import DetailGoodsRecommend from "components/content/goods/GoodList";

import {getDetail,Goods,Goodsshop,Goodsparams,getRecommend} from "network/detail"

export default {
  name:"Detail",
  data() {
    return {
      iid: null,
      swipperimg:null,
      goods:{},
      goodsshop:{},
      goodsinfo:{},
      goodsparams:{},
      goodsrate:{},
      recommends:[]
    };
  },
  methods:{
    loadDetailImg(){
      //刷新better-scroll可滚动高度
      this.$refs.scroll.refresh()
    }
  },
  created() {
    //商品id
    this.iid = this.$route.params.iid;
    //获取商品详情
    getDetail(this.iid).then(res=>{
      const data = res.result
      this.swipperimg = data.itemInfo.topImages
      console.log(res);
    //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    //获取关于店铺信息
      this.goodsshop = new Goodsshop(data.shopInfo)
    //获取商品详情展示
      this.goodsinfo = data.detailInfo
    //获取商品参数信息
      this.goodsparams = new Goodsparams(data.itemParams)
    //获取评论信息
      this.goodsrate =data.rate.list[0]
    })

    //获取推荐数据
    getRecommend().then(res=>{
      console.log(res)
      this.recommends = res.data.list
    })
  },
  components: {
    Scroll,
    Detailnavbar,
    DetailSwiper,
    DetailGoods,
    DetailGoodsShop,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailGoodsComment,
    DetailGoodsRecommend,
  }
};
</script>

<style scoped>
.detailnavbar{
  position: relative;
  z-index: 9;
}
 /*.swipper{
  z-index: 10; 
}*/
.detail{
  position: relative;
  background-color: white;
  z-index: 8;
  height: 100vh;
}
.content1{
  position:absolute;
  top: 44px;
  bottom: 0px;
}
</style>
