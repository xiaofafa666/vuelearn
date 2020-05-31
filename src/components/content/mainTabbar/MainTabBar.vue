<template>
       <tab-bar>
     <tab-bar-item path="/home" activeColor="deeppink">
       <img slot="item-icon" src="~assets/img/tabbar/shouye.svg" alt="">
       <img slot="item-icon-active" class="item-icon-active" src="~assets/img/tabbar/shouye_hover.svg" alt="">
       <div slot="item-text">首页</div>
     </tab-bar-item>
     <tab-bar-item path="/category" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/fenlei.svg" alt="">
        <img slot="item-icon-active" class="item-icon-active" src="~assets/img/tabbar/fenlei_hover.svg" alt="">
       <div slot="item-text">分类</div>
     </tab-bar-item>
     <tab-bar-item path="/cart" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/baoshuicang.svg" alt="">
        <img slot="item-icon-active" class="item-icon-active" src="~assets/img/tabbar/baoshuicang_hover.svg" alt="">
       <div slot="item-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path="/profile" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/wo.svg" alt="">
        <img slot="item-icon-active" class="item-icon-active" src="~assets/img/tabbar/wo_hover.svg" alt="">
       <div slot="item-text">我的</div>
     </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem  from '../../common/tabbar/TabBarItem';

export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }

}
</script>

<style>
.item-icon-active{
  color: rgba(238, 125, 125 );
}
</style>