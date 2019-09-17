<template>
    <div>
        <div class="cont">
            <div class="zhuang">
                <div class="name">庄</div>
            </div>
            <div class="x1">
                <div class="name">闲1</div>
            </div>
            <div class="x2">
                <div class="name">闲2</div>
            </div>
            <div class="x3">
                <div class="name">闲3</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"PlayV",

    }
</script>

<style lang="scss" scoped>
.cont{
    display: flex;
    justify-content: space-around;
    color:#f8c430;
    font-size: 30px;
    font-weight: 900;
    font-family: "宋体";
    margin-top: 15px;
    letter-spacing: 5px;
    text-shadow: 2px 2px 2px black;
    .x1,.zhuang,.x2,.x3{
        width: 25%;
        height: 120px;
        text-align: center;
    }
}
</style>