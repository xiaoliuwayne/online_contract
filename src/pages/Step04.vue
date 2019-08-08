<template>
  <div>
    <p class="my-step-title">Step 4 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="40"></el-progress>
    <p>Business Information</p>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Merchants DBA Name(Doing Business As)/Outlet Name<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Merchant's Legal Name<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Street Address</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Address Line2</p>
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
      <el-col :span="12"><div class="grid-content bg-purple">
        <span class="item-title">Mailing Address</span>
        <el-checkbox v-model="checked">Mailing Address Same</el-checkbox>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Street Address</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Address Line2</p>
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
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Contact Name at this Address<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Customer Service Phone Number<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Fax Number</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title">Email Address<span class="must-label">*</span></p>
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
  name: 'Step04',
  methods: {
    go () {
      this.$router.push({name: 'step05'})
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  @import '../assets/css/common.css';
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
