<template>
  <div>
    <h-header :t="'购 彩 大 厅'"></h-header>
    <swi-per></swi-per>
    <van-notice-bar :text="cont" left-icon="volume-o" />
    <play-list></play-list>
  </div>
</template>

<script>
import { NoticeBar } from "vant";
import HHeader from "./cps/header/header";
import SwiPer from "./cps/sweiper/spwiper";
import PlayList from "./cps/playlist/playlist";
export default {
  name: "HomeV",
  components: {
    HHeader,
    SwiPer,
    PlayList,
    [NoticeBar.name]: NoticeBar
  },
  data() {
    return {
      gglist:[{cont:"欢迎来到威尼斯娱乐城"}],
      x:0,
      time:null
    };
  },
  computed:{
    cont(){
      return this.gglist[this.x].cont
    }
  },
  mounted(){
    
    this.axios.get("/gonggao").then(x => {
      this.gglist = x.data;
      console.log(x.data);
      this.time=setInterval(() => {
        this.x++
        if(this.x>=this.gglist.length){
          this.x=0
        }
      }, 5000);
    });
  }
  ,destroyed(){
    window.clearInterval(this.time)
    this.time=null
  }
};
</script>

<style lang="scss" scoped></style>
