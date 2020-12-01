<template>
    <div class="state">
        <input v-model="getVal" type="text">
        <button @click="changeListActions(getVal)">增加事项</button>
        <ul v-for="(item,idx) in list" :key="item">
            <li @click="handleDelActions(idx)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
//import { mapState,mapActions, mapMutations } from 'vuex'
export default{
    data () {
        return {
            
        }
    },
    computed: {
        // num (){
        //     //第一种用法
        //     return this.$store.state.num
        // }

        // ...mapState([
        //     //第二种用法
        //     'num'
        // ])
        ...mapState([
            //第二种用法
            'list'
        ]),
        getVal:{
            get(){
                return this.$store.state.inputVal
            },
            set(newVal){
                this.$store.commit('handleVal', newVal);
            }
        }
    },
    methods: {
        // add(){
        //     //第一种用法
        //     //this.$store.state.count++
        //     this.$store.dispatch('addNumAction')
        // }

        // ...mapMutations([
        //     //第二种用法
        //     'addNumMutations'
        // ]),
        // ...mapActions([
        //     'addNumAction'
        // ])
        ...mapActions(['changeListActions','handleDelActions'])
    },
}
</script>