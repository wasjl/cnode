import Vue from 'vue'
import Router from 'vue-router'
import Dzlist from '@/components/address/Dzlist'
import Cs from '@/components/Info/Cs'
import Zy from '@/components/Zy'
import Ss from '@/components/Ss'
import Wm from '@/components/Wm'
import List from '@/components/Info/List'
import Sp from '@/components/Info/Sp'
import Pl from '@/components/Info/Pl'
import Particulars from '@/components/sudokuinfo/Particulars'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dzlist',
      name: 'Dzlist',
      component: Dzlist
    },
    {
      path: '/csinfo/:id',
      name: 'Cs',
      component: Cs
    },
    {
      path: '/zy/:geohash',
      name: 'Zy',
      component: Zy,
      children:[
        {
          path: '/zy/ss',
          name: 'Ss',
          component: Ss
        },
        {
          path: '/zy/wm',
          name: 'Wm',
          component: Wm
        },
        // {
        //   path:"/list/:id",
        //   redirect:"/list/sp"
        // }
      ]
      
    },
    {
      path: '/list/:id',
      name: 'List',
      component: List,
      children:[
        {
          path: '/list/sp',
          name: 'Sp',
          component: Sp
        },
        {
          path: '/list/pl',
          name: 'Pl',
          component: Pl
        },
        
      ]
      
    },
    //九宫格详情
    {
      path:"/zy/wm/partoculars",
      name: 'Particulars',
      component: Particulars
    }
  ]
})
