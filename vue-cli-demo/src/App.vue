<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <title-line message="标题" borderPosition="top" :topGap="20"></title-line>
    <!-- 父子组件 -->
    <users :users="fusers" @titleChanged="updateTitle"></users>
    <h2>{{title}}</h2>
  </div>
</template>
<script>

import titleLine from '@/views/titleLine.vue'
import users from '@/views/users.vue'
export default {
  data(){
    return{
      fusers:["henry", "bucck", "emmi"],
      title: 'lalala'
    }
  },
  components:{
    titleLine,
    users
  },
  methods: {
    updateTitle(e){
      this.title = e
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
