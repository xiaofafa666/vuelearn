<template>
  <div class="detail">
      <detailnavbar ></detailnavbar>
 <detail-swiper :swipperimg="swipperimg" ></detail-swiper>
  </div>
</template>

<script>
import Detailnavbar from "views/detail/childComps/Detailnavbar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";

import {getDetail} from "network/detail"

export default {
  name:"Detail",
  data() {
    return {
      iid: null,
      swipperimg:null
    };
  },
  created() {
    //商品id
    this.iid = this.$route.params.iid;
    //获取商品详情
    getDetail(this.iid).then(res=>{
      this.swipperimg = res.result.itemInfo.topImages
      console.log(res);
      
    })
  },
  components: {
    Detailnavbar,
    DetailSwiper
  }
};
</script>

<style scoped>
</style>
