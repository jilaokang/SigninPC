import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    count: "I am vuex",
    topnav:["dd",""]
}

export default new Vuex.Store({
    state
})

