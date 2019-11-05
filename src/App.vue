<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components:{
    Header,Footer
  }
}
</script>

<style>
@import "./assets/styles/reset.css";
#app{
  position: relative;
  background: #fff;
  font-size: 14px;
  margin: auto;
  font-family: "微软雅黑";
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
</style>
