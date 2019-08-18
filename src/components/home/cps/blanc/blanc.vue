<template>
  <div class="gg">
    <span class="iconfont icon-gonggao"></span>
    <van-swipe
      indicator-color="transparent"
      :autoplay="2500"
      style="height:30px;"
      vertical
    >
      <van-swipe-item v-for="(item, index) in gglist" :key="index">{{
        item.cont
      }}</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "BlancV",
  data() {
    return {
      gglist: null
    };
  },
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem
  },
  mounted() {
    this.axios.get("/gonggao").then(x => {
      this.gglist = x.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.gg {
  display: flex;
  line-height: 30px;
  .icon-gonggao {
    font-size: 20px;
    margin: auto 8px;
  }
  .van-swipe {
    flex: 1;
    font-size: 16px;
  }
}
</style>
