<template>
  <div class="footer">
    <v-tab>
      <router-link :to="{ name: 'home' }" exact>
        <div class="item">
          <i class="iconfont icon-shouye"></i><span>首页</span>
        </div>
      </router-link>
      <router-link :to="{ path: '/active' }" exact>
        <div class="item">
          <i class="iconfont icon-huodong"></i><span>活动</span>
        </div>
      </router-link>
      <router-link :to="{ path: '/talks' }" exact>
        <div class="item">
          <i class="iconfont icon-custom-service"></i><span>找客服</span>
        </div>
      </router-link>
      <router-link :to="{ path: '/manager' }" exact>
        <div class="item">
          <i class="iconfont icon-management"></i><span>个人中心</span>
        </div>
      </router-link>
    </v-tab>
  </div>
</template>

<script>
import { Tabbar } from "vant";
export default {
  name: "Home-Footer",
  components: {
    VTab: Tabbar
  }
};
</script>

<style lang="scss" scoped>
.footer {
  .van-tabbar {
    a {
      color: #bbb;
    }
    height: 60px;
    background-color: #22292c;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      display: flex;
      flex-flow: column;
      text-align: center;
      i {
        font-size: 28px;
      }
      span {
        font-size: 18px;
        margin-top: 5px;
      }
      .icon-shouye {
        font-weight: bolder;
      }
      .icon-liaotian {
        font-size: 30px;
        font-weight: bolder;
      }
    }
    .router-link-exact-active {
      color: red !important;
    }
  }
}
</style>
