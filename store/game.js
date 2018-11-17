const initialState = {
  boardSize: 5,
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  isOpen: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}

export const state = () => JSON.parse(JSON.stringify(initialState))

export const mutations = {
  open (state, { y, x }) {
    state.isOpen[y][x] = 1
    state.isOpen = Object.assign({}, state.isOpen)
  }
}

export const actions = {
  onClick ({ state, commit }, { y, x }) {
    commit('open', { y, x })
  }
}
