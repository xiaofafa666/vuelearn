<template>
  <!-- <div class="cartList">
    <scroll ref="scroll" class="scroll22">
      <div v-for="(item,index) in cartList" :key="index">
        <img class="img" :src="item.image" alt="商品图片" />
        <div class="listright">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
          <div class="price">{{item.price}}</div>
        </div>
      </div>
    </scroll>
  </div> -->
   <div class="cart_list">
    <scroll ref="scroll" class="cart_scroll22">
      <template>
        <cart-list-item
          v-for="(item, index) in cartList"
          :key="index"
          :item="item"
        ></cart-list-item>
      </template>
    </scroll>
    <cart-total class="cartlistbottom"></cart-total>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll"
import CartListItem from "./CartListItem";
import CartTotal from "./CartTotal";
import { mapGetters } from "vuex";
export default {
  name: "cartList",
  computed: {
    ...mapGetters({
      cartList: "cartList"
    })
  },
  data() {
    return {};
  },
  components: {
      scroll,
      CartListItem,
      CartTotal
  },
  activated() {
    this.$refs.scroll.refresh;
  }
};
</script>

<style scoped>
.cart_list{
  position: relative;
  width: 100%;
  height: calc(100% - 93px); 
  /* height: 300px;  */
  
    /* height: 100vh; */
    /* overflow: hidden; */
}
.cart_scroll22{
     /* position:absolute; */
   /* top: 50px;
    bottom: 50px; */
    height: calc(100% - 30px); 
    overflow: hidden;
}
.img {
  width: 100%;
  height: 100%;
}
.cartlistbottom{
  width: 100%;
  position:absolute;
  bottom: 0;
  left: 0;
}
</style>
