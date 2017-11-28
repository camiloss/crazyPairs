<template>
  <div class="card">
    <div class="lineOf2">
        <SymbolPoint :symbol="card.symbols[0]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="card.symbols[1]" @selectedSymbolCard="selectSymbol"/>
    </div>
    <div class="lineOf4">
        <SymbolPoint :symbol="card.symbols[2]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="card.symbols[3]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="card.symbols[4]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="card.symbols[5]" @selectedSymbolCard="selectSymbol"/>
    </div>
    <div class="lineOf2">
       <SymbolPoint :symbol="card.symbols[6]" @selectedSymbolCard="selectSymbol"/>
        <SymbolPoint :symbol="card.symbols[7]" @selectedSymbolCard="selectSymbol"/>
    </div>
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


    }
  },
   methods : {
        selectSymbol : function(symbol){
            this.$emit('selectedSymbolCard',{card:this.card,selectedSymbol:symbol});
        }
    }
})
</script>

<style lang="scss">
.card {
    border:2px dotted gray;
    border-radius:50%;
    display:inline-block;
    box-shadow: black 9px 9px 9px;
    background-color:bisque;
}
</style>
