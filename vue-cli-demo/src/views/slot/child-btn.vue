<template>
    <div class="child-btn">
        <div>
            {{message}}
            <li class="item">
                <input type="checkbox" v-model="checked">
                <slot name="item" v-bind="{checked}"></slot>
            </li>
        </div>
    </div>
</template>
<script>
    export default{
        props:['item','message'],
        data(){
            return{
                checked:false
            }
        },
        created() {
            console.log(this.message)
        },
    }
</script>
<style>
.item{
    color:red;
}
li{
    list-style:none;
}
</style>