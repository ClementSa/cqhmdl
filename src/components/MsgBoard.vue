<template>
  <div class="main">
    <div class="contus">
      <div class="wrapper clearfix">
        <!-- 左边的公司信息 -->
        <div class="company-msg fl">
          <div class="img-logo">
            <img src="../assets/logo2.png" alt="">
          </div>
          <div class="p">
            <p v-for="(item,i) of plist" :key="i">
              <img :src="item.imgurl" alt="icon">
              <b>{{item.btitle}}</b>
              {{item.pmsg}}
            </p>
          </div>
        </div>
        <!-- 右边的留言板 -->
        <div class="msg-board fr">
          <p>留言板</p>
          <em></em>
          <ul>
            <li>
              <img src="../assets/imgs/icon/icon6.png" alt="icon">
              <input type="text" placeholder="姓名">
            </li>
            <li>
              <img src="../assets/imgs/icon/icon7.png" alt="icon">
              <input type="text" placeholder="电话">
            </li>
            <li class="liarea">
              <img src="../assets/imgs/icon/icon8.png" alt="icon">
              <textarea name="body" id="reg" placeholder="请输入你的留言信息"></textarea>
            </li>
            <li class="code">
              <img src="../assets/imgs/icon/icon8.png" alt="icon">
              <input type="text" placeholder="验证码">
              <router-link to="javascript:;">
                <img src="../assets/vercode.png" alt="code" style="    cursor: pointer;">
              </router-link>
            </li>
          </ul>
          <input type="button" value="提交" class="push-btn">
        </div>
      </div>
    </div>
    <div class="thanks">
      <img src="../assets/imgs/thanks.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plist:[
        { imgurl: require('../assets/imgs/icon/icon1.png'), btitle:'公司地址：', pmsg:'重庆市九龙坡区九龙园区半山村29号' },
        { imgurl: require('../assets/imgs/icon/icon2.png'), btitle:'E -MAIL：', pmsg:'CQHUAMEIDL@163.COM' },
        { imgurl: require('../assets/imgs/icon/icon3.png'), btitle:'联系电话：', pmsg:'023-68952655 68158868' },
        { imgurl: require('../assets/imgs/icon/icon4.png'), btitle:'传          真：', pmsg:'023-68150760' },
        { imgurl: require('../assets/imgs/icon/icon5.png'), btitle:'售后电话：', pmsg:'023-68952655' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/styles/main.less");
  .contus{
    height: 480px;
    background: url(../assets/imgs/cont.jpg) no-repeat bottom center;
    box-sizing: border-box;
    padding-top: 55px;
    .company-msg{
      width:500px;
    }
    .img-logo{
      width: 174px;
      height: 60px;
      margin-bottom: 32px;
    }
  }

  .msg-board{
    width: 600px;
    p{
      font-size: 24px;
      line-height: 46px;
      color: #333;
    }
    em{
      display: inline-block;
      width: 75px;
      height: 3px;
      background: #ec1b24;
      margin-bottom: 25px;
    }
    li{
      background: #f2f6ff;
      float: left;
      width: 230px;
      height: 50px;
      line-height: 50px;
      padding: 0 10px;
      border-radius: 4px;
      margin-bottom: 20px;
      margin-right: 20px;
      img{
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
      input{
        background: none;
        font-size: 14px;
        color: #333;
        border: none;
        width: 175px;
        height: 36px;
      }
      textarea{
        width: 470px;
        height: 80px;
        line-height: 22px;
        padding: 10px 0;
        color: #333;
        font-family: "微软雅黑";
        border: none;
        resize: none;
        background: none;
      }
    }
    .liarea{
      width: 500px;
      height: 100px;
      img{
        vertical-align: top;
        margin-top: 15px;
      }
    }
    .code{
      width: 315px;
      padding-right: 0;
      a>img{
        float: right;
        width: 100px;
        height: 35px;
        margin-right: 0;
        margin-top: 7px;
      }
    }
    .push-btn{
      width: 100px;
      height: 40px;
      background: #EC1B24;
      color: #fff;
      font-size: 16px;
      letter-spacing: 1px;
      border-radius: 20px;
      border: none;
      margin-top: 5px;
    }
  }

  /**thanks img */
  .thanks{
    img{
      vertical-align: middle;
      max-width: 100%;
      border: none;
      -webkit-tap-highlight-color: rgba(255,0,0,0);}
  }
</style>