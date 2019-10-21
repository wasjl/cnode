<template>
  <div class="box">
     <Cshead>
         <li slot="ele">ele.me</li>
         <li slot="dlzc"><span>登录</span>|<span>注册</span></li>
     </Cshead>
   <div class="zhong">
     <div class="dqdw">
       <ul>
       <li><span>当前定位城市:</span><span>定位不准时，请在城市列表中选择</span></li>
       <li>
         <span>北京</span>
         <span></span>
       </li>
       </ul>
     </div>
     <div class="rmcs">
       <div class="bt">
           <span>热门城市</span>
       </div>
       <ul>
           <li v-for="(v,i) in rm " :key="i" @click="aa(v.id)">{{v.name}}</li>

       </ul>
     </div>
     <div class="zm">
        <div class="sz" v-for="(v,i) in Object.keys(px).sort()" :key="i">
           <h4>{{v}}<span>(按字母排序)</span></h4>
           <ul>
               <li v-for="(v,i) in px[v]" :key="i">{{v.name}}</li>
           </ul>
        </div>
     </div>
   </div>
   <footer></footer>
  </div>
</template>
<script>
import {login,login1,login2} from "@/getData.js"
// import axios from "axios"
import Cshead from "@/components/Header/Cshead"
export default {
  components:{Cshead},
  data(){
      return{
        rm:[],
        px:[]
      }
  },
  mounted(){
     this.jk1()
     this.jk2()
     this.jk3()
  },
  methods:{
      async jk1(){
        const  res = await login()
        console.log(res)
      },
        async jk2(){
        const  res = await login1()
        console.log(res)
        this.rm=res.data
      },
         async jk3(){
        const  res = await login2()
        console.log(res)
        this.px=res.data
      },
      aa(id){
        
        this.$router.push({name:"Cs",params:{id}})
      }
  }
}
</script>
<style lang="scss" scoped>
.box{
  height: 100%;
    width:100%;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    .zhong{
      flex: 1;
       overflow: auto;
        
        .dqdw{
            width: 100%;
            ul{
                width: 100%;
               li:nth-child(1){
                   width: 100%;
                height: 0.85rem;
                border-bottom:0.03rem solid #eeeeee;
                background: white;
                span:nth-child(1){
                    font-size: 0.25rem;
                    padding-left: 0.2rem;
                    line-height: 1rem
                }
                span:nth-child(2){
                    font-size: 0.25rem;
                    font-weight: 700;
                    color: #9d9d9d;
                     line-height: 1rem;
                     padding-left:1.85rem
                }
               }
               li:nth-child(2){
                   width: 100%;
                height: 0.85rem;
                border-bottom:0.03rem solid #eeeeee;
                 background: white;
                span:nth-child(1){
                       font-size: 0.35rem;
                    padding-left: 0.2rem;
                    line-height: 0.85rem;
                    color: #1b84e5
                }
               }
            }
        }
        .rmcs{
              margin-top: 0.2rem;
            width: 100%;
            border-top:0.04rem solid #eee;
        
         .bt{
             width: 100%;
             height: 0.65rem;
             background: white;
             border-bottom:0.02rem solid #f4f4f4; 
             span{
                 font-size: 0.25rem;
                 color: #a3a3a3;
                 line-height: 0.65rem;
                 padding-left:0.2rem
             }
           }
           ul{
               list-style: none;
               width: 100%;
                display: flex;
               flex-wrap: wrap;
               li{
                   background: white;
                   width: 1.85rem;
                   height: 0.8rem;
                   border-left:0.02rem solid #f5f4f4; 
                   border-bottom:0.02rem solid #f5f4f4; 
                
                   font-size: 0.28rem;
                   color: #1b84e5;
                   line-height: 0.8rem;
                   text-align: center;
                   
               }
           }
        }
        .zm{
            margin-top: 0.2rem;
            width: 100%;
           .sz{
               
              width: 100%;
              h4{
                  text-indent: .2rem;
                  background: white;
                  font: .25rem/0.65rem Helvetica Neue;
                  span{
                      font-size: 0.2rem;
                      color: #bdbdbd;
                      padding: 0.25rem
                  }
              }
              ul{
               list-style: none;
               width: 100%;
                display: flex;
              flex-wrap: wrap;
               li{
                   overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                   background: white;
                   width: 1.85rem;
                   height: 0.8rem;
                   border-left:0.02rem solid #f5f4f4; 
                   border-bottom:0.02rem solid #f5f4f4; 
                   
                   font-size: 0.28rem;
                   color: #1b84e5;
                   line-height: 0.8rem;
                   text-align: center;
               }
           }
           }
        }
    }
}
</style>