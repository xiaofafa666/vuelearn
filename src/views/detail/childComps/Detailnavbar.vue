<template>
  <div id="container">
    <nav-bar class="navbar">
        <div slot="left" @click="goback"><img class="backimg" src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="navtitle">
        <div class="itemtitle" v-for="(item,index) in navtitle" :key="index"
        :class="{active:currentIndex === index}"
        @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      navtitle: ["首页", "详情", "评论", "推荐"],
      currentIndex:0
    };
  },
  components: {
    NavBar
  },
  methods:{
      itemClick(index){
          this.currentIndex = index
      },
      goback(){
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped>
.navbar{
    background-color: var(--color-tint);
}
.backimg{
    width: 20px;
    height: 20px;
    margin-top: 10px;
    line-height: 44px;
    /* size: 18px; */
    /* fill: white; */
    
/* mask-image: url(~assets/img/common/back.svg); */
   /* background-color: white; */
}
.navtitle{
    display: flex;
    /* flex-direction: row; */
}
.itemtitle{
    flex: 1;
    font-size: 14px;
    font-weight: inherit;
}
.active{
    font-size: 16px;
    color: rgb(15, 135, 216);
}
</style>
