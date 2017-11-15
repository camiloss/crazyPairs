<template>
  <div >
      
        <SymbolPoint :symbol="symbols[0]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="symbols[1]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="symbols[2]" @selectedSymbolCard="selectSymbol"/>

    
        <SymbolPoint :symbol="symbols[3]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="symbols[4]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="symbols[5]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="symbols[6]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="symbols[7]" @selectedSymbolCard="selectSymbol"/>

  </div>
  
  
</template>

<script>
import Vue from 'vue'
import SymbolPoint from './Symbol.vue'

export default Vue.component('Card', {
  name: 'Card',
  props : ['card'],
  data () {
    return {
     symbols: [0, 7, 14, 21, 28, 35, 42, 49],
     
    }
  },
   methods : {
        selectSymbol : function(symbol){
            console.log('selectedSymbolCard '+symbol);
        }
    }
})
</script>

<style lang="scss">

</style>