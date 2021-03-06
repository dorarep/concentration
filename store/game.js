import STAGES from '~/constants/stages'

export const STATE_BEFORE_GAME = 0
export const STATE_LEARNING    = 1
export const STATE_PLAYING     = 2

const initialState = {
  score: 0,
  timer: 0,
  timerObj: null,
  boardY: 2,
  boardX: 4,
  board: [[]],
  isOpen: [[]],
  opening: null,
  gameState: STATE_BEFORE_GAME
}

export const state = () => JSON.parse(JSON.stringify(initialState))

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const getters = {
  isGameStateLearning (state) {
    return state.gameState === STATE_LEARNING
  }
}

export const mutations = {
  open (state, { y, x }) {
    state.isOpen[y][x] = true
    state.isOpen = Object.assign({}, state.isOpen)
  },
  close (state, { y, x }) {
    state.isOpen[y][x] = false
    state.isOpen = Object.assign({}, state.isOpen)
  },
  setGameState (state, gameState) {
    state.gameState = gameState
  },
  addScore (state) {
    state.score++
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
    state.score = 0
    state.boardX = STAGES[id].boardX
    state.boardY = STAGES[id].boardY
    state.timer = STAGES[id].timer
  },
  resetBoard (state) {
    let numbers = [...Array(state.boardY * state.boardX / 2)].map((v, i) => i)
    numbers = shuffle(numbers.concat(numbers))
    state.board = [...Array(state.boardY)].map(() => [...Array(state.boardX)].map(() => numbers.pop()))
    state.isOpen = [...Array(state.boardY)].map(() => Array(state.boardX).fill(false))
    state.opening = null
  },
  setTimer (state, timer) {
    if (state.timerObj) {
      clearInterval(state.timerObj)
    }
    state.timerObj = timer
  },
  reduceTimer (state) {
    if (state.timer > 0) {
      state.timer--
    }
  }
}

const wait = ms => new Promise((r, j)=>setTimeout(r, ms))
let clickLock = false

export const actions = {
  async onClick ({ state, commit }, { y, x }) {
    if (clickLock || state.gameState !== STATE_PLAYING || state.isOpen[y][x]) {
      return
    }
    clickLock = true
    if (state.opening) {
      if (state.board[state.opening.y][state.opening.x] === state.board[y][x]) {
        commit('open', { y, x })
        commit('addScore')
        await wait(50)
      } else {
        commit('open', { y, x })
        await wait(300)
        commit('close', { y: state.opening.y, x: state.opening.x })
        commit('close', { y, x })
      }
      commit('deleteOpening')
    } else {
      commit('open', { y, x })
      commit('setOpening', { y, x })
      await wait(50)
    }

    const isFinish = Object.keys(state.isOpen).reduce((carry, key) => carry && state.isOpen[key].reduce((carry, cell) => carry && cell, true), true)
    if (isFinish) {
      await wait(100)
      commit('resetBoard')
      await wait(300)
      commit('setGameState', STATE_LEARNING)
    }
    clickLock = false
  },
  initialize ({ state, commit }, id) {
    commit('initialize', id)
    commit('resetBoard')
    commit('audio/playBgm', 'spoon', {root: true})
  },
  setTimer ({ state, commit }, interval) {
    commit('setGameState', STATE_LEARNING)
    commit('setTimer', interval)
  },
  finishLearning ({ state, commit }) {
    if (state.gameState === STATE_LEARNING) {
      commit('setGameState', STATE_PLAYING)
    }
  },
  stageSelect ({ state, commit }) {
    commit('audio/playBgm', 'stage', {root: true})
  }
}
