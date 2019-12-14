import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GSignInButton from 'vue-google-signin-button'
import firebase from 'firebase'
Vue.use(firebase)
Vue.use(GSignInButton)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAXP4eURL8A7R1RksjvQQzF_IMwms_53TQ",
  authDomain: "nysl-app-gfr.firebaseapp.com",
  databaseURL: "https://nysl-app-gfr.firebaseio.com",
  projectId: "nysl-app-gfr",
  storageBucket: "nysl-app-gfr.appspot.com",
  messagingSenderId: "Northside Youth Soccer League"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  firebase: firebase,
  router,
  render: h => h(App)
}).$mount('#app')
