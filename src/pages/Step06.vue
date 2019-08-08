<template>
  <div>
    <p class="my-step-title">Step 6 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="60"></el-progress>
    <p>Owner / Officer Information:</p>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Owner/ Officer Name(#1)<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Title<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Date Of Birth<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Contact Number<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Owner/ Officer Name(#2)</p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Title</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Date Of Birth</p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Contact Number</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <hr>
    <el-button class="previous-btn" @click="back()">Previous</el-button>
    <el-button type="primary"  class="next-btn" @click="go()">Next</el-button>
  </div>
</template>

<script>
export default {
  name: 'Step01',
  methods: {
    go () {
      this.$router.push({name: 'step07'})
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
