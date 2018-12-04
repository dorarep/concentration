const initialState = {
  cleared: {}
}

export const state = () => JSON.parse(JSON.stringify(initialState))

export const mutations = {
  clear (state, stage) {
    state.cleared[stage] = true
  }
}
