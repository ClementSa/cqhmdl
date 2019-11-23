<template>
  <!-- 首页 -->
  <div class="homepage clearfix">
    <div class="com-about clearfix">
      <div class="about-msg">
        <img src="@/assets/imgs/aboutus.png" alt="关于我们">
        <div class="about-content">重庆华美电力设备有限责任公司位于重庆市九龙坡区九龙园区B区，主营35KV及以下高低压成套智能电器设备、母线槽、电缆桥架，辅营高低压电器元件、电子产品等，是一家集设计、研发、制造、销售、总包及服务为一体的现代企业。公司自2006年成立以来，一贯秉承“重产品质量、重内部管理、重社会效益”的经营理念，确立了“为客户、为员工、为社会”的企业使命，产品均获得了国家强制CCC认证或国家权威检测中心的型式试验，通...</div>
        <img src="@/assets/imgs/more.png" alt="更多">
      </div>
      <img src="@/assets/imgs/purpose.jpg" alt="" class="index-img" title="关于我们">
    </div>
    <div class="contact-about clearfix">
      <img src="@/assets/imgs/cp.jpg" alt="" class="index-img" title="产品中心">
      <div class="contact-msg">
        <img src="@/assets/imgs/inde04.png" alt="联系我们">
        <div class="contact-content">
          <p v-for="(item,i) of companyMsgList" :key="i"><img :src="item.iconUrl" alt="地址" class="icon"><b>{{item.title}}</b>{{item.detail}}</p>
        </div>
      </div>
    </div>
    <div class="com-video">
      <video height="370" src="@/assets/video/hmdl.mp4" muted autoplay loop></video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyMsgList:[
        { iconUrl: require("@/assets/imgs/icon/icon-ad.png") , title: '公司地址:' , detail: '重庆市九龙坡区九龙园区半山村29号' },
        { iconUrl: require("@/assets/imgs/icon/icon-msg.png") , title: 'E-MAIL:' , detail: 'CQHUAMEIDL@163.COM' },
        { iconUrl: require("@/assets/imgs/icon/icon-phone.png") , title: '联系电话:' , detail: '023-68952655 68158868' },
        { iconUrl: require("@/assets/imgs/icon/icon-fax.png") , title: '传真:' , detail: '023-68150760' },
        { iconUrl: require("@/assets/imgs/icon/icon-sh.png") , title: '售后电话:' , detail: '023-68952655' }
      ]
    };
  }
}
</script>

<style lang="less" scoped>
  .homepage{ 
    position: relative; 
  }
  .com-about{ 
    width: 100%; 
  }

  /* 公司介绍 */ 
  .about-msg{ 
    width: 34%; 
    float: left; 
    padding: 2.6% 8%; 
  }
  .about-content{ 
    line-height: 32px; 
    max-height: 192px; 
    overflow: hidden; 
    color: #666666; 
    font-size: 16px; 
    margin: 4.5% 0; 
    text-align: justify;
  }
  .index-img{ 
    width: 50%; 
    height: 450px;
  }
  .icon{ 
    padding-right: 15px;
  }

  /* 公司联系信息 */
  .contact-msg{ width: 38%; float: right; padding-left: 12%; padding-top: 5%;}
  .contact-content{ font-size: 18px;line-height: 48px; margin-top: 5%; color: #333333;text-transform: uppercase;
    img{margin-right: 12px; vertical-align: middle;}
    b{font-weight: bold;padding-right: 15px;}
  }
  /* 公司视频 */  
  .com-video{ position: absolute; width:450px; height:450px; border-radius: 50%; overflow: hidden; border: 6px solid #fff;
    video{ position: absolute; z-index: 999; left: 0; width: auto; height: 100%; text-align: center; }
  }
  .video{ position: absolute; left: 0; right: 0; top: 0; bottom: 0; border-radius: 50%; overflow: hidden; margin: auto; width: 450px; height: 450px; border: 6px solid #fff; }  

  /* 视频设置 */
  /*video默认全屏按钮*/
  video::-webkit-media-controls-fullscreen-button{ display: none !important; }

  /*video默认aduio音量按钮*/
  video::-webkit-media-controls-mute-button { display: none !important;}

  /*video默认setting按钮*/
  video::-internal-media-controls-overflow-button{ display: none !important;}
</style>