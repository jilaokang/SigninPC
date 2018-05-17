import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count: "I am vuex",
    topnav: ""
}

const mutations = {
    topnavUpdate(state, title) {
        state.topnav = title;
    }
}

export default new Vuex.Store({
    state,
    mutations
})

