<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem
  }
};
</script>

<style scoped>
.goods {
  /* width: 100%; */
  width: 100vw;
  -moz-column-count:2 ;
  -webkit-column-count: 2;
  column-count: 2;
    column-gap: 2vw;
    padding:0 4vw 0 0;
    /* padding: 0 2px 0 2px; */
  /* display: flex; */
  /* -moz-column-count: 1;
  -webkit-column-count: 1;
  column-count: 1; */
}
</style>

