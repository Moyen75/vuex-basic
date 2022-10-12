<template>
  <div class="todos">
    <div v-for="todo in allTodos" :key="todo.id">
    <h1>{{todo.title}}</h1>
  </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['fetchTodos'])
    },
    computed:mapGetters(["allTodos"]),
    created(){
        this.fetchTodos()
    }
}
</script>

<style>
.todos{
    margin-top: 50px;
    margin-left: 50px;
}
</style>