<template>
  <div class="hello">
    <div>test helloworld</div>
    <button v-print="printObj">Print local range</button>
    <div id="printMe" style="background:red;">
      <p>葫芦娃，葫芦娃</p>
      <p>一根藤上七朵花 </p>
      <p>小小树藤是我家 啦啦啦啦 </p>
      <p>叮当当咚咚当当 浇不大</p>
      <p> 叮当当咚咚当当 是我家</p>
      <p> 啦啦啦啦</p>
      <p>...</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      printObj: {
        id: 'printMe',
        popTitle: 'good print',
        extraCss: 'https://www.google.com,https://www.google.com',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
