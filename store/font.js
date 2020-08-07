export const state = () => ({
  value: 1.0,
  default: 1.0,
  bigger: 1.5
})

export const mutations = {
  toggle (state) {
    state.value = state.value == state.bigger ? state.default : state.bigger
  }
}
