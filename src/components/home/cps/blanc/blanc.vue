<template>
  <div class="gg">
    <van-swipe indicator-color="transparent" :autoplay="2500" style="height:30px;" vertical>
      <van-swipe-item v-for="(item, index) in gglist" :key="index">
        {{
        item.cont
        }}
      </van-swipe-item>
    </van-swipe>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-guangbo" />
    </svg>
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
  padding-left: 15px;
  display: flex;
  line-height: 30px;
  .icon {
    font-size: 25px;
    margin: auto 15px;
  }
  .van-swipe {
    flex: 1;
    font-size: 16px;
  }
}
</style>
