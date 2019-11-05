<template>
  <div class="header-bar">
    <div class="header-main">
      <div class="logo fl">
        <router-link to=""><img src="@/assets/logo.png" alt="公司logo"></router-link>
      </div>
      <div class="fr">
        <div class="header-nav fl">
          <ul>
            <li v-for="(item,i) of navlist" :key="i" >
              <router-link :to="item.link">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
        <div class="header-search fl">
          <i></i>
          <input type="text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navlist:[
        { title: '华美首页', link: '/' },
        { title: '走进华美', link: '/company' },
        { title: '新闻中心', link: '/news' },
        { title: '主导产品', link: '/product' },
        { title: '合作案例', link: '/case' },
        { title: '企业文化', link: '/culture' },
        { title: '人才招聘', link: '/advert' },
        { title: '联系我们', link: '/about' }
      ]
    }
  }
}
</script>

<style lang="less">
  // header 头部
  .header-bar{position: relative; width: 100%;height: 60px;background-color: #e2e7f1}

  // header-main头部主体
  .header-main{width: 1340px;margin: 0 auto;}

  // 公司logo
  .logo{width: 133px; height: 46px; margin-top: 6px;}

  .header-nav ul li{
    float: left;
    width: 95px;
    line-height: 60px;
    text-align: center;
    a{display: block; font-size: 14px;color: #1c3d7b;}
    a:hover{color: #ec1e28;background: #c8d0df;}
  }
  .header-search{
    width: 120px;
    margin-top: 15px;
    height: 30px;
    background: #c6cee0;
    border-radius: 20px;
    padding: 0 6px;
    margin-left: 50px;
    input{
      background: none;
      border: 0;
      display: inline-block;
    }
  }
</style>