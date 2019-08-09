<template>
  <div class="container-fluid">
    <Header />
    <Form />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue';
import Footer from '../components/layouts/Footer.vue';
import Form from '../components/Form.vue';

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Header,
    Form,
    Footer
  }
}
</script>

<style lang="css" scoped>
</style>
