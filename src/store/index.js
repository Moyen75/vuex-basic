import Vuex from 'vuex';
import todos from './modules/todos.js'

//create store
export default new Vuex.Store({
    modules: {
        todos
    }
})