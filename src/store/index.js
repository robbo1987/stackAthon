import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './store-tasks'
import auth from './store-auth'

Vue.use(Vuex)


export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tasks,
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
