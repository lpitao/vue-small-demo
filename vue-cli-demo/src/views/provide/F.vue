<template>
    <div>
        <h3>{{name}}</h3>
    </div>
</template>
<script>
export default {
    inject:['name'],
    mounted() {
        console.log(this.name)
    },
}
</script>