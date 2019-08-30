<template>
  <div class="a">
    <t-header :t="'活 动 中 心'"></t-header>
    <div class="item" v-for="(item,index) in dt" :key="index">
      <div class="left" :style="{background:rand()}">
        <p>{{index}}</p>
      </div>
      <div class="right">
        <div class="tit">{{item.title}}</div>
        <div class="detail">{{item.detail}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "underscore";
import THeader from "../home/cps/header/header";
export default {
  name: "ActiveV",
  components: {
    THeader
  },
  data() {
    return {
      dt: [1, 234]
    };
  },
  methods:{
    rand(){
      return 'rgb('+_.random(0,255)+','+_.random(0,255)+','+_.random(0,255)+')'
    }
  },
  mounted() {
    console.log(this.rand());
    
    this.axios.get("/active").then(d => {
      this.dt = d.data;
      console.log(d.data);
    });
  }
};
</script>

<style lang="scss" scoped>
.a {
  padding-top: 45px;
  background-color: #efeef4;
  height:100%;
  .item {
    display: flex;
    background-color: #fff;
    margin:15px 0;
    .left {
      color: wheat;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      text-align: center;
      border: 1px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        height: 30px;
        width: 30px;
        border: 1px solid white;
        border-radius: 50%;
        line-height: 30px;
        font-size: 20px;
      }
    }
      .right{
      margin: 0 10px;
        display:flex;
        flex-flow: column;
        .tit,.detail{
          flex:1;
        line-height: 36px;
          font-size: 23px;
        }
        .detail{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 20px;
        width: 280px;
        color: #686868;
        }
      };
  }
}
</style>
