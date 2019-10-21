<template>
    <div class="box">
    <Cshead>
        <li slot="ele">1</li>
        <li slot="dlzc"><span>登录</span>|<span>注册</span></li>
        <li slot="cs">{{this.nn.name}}</li>
    </Cshead>
    <div class="zhong">
      
   <router-view/>
      
    </div>
    <Fot></Fot>
    </div>
</template>
<script>

import {zyxq,lb,sj} from "@/getData.js"
import Cshead from "@/components/Header/Cshead"
import Fot from "@/components/fot/Fot"
export default {
     components:{Cshead,Fot},
     data(){
         return{
            nn:[]
         }
     },
     methods:{
        async xq(){
               var geohash=this.$route.params.geohash
           const res = await zyxq({},geohash)
              this.nn=res.data
              this.$store.commit("cz",res.data)
          //  console.log(res)
         }
     },
     mounted(){
       this.xq()
     }
}       
</script>

<style lang="scss" scoped>
.box{
     width: 100%;
     height: 100%;
      display: flex;
      flex-direction: column;
      background: #f5f5f5;
       .zhong{
         width: 100%;
       flex: 1;
       overflow: auto;
       }
}
</style>
