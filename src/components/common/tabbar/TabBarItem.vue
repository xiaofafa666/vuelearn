<template>
 
   <div class="tab-bar-item" @click="itemClick">
       <div v-if="!isActive"><slot  name="item-icon"></slot></div>
       <div v-else><slot name="item-icon-active"></slot></div>
       <div :style="activestyle"><slot  name="item-text"></slot></div>
       <!-- <img src="../../assets/img/tabbar/wo.svg" alt="">
       <div>首页</div> -->
    </div>

</template>

<script>
// import HomeVue from '../../views/home/Home.vue'
export default {
    // name:"TabBarItem",
    props:{
        path:String
    },
 data() {
  return {
    //   isActive:true,
    //   path:'/home'
    activeColor:{
        type:String,
        default:'red'
    }
  }
 },
 computed:{
     isActive(){
         return this.$route.path.indexOf(this.path) !== -1
     },
     activestyle(){
         return this.isActive ? {color:this.activeColor}:{}
     }
 },
 components: {
 },
 methods:{
    itemClick(){
        // console.log("itemClick")
        // console.log(this.path)
        this.$router.replace(this.path)
        // console.log(this.$router)
    }
 }
}
</script>

<style scoped>
.tab-bar-item{
  text-align: center;
  height: 49px;
  flex: 1;
  font-size: 14px;

}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    /* padding-top: 2px; */
    margin-top: 3px;
    vertical-align: middle;
}
.active{
    color: red;
}
</style>
