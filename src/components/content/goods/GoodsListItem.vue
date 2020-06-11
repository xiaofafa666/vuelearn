<template>
  <div class="containgoods" @click="itemClick">
   <div class="imgbg"><img :src="showImage" alt @load="imageLoad" /></div> 
    <div class="title">{{goodsItem.title}}</div>
    <div class="itemdiv">
      <div class="price">
        <span>￥{{goodsItem.price}}</span>
      </div>
      <div class="collection">
        <span class="span">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  data() {
    return {};
  },
  methods: {
    imageLoad() {
      // console.log("imageload");
      this.$bus.$emit("imageLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  },
  components: {}
};
</script>

<style scoped>
.containgoods {
  width: 50%;
  padding: 0.8vw;
  float: left;
}
.containgoods .imgbg{
  height: 238px;
  display: flex;
}
.containgoods img {
  width: 100%;
  padding-bottom: 5px;
  border-radius: 10px;
  align-items: center;
}
.containgoods .title {
  white-space: nowrap;
  width: 99%;
  overflow: hidden;
  margin: 0 auto;
  text-overflow: ellipsis;
  font-size: 10px;
}
.containgoods .itemdiv {
  display: flex;
  flex-direction: row;
  margin-top: 3px;
}
.containgoods .itemdiv div {
  width: 50%;
  text-align: center;
  font-size: 12px;
}
.itemdiv .price {
  color: var(--color-high-text);
}
.collection::before {
  padding-right: 14px;
  margin-top: 10px;
  content: "";
  width: 12px;
  height: 12px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  z-index: 99;
  background-image: url("../../../assets/img/common/collect.svg");
}
</style>
