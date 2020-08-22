import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//安装插件

const store = new Vuex.Store({
    state:{
      cartList:[]
    },
  actions:{
    addCart(context,payload){
     let oldpro = state.cartList.find(item => item.id ===payload.iid);
     if(oldpro){
       context.commit("addcounter",oldpro)
     }else{
       payload.count =1
       context.commit("addTocart",oldpro)

     }
    }
  },
  mutations:{
    addcounter(state,payload){
      payload.count++;//单一，方便追踪到
    },
    addTocart(state,payload){
      payload.checked= true
      state.cartList.push(payload)
    }
  }
})

export default store
