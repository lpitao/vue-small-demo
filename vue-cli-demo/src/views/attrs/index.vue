<template>
    <div>
        <h2>鸭血粉丝汤</h2>
        <child-com1
            :foo = "foo"
            :boo = "boo"
            :coo = "coo"
            :title = 'title'
        ></child-com1>
    </div>
</template>
<script>
const childCom1 = () => import("./childCom1.vue");
export default{
    components: {childCom1},
    data() {
        return {
            foo:'javas',
            boo:'html',
            coo:'css',
            title:'title'
        }
    },
}
</script>