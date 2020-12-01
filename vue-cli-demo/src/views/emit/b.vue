<template>
    <div>
        <h3>B组件：{{age}}</h3>
        <button @click="send">将数据发送给c组件</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            age:20
        }
    },
    methods: {
        send(){
            Event.$emit("data-b", this.age)
        }
    },
}
</script>