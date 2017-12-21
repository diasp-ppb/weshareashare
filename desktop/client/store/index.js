import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
    app,
    menu
  },
  state: {
    pkg,
    clientId: 'test',
    address: 'http://localhost:1337/',
    admin: {
      email: null,
      id: null
    },
    tokens: {
      access: {
        expiresIn: null,
        type: null,
        value: null
      },
      refresh: {
        type: null,
        value: null
      }
    }
  },
  mutations: {
    updateClientId: function (state, clientId) {
      this.state.clientId = clientId
    },
    setAdminInfo: function (state, admin) {
      this.state.admin = admin
    },
    setTokens: function (state, tokens) {
      this.state.tokens = tokens
    }
  }
})

export default store
