<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <router-link to="/jiangli">
          <img
            src="https://images.imags-google.com//2ycptz/mobile/banner/banner1.png?240774"
            alt=""
          />
        </router-link>
      </van-swipe-item>
      <van-swipe-item>
        <router-link to="/jiajiang">
          <img
            src="https://images.imags-google.com//2ycptz/mobile/banner/banner2.png?646609"
            alt=""
          />
        </router-link>
      </van-swipe-item>
      <van-swipe-item>
        <router-link to="/">
          <img
            src="https://images.imags-google.com//2ycptz/mobile/banner/banner3.png?727411"
            alt=""
          />
        </router-link>
      </van-swipe-item>
      <van-swipe-item>
        <a href="/daili/index.html">
          <img
            src="https://images.imags-google.com//2ycptz/mobile/banner/banner4.png?550582"
            alt=""
          />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "SwiperV",
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem
  }
};
</script>

<style lang="scss" scoped>
.van-swipe-item {
  width: 100vw;
}
.van-swipe {
  width: 100vw;
}
img {
  height: 140px;
  width: 100%;
}
</style>
