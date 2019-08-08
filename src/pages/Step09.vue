<template>
  <div>
    <p class="my-step-title">Step 9 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="90"></el-progress>
    <p>Review</p>
    <hr>
    <el-button class="previous-btn" @click="back()">Previous</el-button>
    <el-button type="primary"  class="next-btn" @click="go()">Next</el-button>
  </div>
</template>

<script>
export default {
  name: 'Step09',
  methods: {
    go () {
      this.$router.push({name: 'step10'})
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
