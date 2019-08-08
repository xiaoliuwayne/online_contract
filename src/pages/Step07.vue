<template>
  <div>
    <p class="my-step-title">Step 7 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
    <p>Bank Information:</p>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Bank Name<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Bank Address<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Address Line 2</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">City</p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">State/Province/Region</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">ZIP/Postal Code</p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Country</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <div>Note: for statements & chargeback notifications - if different than physical</div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
        <p class="item-title">Account Number<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <p class="item-title">Routing Number<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <p class="item-title">Swift Code<span class="must-label">*</span></p>
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
      this.$router.push({name: 'step08'})
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
