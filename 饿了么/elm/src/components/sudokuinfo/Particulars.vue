<template>
    <div class="box">
        <div class="head">
            <Cshead>
                <li slot="ele">1</li>
                <li slot="dlzc"></li>
                <li slot="cs">甜品音频</li>
            </Cshead>
            <div class="xia">
                <ul>
                    <li>
                    <span class="response" v-show="!showCommentInput" @click="showCommentInput = !showCommentInput">sfaf</span>
                    <span class="response" v-show="showCommentInput" @click="showCommentInput = !showCommentInput">sf</span>
                    <h4></h4>
                    </li>
                    <li>排序</li>
                    <li>筛选</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Cshead from "@/components/Header/Cshead"
export default {
    components:{Cshead},
    data(){
      return{

              showCommentInput : false,
              cc:[
                  {ad:"饮品",sort:true},
                  {ad:true},
                  
              ]
      }
    },
    methods:{
  
    }
}
</script>
<style lang="scss" scoped>
  .box{
      width:100%;
      height: 100%;
      background: #f5f5f5;
      .head{
          width: 100%;
          height: 1.7rem;
        //   border: 0.01rem solid red;
          .xia{
             width: 100%;
             height: 0.8rem;
             ul{
                 display: flex;
                 li{
                    flex: 1;
                    text-align: center;
                    line-height: 0.8rem;
                    display: flex;
                    span{
                        font-size: 0.23rem;
                        margin-left: 0.8rem;
                    }
                    h4{
                        margin:0.25rem 0 0 0.1rem;
                        width: 0rem;
                        height: 0rem;
                        border: 0.1rem solid red;
                         border-left: 0.1rem solid rgba(0,0,0,0);
                         border-right: 0.1rem solid rgba(0,0,0,0);
                       border-top: 0.1rem solid rgba(0,0,0,0);
                    //    border-left: 0.1rem solid rgba(0,0,0,0);
                  
                    }
                    
                 }
             }
          }
      }
  }
</style>