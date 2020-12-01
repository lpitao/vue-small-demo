<template>
    <div>
        <h1>A provide组件</h1>
        <childrenF></childrenF>
    </div>
</template>
<script>
import F from './F.vue'
export default {
    provide:{
        name: 'provide浪里行舟inject'
    },
    components:{
        'childrenF' : F
    }
}
</script>