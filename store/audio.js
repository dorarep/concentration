import spoon from '~/assets/bgm/silver_spoon.mp3';

export const state = () => {
  return {
    'bgm': null
  }
}

let sounds = {
  'spoon': spoon
}

let audioMap = {}

export const mutations = {
  playSound (state, name) {
    if (!audioMap[name]) {
      audioMap[name] = new Audio(sounds[name])
    }
    audioMap[name].play()
  },
  playBgm (state, name) {
    if (state.bgm === name) {
      return
    }
    if (!audioMap[name]) {
      audioMap[name] = new Audio(sounds[name])
      audioMap[name].loop = true
    }
    audioMap[name].currentTime = 0
    audioMap[name].play()

    state.bgm = name
  },
  stopBgm (state) {
    if (!state.bgm) {
      return
    }
    audioMap[state.bgm].pause()
    state.bgm = null
  }
}
