<template>
 <div>
   <p class="my-step-title">Step 10 of 10 </p>
   <el-progress :text-inside="true" :stroke-width="26" :percentage="100"></el-progress>
   <p>Download the PDF document</p>
   <hr>
   <el-button class="previous-btn" @click="back()">Previous</el-button>
   <el-button type="primary"  class="next-btn" @click="submit()">Submit</el-button>
 </div>
</template>

<script>
export default {
  name: 'Step01',
  methods: {
    submit () {
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
