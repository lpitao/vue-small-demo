<template>
    <div>
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'hello ref'
        }
    },
    methods: {
        sayHello(){
            window.alert('ref parent')
        }
    },
}
</script>