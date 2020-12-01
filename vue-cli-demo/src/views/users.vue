<template>
    <div class="hello">
        <ul>
            <li v-for="user in users" :key="user">{{user}}</li>
        </ul>
        <header>
            <h1 @click="changeTitle">{{title}}</h1>
        </header>
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return {
            title:'vue.js demo'
        }
    },
    props:{
        users:{
            type:Array,
            required:true
        }
    },
    methods: {
        changeTitle(){
            this.$emit("titleChanged","向父组件船只了")
        }
    },
}
</script>