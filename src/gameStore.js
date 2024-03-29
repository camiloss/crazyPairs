
import Vue from 'vue'
import Vuex from 'vuex'

// import firebase from 'firebase'
import _ from 'lodash'
// import 'firebase/firestore'
// import config from './config'

// Vue.prototype.$firebase = firebase.initializeApp(config)

Vue.use(Vuex)

const cards = [
  [0, 1, 2, 3, 4, 5, 6, 56],
  [0, 7, 14, 21, 28, 35, 42, 49],
  [0, 8, 16, 24, 32, 40, 48, 50],
  [0, 9, 18, 27, 29, 38, 47, 51],
  [0, 10, 20, 23, 33, 36, 46, 52],
  [0, 11, 15, 26, 30, 41, 45, 53],
  [0, 12, 17, 22, 34, 39, 44, 54],
  [0, 13, 19, 25, 31, 37, 43, 55],
  [1, 7, 20, 26, 32, 38, 44, 55],
  [1, 8, 15, 22, 29, 36, 43, 49],
  [1, 9, 17, 25, 33, 41, 42, 50],
  [1, 10, 19, 21, 30, 39, 48, 51],
  [1, 11, 14, 24, 34, 37, 47, 52],
  [1, 12, 16, 27, 31, 35, 46, 53],
  [1, 13, 18, 23, 28, 40, 45, 54],
  [2, 7, 19, 24, 29, 41, 46, 54],
  [2, 8, 14, 27, 33, 39, 45, 55],
  [2, 9, 16, 23, 30, 37, 44, 49],
  [2, 10, 18, 26, 34, 35, 43, 50],
  [2, 11, 20, 22, 31, 40, 42, 51],
  [2, 12, 15, 25, 28, 38, 48, 52],
  [2, 13, 17, 21, 32, 36, 47, 53],
  [3, 7, 18, 22, 33, 37, 48, 53],
  [3, 8, 20, 25, 30, 35, 47, 54],
  [3, 9, 15, 21, 34, 40, 46, 55],
  [3, 10, 17, 24, 31, 38, 45, 49],
  [3, 11, 19, 27, 28, 36, 44, 50],
  [3, 12, 14, 23, 32, 41, 43, 51],
  [3, 13, 16, 26, 29, 39, 42, 52],
  [4, 7, 17, 27, 30, 40, 43, 52],
  [4, 8, 19, 23, 34, 38, 42, 53],
  [4, 9, 14, 26, 31, 36, 48, 54],
  [4, 10, 16, 22, 28, 41, 47, 55],
  [4, 11, 18, 25, 32, 39, 46, 49],
  [4, 12, 20, 21, 29, 37, 45, 50],
  [4, 13, 15, 24, 33, 35, 44, 51],
  [5, 7, 16, 25, 34, 36, 45, 51],
  [5, 8, 18, 21, 31, 41, 44, 52],
  [5, 9, 20, 24, 28, 39, 43, 53],
  [5, 10, 15, 27, 32, 37, 42, 54],
  [5, 11, 17, 23, 29, 35, 48, 55],
  [5, 12, 19, 26, 33, 40, 47, 49],
  [5, 13, 14, 22, 30, 38, 46, 50],
  [6, 7, 15, 23, 31, 39, 47, 50],
  [6, 8, 17, 26, 28, 37, 46, 51],
  [6, 9, 19, 22, 32, 35, 45, 52],
  [6, 10, 14, 25, 29, 40, 44, 53],
  [6, 11, 16, 21, 33, 38, 43, 54],
  [6, 12, 18, 24, 30, 36, 42, 55],
  [6, 13, 20, 27, 34, 41, 48, 49],
  [7, 8, 9, 10, 11, 12, 13, 56],
  [14, 15, 16, 17, 18, 19, 20, 56],
  [21, 22, 23, 24, 25, 26, 27, 56],
  [28, 29, 30, 31, 32, 33, 34, 56],
  [35, 36, 37, 38, 39, 40, 41, 56],
  [42, 43, 44, 45, 46, 47, 48, 56],
  [49, 50, 51, 52, 53, 54, 55, 56]
]
// root state object.
// each Vuex instance is just a single state tree.
const state = {
  cardsDeck: [],
  playerCard: null,
  playMatchID: 'TEST',
  // db: firebase.firestore(),
  playMatch: null,
  playerName: 'PLAYER1'
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  initGame (state) {

  },

  persist (state) {
    let playMatches = state.db.collection('playMatches')
    playMatches.doc(state.playMatchID).set(state.playMatch)
  },

  shuffle (state) {
    let cardsShuffle = []
    _.each(cards, (c) => {
      cardsShuffle.push({symbols: _.clone(c)})
    })

    state.cardsDeck = _.shuffle(cardsShuffle)

    state.playMatch = {
      cardsShuffle: cardsShuffle,
      players: [
        {
          name: state.playerName,
          cards: []
        }
      ]
    }
  },
  takeCard (state) {
    _.find(state.playMatch.players, {name: state.playerName}).cards.push(state.cardsDeck[0])
    state.playerCard = state.cardsDeck.shift()
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  initGame: ({ commit }) => {
    commit('initGame')
    commit('shuffle')
    commit('takeCard')
    commit('persist')
  },
  takeCard: ({ commit }) => {
    commit('takeCard')
    commit('persist')
  },

  selectSymbol ({ commit }, cardAction) {
    if (this.getters.playerCard.symbols.indexOf(cardAction.selectedSymbol) !== -1 &&
                this.getters.topCard.symbols.indexOf(cardAction.selectedSymbol) !== -1) { this.dispatch('takeCard') }
  },

  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  topCard: state =>
    (state.cardsDeck.length) ? state.cardsDeck[0] : null,
  playerCard: state =>
    state.playerCard
  //  playerScore: state =>
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
