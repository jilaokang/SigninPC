import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: "I am vuex"
    },
    mutations: {
        change(state) {
            count = "I am new vuex"
        }
    }
});


