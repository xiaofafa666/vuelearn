<template>
 <div>
<div class="content">
 <div class="recommend" v-for="(item,index) in recommend"
 :key="index"
 >
 <a :href="item.link">
 <img :src="item.image" alt="">
 </a>
 <div class="itemtitle">{{item.title}}</div>
  </div>   
 </div>
 <div class="endcolor"></div>
</div>
</template>

<script>
export default {
    name:"Homecommend",
    props:{
        recommend:{
            type:Array,
            default(){
                return[]
            }
        }
    },
 data() {
  return {

  }
 },
 components: {

 }
}
</script>

<style scoped>
.content{
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    /* border-bottom:  rebeccapurple;
    z-index: 99; */
}
.content .recommend{
    flex:1
    /* width: 25%; */
}
.content .recommend img{
    padding: 5px;
    width: 100%;
}
.content .recommend .itemtitle{
    text-align: center;
}
.endcolor{
    width: 100%;
    height: 8px;
    background-color: rgba(185, 179, 179, 0.3);
}
</style>
