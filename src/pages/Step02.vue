<template>
  <div>
    <p class="my-step-title">Step 2 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="20"></el-progress>
    <div>
      <!--<pdf src="../../static/pdf/agreement.pdf"></pdf>-->
      <iframe src="../../static/pdfjs/web/viewer.html" width="100%" height="500"></iframe>
    </div>
    <hr>
    <el-button class="previous-btn" @click="back()">Previous</el-button>
    <el-button type="primary"  class="next-btn" @click="go()">Next</el-button>
  </div>
</template>

<script>
export default {
  name: 'Step01',
  data () {
    return {
    }
  },
  mounted () {
    this.src.then(pdf => { this.numPages = pdf.numPages })
  },
  methods: {
    go () {
      this.$router.push({name: 'step03'})
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/css/common.css';

</style>
