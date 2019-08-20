<template>
    <div class="child">
        <li @click="up(cont,index)" :class="{act:'chekact(cont,index)'}">{{cont}}</li>
    </div>
</template>

<script>
    export default {
        props:["cont","index"],
        name:"GChild",
        data(){
            return {
            }
        },
        methods:{
            chekact(cont,index){
                return false
            }
        }
    }
</script>

<style lang="scss" scoped>
.child{
    li{
        height: 30px;
        width: 30px;
        border: 2px solid black;
        border-radius: 50%;
        line-height: 30px;
        text-align: center;
    }
    .act{
        background-color: red;
    }
}
</style>