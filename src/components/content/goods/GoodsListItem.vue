<template>
  <div class="container">
    <img :src="goodsItem.show.img" />
    <div class="title">{{goodsItem.title}}</div>
    <div class="itemdiv">
      <div class="price"><span>￥{{goodsItem.price}}</span></div>
      <div class="collection"><span class="span">{{goodsItem.cfav}}</span></div>
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
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.container{
    width: 50vw;
    padding: 0 0 0 2vw ;
    margin-bottom:5px;	 
		-moz-page-break-inside: avoid;
                -webkit-column-break-inside: avoid;
 }
.container img{
    width: 100%;
    padding-bottom: 5px;
    border-radius: 10px;
}
.container .title{
    /* padding: 0 6px; */
    white-space: nowrap;
    width: 99%;
    overflow: hidden;
    margin: 0 auto;
    text-overflow: ellipsis;
    font-size: 10px;
}
.container .itemdiv{
    display: flex;
    flex-direction: row;
    margin-top: 3px;
}
.container .itemdiv div{
    width: 50%;
    text-align: center;
    font-size: 12px;
}
.itemdiv .price{
    color: var(--color-high-text);
}
.collection::before{
    padding-right: 14px;
    margin-top: 10px;
    content: '';
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    /* background-color: red; */
    z-index: 99;
    background-image: url("../../../assets/img/common/collect.svg") 
}
</style>
