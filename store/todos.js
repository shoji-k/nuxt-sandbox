export const state = () => ({
  list: [
    {
      id: 1,
      name: 'Sample todo one',
      done: false
    },
    {
      id: 2,
      name: 'Sample todo two',
      done: false
    }
  ],
  maxId: 2
})

export const getters = {
  getList(state) {
    return state.list
  }
}

export const mutations = {
  addTodo(state, { text }) {
    state.maxId += 1
    state.list.push({
      id: state.maxId,
      name: text,
      done: false
    })
  }
}

export const actions = {
  add({ commit }, { text }) {
    commit('addTodo', { text })
  }
}
