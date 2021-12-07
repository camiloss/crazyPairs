<template>
  <div id="app">
  <button @click="initGame">new Game</button>
  <button @click="takeCard">take Card</button>
    <div class="main-container">
        <div class="col">

            <h1>CARD DECK</h1>
            <Card :card="topCard"></Card>
        </div>
        <div class="col">
            <h1>PLAYER CARD</h1>
            <Card :card="playerCard" @selectedSymbolCard="selectSymbol"></Card>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from './components/Card.vue'

export default {
  computed: mapGetters([
    'topCard',
    'playerCard'
  ]),
  methods: mapActions([
    'initGame',
    'takeCard',
    'selectSymbol'
  ])
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.main-container{
    display:flex;

}
.main-container .col{
    flex:1;
}
</style>
