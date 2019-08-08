<template>
  <div>
    <p>ffkkk</p>
    <header></header>
    <abo-test></abo-test>
    <!--<hello-world></hello-world>-->
    <div id="pdfDom" style="padding-top: 55px;background-color:#fff;">
      <p>dsdsdsds</p>
      <div>divdvid</div>
      <span>span111</span><span>span222</span>
      <button>button</button>
      <input placeholder="placeholder1111"/>
    </div>
    <button type="button" v-on:click="getPdf()">导出pdf</button>
  </div>
</template>

<script>
import Header from '../components/MyHeader'
import HelloWorld from '../components/HelloWorld'
import AboTest from '../components/AboTest'
export default {
  data () {
    return {
      htmlTitle: 'testPDF'
    }
  },
  components: {Header, HelloWorld, AboTest}
}
</script>

<style scoped>

</style>
