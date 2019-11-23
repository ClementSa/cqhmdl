<template>
  <div class="news-bar">
    <div class="top-bar">
        <div class="top-img"></div>
    </div>
    <div>新闻中心</div>
  </div>
</template>

<script>

export default {
  name: "news",
  components: {
  }
};
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
      background: url("../assets/imgs/headimg/head2.jpg") no-repeat center center;
      background-size: cover;
    }
  }
</style>
