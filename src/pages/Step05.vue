<template>
  <div>
    <p class="my-step-title">Step 5 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="50"></el-progress>
    <p>Merchant Profile</p>
    <el-row :gutter="20">
      <el-col :span="20"><div class="grid-content bg-purple">
        <p class="item-title">Type of Ownership<span class="must-label">*</span></p>
        <el-radio-group v-model="radio">
          <el-radio :label="3">Sole Proprietor</el-radio>
          <el-radio :label="6">Partnership</el-radio>
          <el-radio :label="9">Professional Assoc.</el-radio>
          <el-radio :label="12">Corporation</el-radio>
          <el-radio :label="15">Tax Exempt Org (501C)</el-radio>
          <el-radio :label="18">LLC</el-radio>
          <el-radio :label="18">Other</el-radio>
        </el-radio-group>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">eBusiness Established Date<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Federal Tax ID #<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="20"><div class="grid-content bg-purple">
        <p class="item-title">Complete Description Business and Goods or Sold<span class="must-label">*</span></p>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          maxlength="30"
          show-word-limit
        >
        </el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
        <p class="item-title">Annual Sale<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <p class="item-title">Average Ticket $<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <p class="item-title">Max Ticket $<span class="must-label">*</span></p>
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
      this.$router.push({name: 'step06'})
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
