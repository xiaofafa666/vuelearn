<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{carttotal}})</div>
    </nav-bar>
    <cart-list class="cartlist"></cart-list>
    
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import cartList from "./childComps/cartList";

import {mapGetters} from "vuex"
export default {
  name: "Cart",
  data() {
    return {};
  },
  computed:{
     //   carttotal(){
     //        return this.$store.state.cartList.length
     //   }
     ...mapGetters({
          carttotal:'carttotal',
          cartlist:'cartlist'
     })
  },
  components: {
    NavBar,
    cartList,
  }
};
</script>

<style scoped>
.cart{
     width: 100vw;
     height: 100vh;
}
.navbar {
  background-color: var(--color-tint);
  color: white;
}
.cartlist{
  /* height: 100px; */
}
</style>
