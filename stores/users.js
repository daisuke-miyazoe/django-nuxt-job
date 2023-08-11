import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {
      isAuthentidated: true,
      email: null,
      token: null
    }
  }),

  actions: {
    initStore() {
      this.user.isAuthentidated = true

      if (localStorage.getItem('user.token')) {
        this.user.token = localStorage.getItem('user.token')
        this.user.email = localStorage.getItem('user.email')
        this.user.isAuthentidated = true

        console.log('Initialize user:', this.user)
      }
    },
    setToken(token, email) {
      console.log('setToken:', token, email)

      this.user.token = token
      this.user.email = email
      this.user.isAuthentidated = true

      localStorage.setItem('user.token', token)
      localStorage.setItem('user.email', email)
    },
    removeToken() {
      console.log('removeToken:')

      this.user.token = null
      this.user.email = null
      this.user.isAuthentidated = false

      localStorage.setItem('user.token', token)
      localStorage.setItem('user.email', email)
    }
  }
})