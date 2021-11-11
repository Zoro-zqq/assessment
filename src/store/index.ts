import { createStore } from 'vuex'
import modules from './modules'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export default createStore({
    state: {
        ...state
    },
    mutations: {
        ...mutations
    },
    actions: {
        ...actions
    },
    getters: {
        ...getters
    },
    modules: {
        ...modules
    }
})