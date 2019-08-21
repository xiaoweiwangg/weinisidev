<template>
  <div class="ds">
    <div class="det"></div>
    <div class="cont">
      <textarea
        name=""
        id=""
        cols="50"
        rows="15"
        placeholder=" 每1个号码之间请用空格( )、逗号(,)、分号(;)隔开"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "GD"
};
</script>

<style lang="scss" scoped>
.ds{
  position: absolute;
  top:70px;
  .cont{
    text-align: center;
    display: flex;
    justify-content: center;
  }
  textarea{
    display: block;
    flex: 1;
    border: 2px dashed gold;
  }
}
</style>
