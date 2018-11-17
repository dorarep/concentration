import STAGES from '~/constants/stages'

const initialState = {
  timer: 0,
  timerObj: null,
  boardY: 2,
  boardX: 4,
  board: [[]],
  isOpen: [[]],
  opening: null
}

export const state = () => JSON.parse(JSON.stringify(initialState))

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const mutations = {
  open (state, { y, x }) {
    state.isOpen[y][x] = true
    state.isOpen = Object.assign({}, state.isOpen)
  },
  close (state) {
    state.isOpen[state.opening.y][state.opening.x] = false
    state.isOpen = Object.assign({}, state.isOpen)
  },
  setOpening (state, { y, x }) {
    state.opening = { y, x }
  },
  deleteOpening (state) {
    state.opening = null
  },
  initialize (state, id) {
    if (state.timerObj) {
      clearInterval(state.timerObj)
    }
    state.boardX = STAGES[id].boardX
    state.boardY = STAGES[id].boardY
    state.timer = STAGES[id].timer

    let numbers = [...Array(state.boardY * state.boardX / 2)].map((v, i) => i)
    numbers = shuffle(numbers.concat(numbers))
    state.board = [...Array(state.boardY)].map(() => [...Array(state.boardX)].map(() => numbers.pop()))
    state.isOpen = [...Array(state.boardY)].map(() => Array(state.boardX).fill(false))
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
    if (state.opening) {
      console.log(state.opening, state.board[y][x])
      if (state.board[state.opening.y][state.opening.x] === state.board[y][x]) {
        commit('open', { y, x })
      } else {
        commit('close')
      }
      commit('deleteOpening')
    } else {
      commit('open', { y, x })
      commit('setOpening', { y, x })
    }
  },
  initialize ({ state, commit }, id) {
    commit('initialize', id)
  },
  startTimer ({ state, commit }) {
    commit('setTimer', setInterval(() => { commit('reduceTimer') }, 1000))
  }
}
