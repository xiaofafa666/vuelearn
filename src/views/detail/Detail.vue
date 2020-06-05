<template>
  <div class="detail">
      <detailnavbar></detailnavbar>
  </div>
</template>

<script>
import Detailnavbar from "views/detail/childComps/Detailnavbar";
export default {
  data() {
    return {
      iid: null
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
  components: {
    Detailnavbar
  }
};
</script>

<style scoped>
</style>
