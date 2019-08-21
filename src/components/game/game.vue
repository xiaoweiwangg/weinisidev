<template>
    <div>

        <s-game @update="up"></s-game>
        <div class="kjdeg">

        </div>
    <component :is="'yx'" :playgame="playname"></component>
    </div>
</template>

<script>
import SGame from "./base/selgame/select"
import BaseLottor from "./base/pos/pos"
    export default {
        name:"WGame",
        components:{
          "yx":  BaseLottor,
          SGame
        },
        data(){
            return {
                playname:""
            }
        },
        methods:{
            up(x){
               console.log(x);
               this.playname=x
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>