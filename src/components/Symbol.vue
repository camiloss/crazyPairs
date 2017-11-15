<template>
  <div >
    <h1 v-on:click="handleClick"> {{symbol}}</h1>
    
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

</style>


