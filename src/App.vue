<template>
  <div id="app">
    <my-header></my-header>
    <div class="my-page"><router-view/></div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
export default {
  components: {MyHeader}
}
</script>

<style>
  #app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
  .my-page{
    /*background: aquamarine;*/
    width: 60%;
    margin: 0 auto;
  }
</style>
