<template>
    <div class="headComponent">
        <input type="text" v-model="info">
        <button @click="handleClick">添加</button>
        <todolist v-for="item in list" :key="item" :message="msg">
            <template v-slot:item="itemProps">
            <!-- 
                1.span插槽内容
                2.item是插槽名字，为具名插槽，可对应插入子组件中具体插槽位置
                3.itemprops可以获取子组件（即插槽prop)传出来的状态（值）
                -->
                <span :style="{fontSize:'20px',color:itemProps.chicked ? 'red' : 'blue'}">{{item}}</span>
            </template>
        </todolist>
    </div>
</template>
<script>
    import todolist from './child-btn.vue'
    export default{
        data(){
            return{
               msg:'hihi',
               info:'',
               list:[]
            }
        },
        components:{
            todolist
        },
        methods: {
            handleClick(){
                this.list.push(this.info);
                this.info = ''
            }
        },
    }
</script>