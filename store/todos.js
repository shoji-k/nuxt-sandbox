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
  ]
})

export const getters = {
  getList(state) {
    return state.list
  }
}

export const mutations = {}
