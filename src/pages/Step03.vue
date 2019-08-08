<template>
 <div>
   <p class="my-step-title">Step 3 of 10 </p>
   <el-progress :text-inside="true" :stroke-width="26" :percentage="30"></el-progress>
   <p style="text-align: center;margin-bottom: 30px">Appendix 2</p>
   <p style="margin: 0;padding: 0">The Service Fee shall be applied at the rate set forth in the table below:</p>
   <p style="">Applicable rate for the Service Fee<span class="must-label">*</span></p>
   <el-input v-model="input" style="background: #E6E6E6;width: 300px" placeholder="2.9% of the Aggregate Payment Amount"></el-input>
   <p>Do you need Online API (For Ecommerce Only)<span class="must-label">*</span></p>
   <el-radio-group v-model="radio" class="radio-group">
     <div class="my-radio"><el-radio :label="3">Yes</el-radio></div>
     <div class="my-radio"><el-radio :label="6">No</el-radio></div>
   </el-radio-group>
   <div v-show="true">
     <p>Online Applicable rate for Service Fee</p>
     <el-input v-model="input" style="background: #E6E6E6;width: 300px" placeholder="2.9% of the Aggregate Payment Amount"></el-input>
     <p>Website Address(Require for Internet Merchant)</p>
     <el-input></el-input>
   </div>
   <p>Settlement Fee</p>
   <el-input v-model="input" style="background: #E6E6E6;width: 300px" placeholder="$0.30 Per Batch"></el-input>
   <div class="note">
     <el-row :gutter="20">
       <el-col :span="1"><div style="">Note:</div></el-col>
       <el-col :span="23"><div>
         The Service Fee shall be payable and deducted from Funds Available for Settlement on the same Working Day that the Funds Available for Settlement are paid to the Company.
       </div></el-col>
     </el-row>
     <el-row :gutter="20" style="margin-top: 10px">
       <el-col :span="23" :offset="1"><div>
         "Aggregate Payment Amount" means the aggregate total of all Payments submintted during the relevant period.
       </div></el-col>
     </el-row>
   </div>
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
      this.$router.push({name: 'step04'})
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  @import '../assets/css/common.css';
  .note{
    color: #4A4A4A;
    font-family: DINNextLTPro-Regular;
    font-size: 14px;
    margin: 30px 0;
  }
  .radio-group{
    margin-bottom: 20px;
    .my-radio{
      padding-top: 5px;
    }
  }
</style>
