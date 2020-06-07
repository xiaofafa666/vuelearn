<template>
  <div class="detail">
      <detailnavbar  class="detailnavbar"></detailnavbar>
    <scroll class="content1">
 <detail-swiper :swipperimg="swipperimg" class="swipper"></detail-swiper>
 <detail-goods :goods="goods"></detail-goods>
 <detail-goods-shop :goodsshop="goodsshop"></detail-goods-shop>
    <ul>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
    </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import Detailnavbar from "views/detail/childComps/Detailnavbar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailGoods from "views/detail/childComps/DetailGoods";
import DetailGoodsShop from "views/detail/childComps/DetailGoodsshop";

import {getDetail,Goods,Goodsshop} from "network/detail"

export default {
  name:"Detail",
  data() {
    return {
      iid: null,
      swipperimg:null,
      goods:{},
      goodsshop:{}
    };
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
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
    //获取关于店铺信息
      this.goodsshop = new Goodsshop(res.result.shopInfo)

    })
  },
  components: {
    Scroll,
    Detailnavbar,
    DetailSwiper,
    DetailGoods,
    DetailGoodsShop,
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
