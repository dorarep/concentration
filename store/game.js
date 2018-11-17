const initialState = {
  timer: 0,
  timerObj: null,
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
    state.timer = 20
  },
  setTimer (state, timer) {
    state.timerObj = timer
  },
  reduceTimer (state) {
    if (state.timer > 0) {
      state.timer--
    }
  }
}

export const actions = {
  onClick ({ state, commit }, { y, x }) {
    commit('open', { y, x })
  },
  initialize ({ state, commit }) {
    commit('initialize')
    commit('setTimer', setInterval(() => { commit('reduceTimer') }, 1000))

  }
}
