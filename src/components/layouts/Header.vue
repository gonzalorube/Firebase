<template>
  <div class="container-fluid" id="app">
    <nav class="navbar navbar-expand-lg">
      <slider
      :width="300"
      format="push"
      direction="left"
      :opacity="0.15"
      :links="[
        {'id': 1, 'text': 'About us', 'url': '#/about'},
        {'id': 2, 'text': 'Contact us', 'url': 'mailto: info@nysl.com'},
        {'id': 3, 'text': 'Sign in / out', 'url': '#/login'}
      ]"
    >
    </slider>
      <a class="navbar-brand" href="/">
        <h1>NY  <img alt="nysl logo" src="../../assets/nysl_logo.png" id="logo">  SL</h1>
      </a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li v-if="isLoggedIn" class="nav-item">
          <a class="nav-link email">
            {{currentUser}}
          </a>
        </li>
        <li v-if="!isLoggedIn" class="nav-item">
          <a class="nav-link" href="#/login">
            Login
          </a>
        </li>
        <li v-if="!isLoggedIn" class="nav-item">
          <a class="nav-link" href="#/register">
            Register
          </a>
        </li>
        <li v-if="isLoggedIn" class="nav-item">
          <a @click="logout()">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
import Slider from '../../components/Slider.vue';
  export default {
    name: "Header",
    data() {
      return {
        isLoggedIn: false,
        currentUser: false
      }
    },
    created() {
      if(firebase.auth().currentUser){
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email;
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push('/login');
        });
      }
    },
    components: {
      Slider
    }
  }
</script>

<style>
  header {
/*    width: 100%;*/
    margin: 0;
    padding-right: 3em;
  }
  .login {

  }
  .navbar-nav {
    float: right;
    align-items: center;
  }
  .nav-item {
    color: #BFBCBC;
    padding: 10px 0px 0 20px;
    position: relative;
    display: inline-flex;
    line-height: 1.2;
  }
  .nav-link {
    color: #BFBCBC;
    padding: 0;
    position: relative;
    display: inline-flex;
    line-height: 1.2;
  }
  .navbar{
    border-radius: 0;
    min-height: 105px;
    background-color: #1E1919;
/*    border-bottom: 1px solid rgba(0, 0, 0, 0.1);*/
    padding: 5px 15px;
    margin: 0;
  }
  @media (max-width: 740px){
    .navbar-brand {
      float: none;
    }
    h1 {
      padding-right: 30px;
    }
    .navIcon {
      margin-top: 5px;
    }
  }
  .email:hover {
    text-decoration: none;
    color: inherit;
  }
</style>
