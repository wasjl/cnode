<template>
    <div>
           <div class="lb">
    <swiper :options="swiperOption" class="lb1">
　　<swiper-slide class="lb2" v-for="(v,i) in lbb" :key="i" >
          <img :src="'https://fuss10.elemecdn.com/'+v.image_url" alt="" @click="particulars()"><br>
          <span>{{v.title}}</span>
          
   </swiper-slide>
   　　<div class="swiper-pagination" slot="pagination"></div>
    </swiper>
   </div>
      <div class="list">
        <h4>
            <span>附近商家</span>
        </h4>
        <div class="listz">
          <ul v-for="(v,i) in sj" :key="i" @click="list(v.id)">
              <li><img :src="'//elm.cangdu.org/img/'+v.image_path" alt=""></li>
              <li>
                  <ol>
                      <li class="pp">品牌</li>
                      <li class="pp1">{{v.name}}</li>
                  </ol>
                  <div class="ys">
                      <el-rate
                       v-model="v.rating"
                       disabled
                       width="0.4"
                       height="0.2"
                      show-score
                      text-color="#ff9900"
                      score-template="{value}">
                     </el-rate>
                      <span>月售{{v.recent_order_num}}单</span>
                  </div>
                  <div class="qs">
                    <span>￥{{v.float_delivery_fee}}起送/</span><span>配送费约￥{{v.float_minimum_order_amount}}</span>
                  </div>
              </li>
              <li>
                  <p>保准票</p>
                  <div class="song">
                     <ul>
                         <li>蜂鸟专送</li>
                         <div class="zz">准时达</div>
                     </ul>
                  </div>
                  <p>
                      <span>{{v.distance}}/</span><span>{{v.order_lead_time}}</span>
                  </p>
              </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
import Swiper from "swiper"
import {zyxq,lb,sj} from "@/getData.js"
export default {
    data(){
         return{
            zyinfo:[],
            lbb:[],
            sj:[],
            swiperOption: {
　　pagination: {
　　　　el: '.swiper-pagination',
　　　　clickable: true // 允许点击小圆点跳转
　　},

　　loop: true,
        slidesPerView: 4,
        slidesPerGroup: 8,
        slidesPerColumn: 2


},
         }
     },
     mounted(){
        
       this.zyxq()
       this.lb()
    //    this.sj()
     },
     methods:{
       async zyxq(){
        //    var geohash=this.$route.params.geohash
        //    const res = await zyxq({},geohash)
        //       this.$store.commit("cz",res.data)
        //    console.log(res)
        const ress = await sj({latitude:this.$store.state.zyinfo.latitude,longitude:this.$store.state.zyinfo.longitude})
             console.log(ress.data)
             this.sj=ress.data
       },
       async lb(){
           const res = await lb()
        //    console.log(res)
           this.lbb=res.data
       },
       list(id){
           localStorage.setItem('accessToken',JSON.stringify(id))
           this.$router.push({name:"List",params:{id}})
       },
       particulars(){
           this.$router.push("/zy/wm/partoculars")
       }
    //    async sj(){
    //        const latitude=this.zyinfo.latitude
    //        const longitude=this.zyinfo.longitude
    //         console.log(latitude)
    //        console.log(longitude)
           
    //        console.log(res)  
    //    }
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
.lb{
      background: white;
           width: 100%;
           height: 4rem;
           .lb1{
               width: 100%;
           height: 4rem;
            .lb2{
                width: 6.7rem;
                height: 1.3rem;
                text-align: center;
                // border-bottom:0.01rem solid red;
                margin-top: 0.3rem;
                span{
                    font-size: 0.25rem;
                    color:#898989;
                }
                // border: 1px solid red;
              
                    img{
                       width: 0.8rem;
                       height: 0.8rem;

                    }
                
            }
           }
       }
       .list{
           width: 100%;
           margin-top: 0.2rem;
           background: white;
           
           h4{
                text-indent: .2rem;
                  font: .1rem/0.65rem Helvetica Neue;
                  span{
                      font-size: 0.25rem;
                      color: #898989;
                  }
           }
           .listz{
               width: 100%;
               ul{
                   border-bottom: 0.01rem solid #f5f5f5;
                   list-style: none;
                   width: 100%;
                   height: 2rem;
                //    border: 1px solid red;
                   display: flex;
                   li:nth-child(1){
                       flex: 2;
                       
                    //    border: 0.01rem solid red;
                       text-align: center;
                       img{
                           padding-top:0.4rem;
                           
                           width: 1.26rem;
                           height: 1.26rem;
                       }
                   }
                        li:nth-child(2){
                       flex: 4.5;
                    //    border: 0.01rem solid red;
                       ol{
                        //    display: flex;
                        margin-top: 0.4rem;
                           width: 100%;
                           height: 0.4rem;
                           border: 0.01rem solid white;
                           list-style: none;
                            .pp{
                                float: left;
                              border-radius: 0.1rem;
                              width: 0.57rem;
                              height: 0.3rem;
                              background: #ffd725;
                              font-size: 0.25rem;
                              line-height: 0.3rem;
                              font-weight: 700;
                          }
                          .pp1{
                               overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                             font-size: 0.3rem;
                              line-height: 0.3rem;
                              font-weight: 700;

                          }
                       }
                       .ys{
                           overflow: hidden;
                        //    margin-left: -0.5rem;
                           display: flex;
        
                     
                           span{
                                color: #818181;
                               font-size: 0.1rem;
                               line-height: 0.4rem
                           }
                       }
                       .qs{
                            span{
                                color: #818181;
                               font-size: 0.2rem;
                           }
                       }
                   }
                        li:nth-child(3){
                       flex: 3.5;
                    //    border: 0.01rem solid red;
                       p:nth-child(1){
                           margin:0.4rem 0.2rem 0 0;
                            color: #818181;
                               font-size: 0.2rem;
                       }
                       .song{
                           margin: 0.2rem 0 0 1.2rem;
                           width: 1.25rem;
                           height: 0.23rem;
                            ul{
                                display: flex;
                                list-style: none;
                                li:nth-child(1){
                                    width: 0.63rem;
                                    height: 0.23rem;
                                    background: #3f97e9;
                                    font-size: 0.04rem;
                                    color: white;
                                    border-radius: 0.01rem;

                                }
                                  .zz{
                                    width: 0.6rem;
                                    height: 0.23rem;
                                    border:0.01rem solid #3f97e9;
                                    
                                    font-size: 0.04rem;
                                    color: #3f97e9;
                                    border-radius: 0.02rem;
                                }
                            }
                       }
                       p{
                           margin-right: 0.2rem;
                           text-align:right;
                           span:nth-child(1){
                               color: #818181;
                               font-size: 0.2rem;
                           }
                           span:nth-child(2){
                               color: #3f97e9;
                               font-size: 0.2rem;
                           }
                       }
                   }
               }
           }
       }
     }
 }
</style>
<style lang="scss" >
.el-rate__icon {
    font-size: 13px;
    margin-right: 0px;
    color: #C0C4CC;
    -webkit-transition: .3s;
    transition: .3s;
}
.el-rate__text {
    font-size: 12px;
    vertical-align: middle;
}
</style>