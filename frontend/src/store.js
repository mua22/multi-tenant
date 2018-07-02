import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedIn: 0,
        status : 'Not Logged in'
    },
    mutations: {
        login (state) {
            state.loggedIn = 1;
            state.status = 'Logged In';
        },
        logout(state){
            state.loggedIn = 0;
            state.status = 'Not Logged In';
        }
    }
})

// import Buefy from 'buefy'
// Vue.use(Buefy, {store})
