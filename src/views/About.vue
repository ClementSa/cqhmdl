<template>
  <div class="about-us">
    <div class="top-bar">
        <div class="top-img"></div>
    </div>
    <div class="about-nav">
      <div class="wrapper">
        <ul class="clearfix">
          <li><router-link :to="{name: 'msgboard'}">联系我们</router-link></li>
          <li><router-link :to="{name: 'map'}">地图导航</router-link></li>
        </ul>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@import url("../assets/styles/main.less");
  /*顶部图片*/
  .top-bar{ 
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 400px;
    .top-img{
      height: 100%;
      width: 100%;
      background: url("../assets/imgs/headimg/head7.jpg") no-repeat center center;
      background-size: cover;
    }
  }

  
</style>