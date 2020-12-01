<template>
    <div>
        <p>{{num}}</p>
        <button @click="addNumAction(num)">+ADD</button>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default{
    data () {
        return {

        }
    },
    computed: {
        ...mapState([
            'num'
        ])
    },
    methods: {
        ...mapActions([
            'addNumAction'
        ])
    },
}
</script>