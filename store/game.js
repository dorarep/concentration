const initialState = {
  boardSize: 4,
  board: [[]],
  isOpen: [[]]
}

export const state = () => JSON.parse(JSON.stringify(initialState))

const getRandom = max => Math.floor(Math.random() * Math.floor(max))

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const mutations = {
  open (state, { y, x }) {
    state.isOpen[y][x] = 1
    state.isOpen = Object.assign({}, state.isOpen)
  },
  initialize (state) {
    let numbers = [...Array(state.boardSize * state.boardSize / 2)].map((v, i) => i)
    numbers = shuffle(numbers.concat(numbers))
    state.board = [...Array(state.boardSize)].map(() => [...Array(state.boardSize)].map(() => numbers.pop()))
    state.isOpen = [...Array(state.boardSize)].map(() => Array(state.boardSize).fill(0))
  }
}

export const actions = {
  onClick ({ state, commit }, { y, x }) {
    commit('open', { y, x })
  }
}
