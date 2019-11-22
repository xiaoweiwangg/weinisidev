<template>
  <div>
    <t-header :l="true" :t="'下 级 管 理'"></t-header>
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="( i , t ) in arr" :key="t" :title="'用户名:   '+i['name']" :name="t">
      当前余额:{{i.balance}}  元, 用户投注返点率: {{value|v}}%
      <hr>
      <h1>滑动滑块以调整用户返点儿</h1>
      <p>
        <van-slider
  v-model="value"
  active-color="#ee0a24"
  :min="0" :max="2"
  :step="0.01"
>
  <div
    slot="button"
    class="custom-button"
  >
    {{ value }}
  </div>
</van-slider>
      </p>
      <van-button type="primary">提交设置</van-button>
      <hr>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import THeader from "../../../../home/cps/header/header";
import { Slider } from "vant";
export default {
  name: "guanli",
  components: {
    THeader,
    [Slider.name]: Slider
  },
  data() {
    return {
      arr: [],
      activeNames: [],
      value: 2
    };
  },
  filters:{
    v(x){
      return x.toFixed(2)
    }
  },
  mounted() {
    this.axios
      .post("/fallx", {
        name: JSON.parse(sessionStorage.getItem("userinfo")).name
      })
      .then(x => {
        this.arr = x.data.per;
      });
  }
};
</script>

<style lang="scss" scoped>
h1 {
  line-height: 40px;
}
.van-button {
  margin: 14px 0;
}
.custom-button{
  height: 25px;
  width: 25px;
  background-color: rgb(26, 39, 7);
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  color: white;

}
</style>