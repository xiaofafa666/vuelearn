<template>
  <div id="goodsparams">
    <div class="rules" v-if="Object.keys(goodsparams).length != 0">
      <div class="leftdiv" style="float:left">
        <div v-for="(item2, index2) in goodsparams.rule[0]" :key="index2">
          <div class="itemleft" v-if="item2[1] != '-'">{{ item2[0]}}</div>
        </div>
      </div>
      <!-- <div class="rightdiv"> -->
        <div v-for="(item1, index1) in goodsparams.rule" :key="index1" style="float:left">
          <tr v-for="(item, index) in item1" :key="index">
            <td v-for="(td_item, td_index) in item.length-1" :key="td_index">
              <div class="td" v-if="item[td_item] != '-'">{{ item[td_item]}}</div>
            </td>
          </tr>
        </div>
      <!-- </div> -->
    </div>
    <div v-for="(item,index) in goodsparams.info" :key="index">
      <div class="tab">
        <div class="left">{{item.key}}</div>
        <div class="right">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsparams: {
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

.rules {
  font-size: 12px;
  width: 95%;
  margin: 0 auto;
  line-height: 20px;
}
.leftdiv {
  width: 25%;
  color: #686767;
}
.itemleft {
  padding: 6px 0px 6px 8px;
}
.rightdiv {
  /* width: 75%; */
}
tr {
  border-bottom: 0.015rem solid #f4f4f4;
}
.td {
  width: 40px;
  color: #eb4868;
  padding: 6px 0px 6px 8px;
}

.tab {
  background-color: pink;
  font-size: 12px;
  width: 95%;
  display: flex;
  flex-direction: row;
  border-bottom: 0.015rem solid #f4f4f4;
  flex-flow: wrap;
  margin: 0 auto;
  line-height: 20px;
}
.left {
  flex: 1;
  color: #686767;
  margin: 6px 0px 6px 8px;
}
.right {
  flex: 4;
  color: #eb4868;
  margin: 6px 0px 6px 8px;
}
</style>
