<template>
  <div class="commomt" v-if="Object.keys(goodsrate).length != 0">
    <div class="comleft">
      用户评价
      <div class="right">更多</div>
    </div>
    <div class="top">
      <img class="left" :src="goodsrate.user.avatar" alt />
      <div class="left">{{goodsrate.user.uname}}</div>
    </div>
    <div class="bottom">{{goodsrate.content}}</div>
    <div class="bottom">{{goodsrate.created | showDate}}</div>
  </div>
</template>

<script>

import {formatDate} from "common/utils"

export default {
  props: {
    goodsrate: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
    showDate(value){
      const date = new Date(value*1000)

      return formatDate(date,'yyyy-MM-dd')
    }
  }
};
</script>

<style scoped>
.commomt {
  width: 100%;
  padding: 10px;
  color: #868383;
  /* border-top: 3px solid grey;
  border-bottom: 3px solid grey; */
  background-color: white;
}
.comleft {
  height: 30px;
  line-height: 22px;

}
.comright {
  float: right;
}
.top {
  height: 50px;
  line-height: 50px;
}
.top img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.bottom {
  padding: 6px;
  font-size: 0.28rem;
}

</style>
