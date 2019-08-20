<template>
    <div>

        <div class="controlgame">
56546546541646584
        </div>
        sadfadfasdfasdfasdf
    <component :is="'BaseLottor'"></component>
    </div>
</template>

<script>
import BaseLottor from "./base/pos/pos"
    export default {
        name:"WGame",
        components:{
            BaseLottor
        }
    }
</script>

<style lang="scss" scoped>
.controlgame{
    height: 50px;
    background-color: #110e0e;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>