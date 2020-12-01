<template>
    <div>
        <app-a ref="comA"></app-a>
    </div>
</template>
<script>
import A from './component-a'
export default {
    components:{
        'app-a': A
    },
    mounted() {
        const comA = this.$refs.comA;
        console.log(comA.title);
        comA.sayHello()
    },
}
</script>