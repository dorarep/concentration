import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'concentration',
      storage: localStorage,
      reducer: (state) => ({ user: state.user })
    }).plugin(store);
  });
}
