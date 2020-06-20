/**
 * 防抖minxin封装
 */
import { deBounce } from "common/utils.js";
export const itemListenerMinxin = {
  data() {
    return {
      bcFunc: null
    };
  },
  mounted() {
    // 防抖
    let deBounceRefresh = deBounce(this.$refs.scroll.refresh, 50);
    this.bcFunc = () => {
      //利用 $bus 事件监听，去刷新 scroll的高度
      deBounceRefresh();
    };
  }
};