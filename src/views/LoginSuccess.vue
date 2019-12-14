<template>
  <div class="container-fluid">
    <Header />
    <h2>Welcome!</h2>
    <a href="#/home"><h3>Go back to Home</h3></a>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue';
import Footer from '../components/layouts/Footer.vue';

export default {
  name: 'LoginSuccess',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="css" scoped>
  h3 {
    color: #1E301E;
    margin-bottom: 284px;
  }
</style>
