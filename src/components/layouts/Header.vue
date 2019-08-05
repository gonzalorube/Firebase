<template>
  <div class="container-fluid" id="app">
    <slider
      :width="300"
      format="push"
      direction="left"
      :opacity="0.15"
      :links="[
        {'id': 1, 'text': 'About us', 'url': '#/about'},
        {'id': 2, 'text': 'Contact us', 'url': 'mailto: info@nysl.com'},
        {'id': 3, 'text': 'Sign in / out', 'url': '#'}
      ]"
    >
    </slider>
    <router-link to="/">
      <header>
        <h1>NY  <img alt="nysl logo" src="../../assets/nysl_logo.png" id="logo">  SL</h1>
      </header>
    </router-link>
  </div>
</template>

<script>
import Slider from '../../components/Slider.vue';
  export default {
    name: "Header",
    components: {
      Slider
    }
  }
</script>

<style>
  header {
    width: 100%;
    margin: 0;
    padding-right: 3em;
  }
</style>
