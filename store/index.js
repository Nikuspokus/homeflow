const state = () => ({
  user: null,
})

const getters = {
  getUser(state) {
    return state.user
  },
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

const actions = {
  async onAuthStateChangeAction(state, { authUser, claims }) {
    if (!authUser) {
      state.commit('SET_USER', null)

      this.$router.push({
        path: '/auth/signin',
      })
    } else {
      const { uid, email } = authUser
      state.commit('SET_USER', {
        uid,
        email,
      })
    }
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
