<template>
    <div id="itany">
        <my-a></my-a>
        <my-b></my-b>
        <my-c></my-c>
    </div>
</template>
<script>
import A from './a.vue'
import B from './a.vue'
import C from './a.vue'
export default {
    components:{
        'my-a' : A,
        'my-b' : B,
        'my-c' : C,
    }
}
</script>