<template>
    <div>
        <p>childCom3 的 attrs : {{$attrs}}</p>
    </div>
</template>
<script>
export default{
    props: {
        coo: String, //foo作为props属性绑定
        title: String
    }
}
</script>