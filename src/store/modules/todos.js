import axios from 'axios';


const state = {
    todos: [
        {
            id: 1,
            title: "Todo one"
        }, {
            id: 2,
            title: "Todo one"
        }
    ]
};


const getters = {
    allTodos: (state) => state.todos
};


const actions = {
    async fetchTodos({ commit }) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', res.data)
    }
};


const mutations = {
    setTodos: (state, todos) => state.todos = todos
};

export default {
    state,
    getters,
    actions,
    mutations
}