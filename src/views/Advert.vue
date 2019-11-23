<template>
  <div class="about-us">
    <div class="top-bar">
        <div class="top-img"></div>
    </div>
    <div>人才招聘</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  /*顶部图片*/
  .top-bar{ 
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 400px;
    .top-img{
      height: 100%;
      width: 100%;
      background: url("../assets/imgs/headimg/head6.jpg") no-repeat center center;
      background-size: cover;
    }
  }
</style>