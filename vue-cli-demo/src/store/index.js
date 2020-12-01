import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0,
    count: 66,
    inputVal : 'lili',
    list: ['1','2','3']
  },
  getters:{
    getNum(){
      return this.num
    }
  },
  mutations: {
    addNumMutations(state){
      state.num++
    },
    changeListMutations(state,inputVal){
      state.list.push(inputVal);
      state.inputVal = ''
    },
    handleDelMutations(state,idx){
      state.list.splice(idx,1)
    },
    handleVal(state,payload){
      state.inputVal = payload
    }
  },
  actions: {
    addNumAction(context, num){
      context.commit('addNumMutations', num)
    },
    add(context, num){
      context.commit('addNumMutations', num)
    },
    changeListActions: ({commit}, inputVal) => {
      return commit('changeListMutations', inputVal)
    },
    handleDelActions: ({commit}, idx) => {
      return commit('handleDelMutations', idx)
    }
  },
  modules: {
  }
})
