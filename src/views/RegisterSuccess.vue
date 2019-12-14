<template>
  <div class="container-fluid">
    <Header />
    <h2>Thank you for your registration!</h2>
    <a href="#/home"><h3>Go back to Home</h3></a>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue';
import Footer from '../components/layouts/Footer.vue';

export default {
  name: 'RegisterSuccess',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="css" scoped>
</style>
