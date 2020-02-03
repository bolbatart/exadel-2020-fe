import axios from 'axios'

export const user = {
  state: {
    login: {
      loginError: '',
      isAuthenticated: false,
    }
  },
  getters: {

  },
  mutations: {
    LOGIN_ERR: (state, payload) => {
      state.login.loginError = payload.response.data.message
    },
    LOGIN: (state) => {
      state.login.isAuthenticated = true
    },
    LOGOUT: (state) => {
      state.login.isAuthenticated = false
    }
  },
  actions: {
    REGISTRATION: (context, credentials) => {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/register', credentials, { withCredentials: true })
          .then(res => {
            context.commit('LOGIN')
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    LOGIN: (context, credentials) => {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/login', credentials, { withCredentials: true })
          .then((res) => {
            if (res.status !== 200) {
              context.commit('LOGIN_ERR', res.body.message)
            }
            else {
              context.commit('LOGIN')
              resolve(res)
            }
          })
          .catch((err) => {
            context.commit('LOGIN_ERR', err)
            reject(err)
          })
      })
    },

    LOGOUT: (context) => {
      return new Promise((resolve, reject) => {
        axios.delete('http://localhost:5000/logout', { withCredentials: true })
          .then((res) => {
            context.commit('LOGOUT')
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })

    }
  }
}
