<template>
    <div>
        <ul>
            <g-lottor v-for="(item , index ) in 10" :key="index" :cont="item" :index="index"></g-lottor>
        </ul>
    </div>
</template>

<script>
import GLottor from "../lottor/lotter"
    export default {
        name:"GPos",
        components:{
            GLottor,
        }
    }
</script>

<style lang="scss" scoped>

</style>