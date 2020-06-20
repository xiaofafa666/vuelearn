<template>
  <div id="detailbottom">
    <!-- <span class="iconfont icon-shop"></span> -->

    <div class="span">
      <span>
        <i class="iconfont icon-shop"></i>
      </span>
      <div>店铺</div>
    </div>
    <div class="span" style="color:red">
      <i class="iconfont icon-dkw_xiaoxi"></i>
      <div>客服</div>
    </div>
    <div class="span">
      <p>
        <i class="iconfont icon-shoucang1"></i>
      </p>
      <div>收藏</div>
    </div>
    <div class="bottomright">
      <div class="shop" @click="addtoCart">加入购物车</div>
      <div class="shop pay">立即购买</div>
    </div>
  </div>
</template>

<script>
import "../../../assets/css/iconfont.css";
export default {
  data() {
    return {};
  },
  components: {},
  methods:{
    addtoCart(){
      this.$emit('addtoCart')
    }
  }
};
</script>

<style scoped>
.span {
  height: 44px;
  padding: 6px 0px 4px;
  margin: 0 auto;
  flex: 2;
  text-align: center;
  border-right: 1px solid #ededed;
  border-top: 1px solid #ededed;
  background: #fff;
  font-size: 0.3rem;
}
.bottomright {
  flex: 8;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 44px;
}
.shop {
  flex: 1;
  text-align: center;
  color: #ff5777;
}
.pay {
  background: linear-gradient(90deg, #ff5777, #ff468f);
  color: white;
}
</style>
