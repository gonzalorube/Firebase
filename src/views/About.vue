<template>
  <div class="container-fluid about">
    <Header />
    <div class="subtitle"><h6><em>About us</em></h6></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</template>

<script>
  import Header from '../components/layouts/Header.vue';

  export default {
    components: {
      Header
    }
  }
</script>

<style scoped>
.about {
  background-color: #1E1919;
}
</style>
