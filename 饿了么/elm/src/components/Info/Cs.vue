<template>
    <div class="box">
      <Cshead>
          <li slot="ele">1</li>
          <li slot="dlzc" @click="qh()"><span>切换城市</span></li>
          <li slot="cs">{{info.name}}</li>
      </Cshead>
      <div class="zhong">
        <div class="ss">
            <el-input v-model="input" placeholder="输入学校、商务楼、地址" class="inp"></el-input>
           <el-button type="primary" class="btn" @click="tj()">提交</el-button>
        </div>
        <!-- <div class="ssls">搜索历史</div> -->
        <div class="sd" v-for="(v,i) in list" :key="i" @click="tz(v.geohash)">
          <h4>{{v.name}}</h4>
          <span>{{v.address}}</span>
        </div>
      </div>
    </div>
</template>
<script>
import {xq,ss} from "@/getData.js"
// import axios from "axios"
import Cshead from "@/components/Header/Cshead"
export default {
    components:{Cshead},
    data(){
       return{
           info:[],
           input:"",
           list:[]
       }
    },
    mounted(){
        
        // axios.get(`http://elm.cangdu.org/v1/cities/+${id}`).then((res)=>{
        //     console.log(res)
        // })
        // console.log()
        this.xq()
        
    },
    methods:{
        tz(geohash){
            localStorage.setItem("geohash",JSON.stringify(geohash))
          this.$router.push({name:"Zy",params:{geohash}})
          
        },
     async xq(){
         var id=this.$route.params.id
       const res = await xq({},id)
       console.log(res)
       this.info=res.data
      },
      qh(){
          this.$router.push("/dzlist")
      },
     async tj(){
         var id=this.$route.params.id
        const res = await ss({city_id:id,keyword:this.input})
        console.log(res)
        this.list=res.data
      }
    }
}
</script>

<style lang="scss" scoped>
.box{
    height:100%;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;

.zhong{
    flex: 1;
    overflow: auto;
   .ss{
       width: 100%;
       height: 2rem;
       background:white;
       margin-top: 0.2rem;
       border-top:0.02rem solid darkgray;
       text-align: center;
       .inp{
           margin-top: 0.2rem;
           width:6.7rem;
           height: 0.6rem;
       }
       .btn{
           margin-top: 0.3rem;
           width:6.7rem;
           height: 0.6rem;
       }
   }
   .ssls{
       width:100%;
       border-bottom:0.03rem solid #eee;
       border-top:0.03rem solid #eee;
       height: 0.35rem;
       text-indent: .2rem;
       font-size: 0.24rem;
   }
   .sd{
       width: 100%;
       height: 1.4rem;
       background: white;
       h4{
           
           text-indent: .3rem;
           font: .3rem/0.45rem Helvetica Neue;
       }
       span{
           padding-left: 0.3rem;
           font-size: 0.2rem;
           color: #a7a7a7
       }
   }
}
}
</style>