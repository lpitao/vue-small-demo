<template>
    <div>
        <h3>C组件：{{name}}{{age}}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            age:''
        }
    },
    mounted() {
        Event.$on('data-a',name => {
            this.name = name
        })
        Event.$on('data-b', age => {
            this.age = age
        })
    },
}
</script>