import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate";
import board from "./modules/board"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        board
    },
    plugins: [createPersistedState()],
})