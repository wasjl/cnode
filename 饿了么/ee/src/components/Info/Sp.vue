<template>
    <div class="zhong">
        <div class="zuo">
          <ul>
              <li v-for="(v,i) in bd" :key="i">
                  <span>{{v.name}}</span>
              </li>
              
          </ul>
         </div>
         <div class="you">
        <div class="nei" >
            <div class="nei1" v-for="(item,index) in bd" :key="index">
          <p class="xt"><span>{{item.name}}</span><span>{{item.description}}</span></p>
          <ul v-for="(v,i) in item.foods"  :key="i">
              <li><img :src="'//elm.cangdu.org/img/'+v.image_path" alt=""></li>
              <li>
                  <h2>{{v.name}}</h2>
                  <i>{{v.description}}</i><br/>
                  <span>{{v.tips}}</span>
                  <p>1</p>
                  <div class="jg"><span>{{v.specfoods[0].price}}</span>起</div>
              </li>
              <li>
                  <div class="xgg" v-if="v.specifications.length>0">选规格</div>
                  <div class="jj" v-else  >
                     <h4 v-show="v.specfoods[0].original_price>0" @click="jian(v)">-</h4>
                     <h5 v-show="v.specfoods[0].original_price>0">{{v.specfoods[0].original_price}}</h5>
                     <h6 @click="tj(v,i)">+</h6>
                     
                  </div>
                  <!-- <div class="ja" @click="tj(v,i)" v-show="v.specfoods[0].original_price<=0">+</div> -->
                  
              </li>
             
          </ul>
            </div>
        </div>
         </div>
    </div>
</template>
<script>
import {dh} from "@/getData.js"
export default {
    data(){
        return{
           bd:[],
          count:0,
          
        }
    },
    methods:{
       async dh(){
            const res = await dh({restaurant_id:this.$store.state.idi})
            console.log(res)
            this.bd=res.data
            console.log(this.$store.state.idi)
            // this.sj=res.data.foods
       },
       tj(v,i){
          var obj={name:v.name,price:v.specfoods[0].price,number:1,id:v.item_id}
        //   console.log(obj)
        this.$store.commit("jia",v)
        this.$store.commit("tj",{obj,i})
       },
       jian(v,i){
           this.$store.commit("jian",v)
            this.$store.commit("jian1",i)
       }
    },
    mounted(){
        this.dh()
    }
}
</script>
<style lang="scss" scoped>
.zhong{
    display: flex;
     height: 100%;
 .zuo{
           flex: 2.3;
        //    border: 1px solid red;
           
           ul{
               height: 9rem;
               list-style: none;
               overflow: auto;
               li{
                   border-top: 0.02rem solid #eee;
                //    border-left: 0.04rem solid #2189e9;
                      overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                   width: 1.8rem;
                   height: 1.2rem;
                   text-align: center;
                   span{
                       line-height: 1.2rem;
                       font-size: 0.3rem;
                       

                   }
               }
           }
       }
       .you{
           flex: 7.7;
        //    border: 1px solid red;
          .nei{
              height: 9rem;
             
               overflow: auto;
               .nei1{

               
          .xt{
              width: 5.6rem;
            overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;
              height: 0.95rem;
              span:nth-child(1){
                  font-weight: 700;
                  font-size: 0.4rem;
                  line-height: 1rem;
                  padding-left: 0.2rem;
              }
              span:nth-child(2){
               
                  font-size: 0.25rem;
                  line-height: 1rem;
                  padding-left: 0.2rem;
              }
          }
              ul{
               list-style: none;
               width: 100%;
               height: 2.5rem;
            //    border: 0.01rem solid red;
               background: white;
               display: flex;
               li:nth-child(1){
                //  flex: 1;
                 width: 1.1rem;
                //  border: 0.01rem solid red;
                 img{
                     width: 0.95rem;
                     height: 0.95rem;
                    
                 }
               }
               li:nth-child(2){
                //  flex: 2;
                width: 3rem;
                overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                 i{
                       
                     font-size: 0.25rem;
                     color: #7d7d7d;
                 }
                 span{
                       overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                    font-size: 0.28rem; 
                 }
                 p{
                     width: 0.3rem;
                     height: 0.3rem;
                     border: 0.01rem solid #f5a8a8;
                     border-radius: 50%;
                     font-size: 0.23rem;
                     text-align: center;

                 }
                 .jg{
                     span{
                         font-size:0.35rem;
                         font-weight: 900;
                         color: #ff5d07;

                     }
                 }
               }
               li:nth-child(3){
                //   flex: 1;
                width:1.3rem;
                 
                  .xgg{
                      margin:1.6rem 0 0 0.2rem;
                      width: 1rem;
                      height: 0.5rem;
                      background: #3190e8;
                      border-radius: 0.04rem;
                      font-size: 0.25rem;
                      color: white;
                      text-align: center;
                      line-height: 0.5rem
                  }
                  .jj{
                      margin:1.6rem 0 0 0.2rem;
                      display: flex;
                      h4{
                          
                           width: 0.37rem;
                              height: 0.37rem;
                              border: 0.01rem solid #3190e8;
                              border-radius: 50%;
                              text-align: center;
                              line-height: 0.38rem;
                            font-weight: 400;
                            color: #3190e8
                      }
                      h5{
                          font-weight: 400;
                          font-size: 0.25rem
                      }
                      h6{
                          
                           width: 0.37rem;
                              height: 0.37rem;
                              border: 0.01rem solid #3190e8;
                              border-radius: 50%;
                              text-align: center;
                              line-height: 0.38rem;
                            font-weight: 400;
                            background: #3190e8;
                            color: white
                      }
                  }
                  .ja{
                      width: 0.37rem;
                              height: 0.37rem;
                              border: 0.01rem solid #3190e8;
                              border-radius: 50%;
                              text-align: center;
                              line-height: 0.38rem;
                            font-weight: 400;
                            background: #3190e8;
                            color: white
                  }
               }
           }
          }
       
          }
       }
       }
</style>