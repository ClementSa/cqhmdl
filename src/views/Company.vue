<template>
  <div class="">
    <div class="top-bar">
      <div class="top-img"></div>
    </div>
    <ul class="com-info-nav">
      <li>华美简介</li>
      <li>资质荣誉</li>
      <li>组织架构</li>
      <li>华美初心</li>
    </ul>
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
      background: url("../assets/imgs/headimg/head1.jpg") no-repeat center center;
      background-size: cover;
    }
  }
  .com-info-nav{width: 100%;height: 100px;
    li{float: left;margin: 15px;}
  }
</style>