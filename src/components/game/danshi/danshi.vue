<template>
  <div class="ds">
    <div class="cont">
      <textarea
        name
        v-model.trim="cont"
        id
        rows="15"
        placeholder=" 每1个号码之间请正确统一 统一 统一使用空格( )、或逗号(,)、或分号(;)隔开,否则校验异常将无法提交."
      ></textarea>
      <van-button type="info" @click="smit">格式检查</van-button>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  props:["name","gamelist"],
  name: "GD",
  data() {
    return {
      cont: ""
    };
  },
  methods: {
    ck(x){
        if(x.includes("二")){
          return 2
        }
        if(x.includes("三")){
          return 3
        }
        if(x.includes("四")){
          return 4
        }
        if(x.includes("五")){
          return 5
        }
      },

    smit() {
      if(this.cont.length<2){
        return
      }
      this.cont+=" "
      let str = this.cont;
      let cont = [];
      let num=0

      for(let i in str){
        if(str[i]!=" "&&str[i]!=";"&&str[i]!=","&&isNaN(str[i])&&str[i]!="."){
           this.$notify({
            message: `检测到非法投注,请重新输入确认,(errorcode:000)`
          });
          return
        }
      }
      str.includes(",") && (str = str.toString().split(","));
      str.includes(" ") && (str = str.toString().split(" "));
      str.includes(";") && (str = str.toString().split(";"));
     
      
      str.map((z,index) => {
        z.replace(/\s*/g, "");
        if(z.length==0){
          str.splice(index,1)
        }
        
      });
       str.map(c=>{
        num+=c.length
      })
      num=num/str.length
      if(num!==this.ck(this.name)){
        this.$notify({
            message: `检测到输入异常,请重新确认,(errorcode:001)`
          });
          return
      }
      if(num.toString().includes(".")){
         this.$notify({
            message: `检测到输入异常,请重新确认,(errorcode:002)`
          });
      }
      
      this.$emit("submi",str);
    }
  }
};
</script>

<style lang="scss" scoped>
.ds {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  .cont {
    text-align: center;
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
  }
  textarea {
    display: block;
    flex: 1;
    width: 100%;
    border: 2px dashed gold;
  }
}
</style>
