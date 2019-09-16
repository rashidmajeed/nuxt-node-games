
export const state = () => ({
    items: []
  })
  
  export const actions = {
    fetchGames({commit}) {
      return this.$axios.$get('/api/v1/products')
        .then(games => {
          commit('setItems', {resource: 'game', items: games}, {root: true})
          return state.items
        })
    }
  }