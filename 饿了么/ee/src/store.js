import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

var store=new Vuex.Store({
    state:{
       zyinfo:[],
       idi:"",
       list:[],
       zj:""

    },
    mutations:{
      cz(state,data){
          state.zyinfo=data
      },
      id(state,id){
        state.idi=id
      },
      tj(state,cc){
        var obj=cc.obj
        var i=cc.i
       var index=state.list.findIndex((cc,i,arr)=>{
         return obj.id==cc.id
        })
       console.log(index)
        if(index==-1){
          state.list.unshift(obj)
          console.log(state.list)
        }else{
           state.list[index].number+=1
        }
        
      },
      jia(state,v){
        v.specfoods[0].original_price+=1
      },
      jian(state,v){
        v.specfoods[0].original_price-=1
      },
      jian1(state,i){
        for(var i in state.list){
          if(state.list[i].number<=1){
            state.list.splice(i,1)
          } else  if(state.list[i].number>1){
            state.list[i].number-=1
          }
        }        
      },
      
      
    },
    getters:{
      zj:state=>{
        var num=0;
        for(var i in state.list){
          num+=state.list.number*state.list.price
        }
        this.zj=num
      }
    }
    
})
export default store