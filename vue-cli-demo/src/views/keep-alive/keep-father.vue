<template>
    <div>
        <p>父组件</p>
        <div style="width:300px;margin: 0 auto">
            <input v-model="inputval">
        </div>
        <keep-alive>
            <ks></ks>
        </keep-alive>
    </div>
</template>
<script>
import ks from './keep-son.vue'
    export default{
        name:'cofater',
        data(){
            return{
                inputval:''
            }
        },
        components:{
            ks
        },
        activated() {
            console.log("----------进activated--------");
        },
        deactivated() {
            console.log("----------进deactivated--------");
        },
        beforeRouteLeave(to, from, next) {
            if (to.path === "/store") {
                from.meta.keepAlive = true;
            } else {
                from.meta.keepAlive = false;
                // this.$destroy()
            }
            next();
        }
    }
</script>