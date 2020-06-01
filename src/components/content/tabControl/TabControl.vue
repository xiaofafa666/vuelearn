<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in title" :key="index" class="tabcontrollist">
      <span class="nocheck" :class="{ischeck: index===currentIndex}" 
      @click="itemclick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
        currentIndex:0,
    };
  },
  methods:{
          itemclick(index){
            //   console.log(index)
            this.currentIndex = index
      }
  },
  components: {}
};
</script>

<style scoped>
.tabcontrol{
    display: flex;
    height: 35px;
    line-height: 35px;
}
.tabcontrol .tabcontrollist{
    flex: 1;
    text-align: center;
}
.nocheck{
    font-size: 14px;
}
.ischeck{
    border-bottom: 3px solid var(--color-high-text);
    /* border-color: red; */
    color: var(--color-high-text);
    font-size: 16px;
}
</style>
