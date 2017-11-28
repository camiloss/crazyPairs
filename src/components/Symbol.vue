<template>
  <div class="container-symbol">
    <h1 v-on:click="handleClick" class="card-symbol"> {{symbol}}</h1>

  </div>


</template>

<script>
import Vue from 'vue'

export default Vue.component('SymbolPoint', {
  name: 'SymbolPoint',
  props : ['symbol'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods : {
        handleClick : function(){
            console.log('selecting')
            this.$emit('selectedSymbolCard',this.symbol);
        }
    }
})
</script>

<style lang="scss">
.container-symbol{
    display:inline-block;
    margin-left: 1em;
}
.card-symbol {
    width: 4em;
    height: 4em;
    border-radius: 50%;
    border: 2px dotted;
    line-height: 4em;
    background: aliceblue;
}
</style>
