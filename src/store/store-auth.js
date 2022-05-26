import { LocalStorage} from 'quasar'
import { appAuth } from 'boot/toDoApp'
const state = {
  loggedIn : false

  }



const mutations = {

  setLoggedIn(state,value) {
    state.loggedIn = value
  }

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

    },

    logoutUser() {
        appAuth.signOut()

    },

    handleAuthStateChange({commit}) {
      appAuth.onAuthStateChanged((user) => {
        if(user) {
          commit('setLoggedIn',true)
          LocalStorage.set('loggedIn', true)
          this.$router.push('/').catch(err=> {})

        }
        else {
          commit('setLoggedIn',false)
          LocalStorage.set('loggedIn', false)
          this.$router.replace('/auth').catch(err=>{})

        }
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