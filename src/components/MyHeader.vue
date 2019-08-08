<template>
  <div class="my-header">
    <div class="line"></div>
    <el-row :gutter="20">
      <el-col :span="5"><div class="logo"><img src="../assets/imgs/yuansfer_LOGO.png" alt=""></div></el-col>
      <el-col :span="16"><div class="header-right" style="">
        <el-menu
          :default-active="activeIndex"
          background-color="#F6F9FC"
          text-color="#4A4A4A"
          active-text-color="#47A2FF"
          class="el-menu-demo my-menu"
          mode="horizontal"
          @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">Services</template>
            <el-menu-item index="1-1"><a href="https://www.yuansfer.com/alipay-wechat/">Alipay/Wechat Pay</a></el-menu-item>
            <el-menu-item index="1-2"><a href="https://www.yuansfer.com/credit-card/">Credit Card</a></el-menu-item>
            </el-submenu>
          <el-submenu index="2">
            <template slot="title">Verticals</template>
            <el-menu-item index="2-1"><a href="https://www.yuansfer.com/ecommerce/">eCommerce</a></el-menu-item>
            <el-menu-item index="2-2"><a href="https://www.yuansfer.com/hospitality/">Hospitality</a></el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.yuansfer.com/partners/">Partners</a></el-menu-item>
          <!--<el-menu-item index="4"><a href="https://docs.yuansfer.com/en/" target="_blank">Developer</a></el-menu-item>-->
          <el-menu-item index="4"><a href="https://docs.yuansfer.com/en/">Developer</a></el-menu-item>
          <el-menu-item index="5">
            <a href="https://www.yuansfer.com/contact-us/">Contact</a> |
            <a href="https://portal.yuansfer.com/#/login">Sign in</a>
          </el-menu-item>
        </el-menu>
        <!--网签系统-->
        <el-button class="apply">Apply</el-button>
      </div>
        </el-col>
      <el-col :span="3"><div class=""></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col><div class="my-title">Online Contract - Yuansfer</div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: '0',
      activeIndex2: '0'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  a{
    text-decoration:none;
    color: #4A4A4A;
  }
  .my-header{
    height: 100px;
    background: #F6F9FC;
    .header-right{
      display: flex;
      padding-left: 250px
    }
    .my-menu{
      width: 600px;
      padding-top: 10px;
      /*margin: 0 auto;*/
    }
    .my-title{
      font-family: DIN Next LT Pro Medium;
      font-size: 28px;
      background: #F6F9FC;
      padding-bottom: 20px;
      text-align: center;
    }
    .logo{
      padding: 39px 0 0 121px;
      img{
        width: 138px;
        height: 30px;
      }
    }
    .apply{
      width:132px;
      height:40px;
      background:rgba(255,255,255,1);
      border-radius:6px;
      margin-top: 20px;
      /*float: left;*/
      /*position: fixed;*/
      /*left: 75%;*/
      /*top:25px;*/
      font-size: 17px;
      font-family: Rajdhani SemiBold;
      color: #47A2FF;
    }
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
