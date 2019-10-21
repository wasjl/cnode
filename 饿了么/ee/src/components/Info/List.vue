<template>
    <div class="box">
       <header>
           <div class="tou">
              <div class="zz">
              <img :src="'//elm.cangdu.org/img/'+this.xqlb.image_path" alt="">
              </div>
             <div class="yy">
              <h3>{{this.xqlb.name}}</h3>
              <p><span>商家配送/</span><span>分钟送达/</span><span></span></p>
              <span>公告：{{this.xqlb.promotion_info}}</span>
              </div>
           </div>
         <ul>
             <li><router-link to="/list/sp">商品</router-link></li>
             <li><router-link to="/list/pl">评论</router-link></li>
         </ul>
       </header>
       <div class="zhong">
         <router-view/>
       </div>
       <footer @click="xs()">
        <div class="yuan"><span class="el-icon-delete-solid"></span></div>
        <ul>
            <li>
                <h2>{{this.$store.state.zy}}</h2>
                <span>qwe</span>
            </li>
            <li>adasf</li>
        </ul>
       </footer>
       <div class="zz" v-show="this.xy" @click="qx()">
           <div class="xia">
               <h3>购物车</h3>
               <ul v-for="(v,i) in this.$store.state.list" :key="i">
                   <li>
                       <h4>{{v.name}}</h4>
                       <span>asd</span>
                   </li>
                   <li>{{v.price}}</li>
                   <li>
                       <h4 >-</h4>
                     <h5>{{v.number}}</h5>
                     <h6>+</h6>
                   </li>
               </ul>
           </div>
       </div>
    </div>
</template>
<script>
import {sjxq} from "@/getData.js"
export default {
     data(){
         return{
            xqlb:[],
            xy:false
         }
     },
     mounted(){
      this.sjxq()
     },
     methods:{
      async sjxq(){
          
        //  var id=this.$route.params.id
        var id=localStorage.getItem('accessToken')
         this.$store.commit("id",id)
       const res = await sjxq({},id)
       console.log(res)
    //    this.info=res.data
      this.xqlb=res.data
       },
        xs(){
         this.xy=true
       },
       qx(){
           this.xy=false
       }
     },
     components:{

     }
    
    //  sc(){
    //      this.$router.push("/list/sp")
    //  }
}
</script>
<style lang="scss" scoped>
.box{
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    header{
        height: 2.95rem;
        width: 100%;
        .tou{
            width: 100%;
            height: 1.85rem;
            background:#acacbf;
            display: flex;
           .zz{
               width: 1.4rem;
               height: 1.4rem;
               
              margin:0.2rem 0 0 0.2rem;
              img{
                  width: 100%;
                  height: 100%;
              }
           }
           .yy{
               margin:0.2rem 0 0 1.8rem;
            h3{
                color: white;
            }
            p{
                span{
                    font-size: 0.23rem;
                    color: white;
                }
            }
            span{
                font-size: 0.23rem;
                    color: white;
            }
           }  
        }
        ul{
            border-bottom:0.02rem solid #f5f5f5;
        background:white;
            height: 1.1rem;
        width: 100%;
            display: flex;
            list-style: none;
            line-height: 1.1rem;
            li:nth-child(1){
               padding-left: 1.5rem;
            }
            li:nth-child(2){
                padding-left: 3rem;
                
            }
        }
    }
    .zhong{
        flex: 1;
       
        
       .zuo{
           flex: 2.3;
           border: 1px solid red;
       }
       .you{
           flex: 7.7;
           border: 1px solid red;
       }
    }
    footer{
      height: 0.9rem;
        width: 100%;
        border-bottom:0.02rem solid #f5f5f5;
        background:#3d3d3f;
        display: flex;
        .yuan{
            z-index: 999;
            width: 1rem;
            height: 1rem;
            background:#3190e8;
            border: 0.1rem solid #3d3d3f;
            border-radius: 50%;
            position: absolute;
            bottom: 0.2rem;
            left: 0.3rem;
            text-align: center;
            line-height: 1rem;
            span{
                color: white;

            }
        }
        ul{
            display: flex;
            li:nth-child(1){
                color: white;
                margin-left: 1.7rem;
                span{
                    font-size: 0.23rem
                }
            }
            li:nth-child(2){
                width:2rem;
                height: 1.1rem;
                background: #3190e8;
                text-align: center;
                line-height: 0.9rem;
                margin-left: 3.1rem
            }
        }
    }
    .zz{
        width: 100%;
        height: 12.4rem;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        .xia{
            width: 100%;
            // height: 3rem;
            background: white;
            position: absolute;
            bottom: 0;
            h3{
                width: 100%;
                height: 0.8rem;
                background: #f5f5f5;
                line-height: 0.8rem;
                font-weight: 400;
                font-size: 0.3rem;
            }
            ul{
                width: 100%;
                height: 1.4rem;
                display: flex;
                li:nth-child(1){
                    padding: 0.3rem 0  0 0.2rem;
                    width: 1.2rem;
                     overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;

                }
                li:nth-child(2){
                    padding: 0.3rem 0  0 3rem;
                    color: burlywood;
                }
                li:nth-child(3){
                    display: flex;
                    padding: 0.4rem 0  0 1.2rem;
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
            }
        }
    }
}
</style>