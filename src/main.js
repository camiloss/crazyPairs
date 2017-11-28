import Vue from 'vue'
import App from './App.vue'
import store from './gameStore'
import _ from  'lodash';

import firebase from 'firebase';



firebase.initializeApp({
    apiKey: "AIzaSyDb1sCq2HSN63Kw2QDUWWBuHvV8-QUCfas",
    authDomain: "coches-ad68e.firebaseapp.com",
    databaseURL: "https://coches-ad68e.firebaseio.com",
    projectId: "coches-ad68e",
    storageBucket: "coches-ad68e.appspot.com",
    messagingSenderId: "479074765777"
  });


new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
