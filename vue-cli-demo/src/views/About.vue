<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data(){
    return {
      //超时定时器
      overTimer: null,
      //是否超时
      isOvertime: false,
    }
  },
  watch:{
    // $route(to,from){
    //   this.reload()
    // }
  },
  methods: {
    goBack(){
      console.log("点击浏览器的返回按钮")
      sessionStorage.clear()
      window.history.back()
    },
    submitOrder (){
      //判定是否超时
      if (this.isOvertime){
        this.$message.error('订单已过期，请重新下单');
        window.location.reload()
        console.log(1)
      }
    }
  },
  created(){
    //开启定时器
    this.overTimer = setTimeout(() => {
      this.isOvertime = true
    }, 900);
    this.submitOrder()
  },
  mounted() {
    if(window.history && window.history.pushState){
      //向历史记录中插入当前页
      console.log(window.history,window.history.pushState)
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate',this.goBack, false);
    }
  },
  destroyed() {
    window.removeEventListener('popstate',this.goBack, false)
    //销毁定时器
    clearTimeout(this.overTimer)
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    sessionStorage.clear();
    next()
  }
}
</script>
