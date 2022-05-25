
import { appAuth } from 'boot/toDoApp'
const state = {
  auth: {

  }

}

const mutations = {

}

const actions = {
  registerUser({},payload) {
    appAuth.createUserWithEmailAndPassword(payload.email, payload.email)
      .then(response => {
        console.log('response', response)
     })
      .catch(error => {
      console.log('error.message', error.message)
      })
    },
    loginUser({},payload) {
      appAuth.signInWithEmailAndPassword(payload.email, payload.email)
      .then(response => {
        console.log('response', response)
     })
      .catch(error => {
      console.log('error.message', error.message)
      })

    }

  }

const getters = {


}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters



}