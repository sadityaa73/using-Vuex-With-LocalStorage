import Vue from 'vue'
import Vuex from 'vuex'
import localStorage from "../store/localStorageStore/localStorage"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        localStorage: localStorage
    }
})