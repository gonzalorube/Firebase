<template>
  <div class="container-fluid" id="app">
    <Header />
    <Partidos />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue';
import Partidos from '../metacomponents/Partidos.vue';
import Footer from '../components/layouts/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Partidos,
    Footer
  }
}
</script>

<style>
  html {
    background-color: #1E1919;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 0 20px 0;
  }
  #logo {
    vertical-align: middle;
    margin-top: 0px;
    width: 60px;
  }
  .container-fluid {
    background-color: #1E1919;
  }
  .head-title {

  }
  p {
    color: #BFBCBC;
    background-color: #1E1919;
    margin: 0 40px;
  }
  h1 {
    font-size: 36px;
    font-weight: 600;
    color: #BFBCBC;
    min-width: 250px;
  }
  h2 {
    font-size: 32px;
    color: #BFBCBC;
  }
  h3 {
    color: #BFBCBC;
    margin-bottom: 0;
  }
  .navbar-brand {
    color: #BFBCBC;
    text-decoration: none;
  }
  .subtitle {
    background-color: #1E1919;
    margin-top: 0px;
    margin-bottom: 45px;
    min-width: 320px;
  }
  .footer {
    width: 100%;
  }
</style>
