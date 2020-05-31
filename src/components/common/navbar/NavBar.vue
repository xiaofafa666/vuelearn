<template>
 <div class="nav-bar">
     <div class="left"><slot name="left"></slot></div>
     <div class="center"><slot name="center"></slot></div>
     <div class="right"><slot name="right"></slot></div>
 </div>
</template>

<script>
export default {
    name:"NavBar",
 data() {
  return {

  }
 },
 components: {

 }
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        flex-direction: row;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-weight: bolder;
        font-size: 18px;
        /* z-index: 9; */
    }
   .nav-bar .left{
       flex: 1;
       /* background-color: aqua; */
   }
   .nav-bar .center{
       flex: 5;
        /* background-color: blue; */
   }
   .nav-bar .right{
       flex: 1;
        /* background-color: chartreuse; */
   }
</style>
