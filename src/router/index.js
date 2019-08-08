import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import PdfTest from '@/pages/exportPDFtest'
import Step01 from '@/pages/Step01'
import Step02 from '@/pages/Step02'
import Step03 from '@/pages/Step03'
import Step04 from '@/pages/Step04'
import Step05 from '@/pages/Step05'
import Step06 from '@/pages/Step06'
import Step07 from '@/pages/Step07'
import Step08 from '@/pages/Step08'
import Step09 from '@/pages/Step09'
import Step10 from '@/pages/Step10'

Vue.use(Router)

const routers = [
  { path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  // {
  //   path: '/one',
  //   name: 'StepOne',
  //   component: StepOne
  // },
  {
    path: '/',
    name: 'step01',
    component: Step01
  },
  {
    path: '/step2',
    name: 'step02',
    component: Step02
  },
  {
    path: '/step3',
    name: 'step03',
    component: Step03
  },
  {
    path: '/step4',
    name: 'step04',
    component: Step04
  },
  {
    path: '/step5',
    name: 'step05',
    component: Step05
  },
  {
    path: '/step6',
    name: 'step06',
    component: Step06
  },
  {
    path: '/step7',
    name: 'step07',
    component: Step07
  },
  {
    path: '/step8',
    name: 'step08',
    component: Step08
  },
  {
    path: '/step9',
    name: 'step09',
    component: Step09
  },
  {
    path: '/step10',
    name: 'step10',
    component: Step10
  }]
export default new Router({
  routes: routers
})
