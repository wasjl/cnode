<template>
    <footer>
       <ul>
         <li @click="ww()"><h4 class="el-icon-eleme"></h4><h4>123</h4></li>
         <li @click="ss()"><h4 class="el-icon-time"></h4><h4>123</h4></li>
         <li><h4 class="el-icon-document"></h4><h4>123</h4></li>
         <li><h4 class="el-icon-user"></h4><h4>123</h4></li>
       </ul>
    </footer>
</template>
<script>
export default {
     methods:{
       ww(){
         this.$router.push('/zy/wm')
       },
        ss(){
         this.$router.push('/zy/ss')
       }
     }
}
</script>
<style lang="scss" scoped>
footer{
    width: 100%;
    height: 0.9rem;
    border-top:0.03rem solid #f3f3f3;
    ul{
      list-style: none;
      display: flex;
       li{
           flex: 1;
           text-align: center;
           .el-icon-eleme{
             font-size: 0.5rem;
           }
           .el-icon-time{
             font-size: 0.5rem;
           }

           .el-icon-document{
             font-size: 0.5rem;
           }
           .el-icon-user{
             font-size: 0.5rem;
           }
         h4{
           font-size: 0.23rem;
         }
       }
    }
}
</style>