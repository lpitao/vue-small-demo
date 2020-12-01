<template>
    <div>
        <h3>A组件：{{name}}</h3>
        <button @click="send">将数据发送给c组件</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'top'
        }
    },
    methods: {
        send(){
            Event.$emit("data-a", this.name)
        }
    },
}
</script>