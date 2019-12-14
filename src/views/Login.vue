<template>
  <div class="container-fluid">
    <Header />
    <div class="subtitle"><h6><em>Login</em></h6></div>
    <Auth />
    <h4>Or Sign in with Google</h4>
    <FormLogin />
    <h3>Not registered yet?</h3>
    <h6>If you're not already registered, you can do it <a class="nav-link" href="#/register">here</a></h6>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue';
import Footer from '../components/layouts/Footer.vue';
import FormLogin from '../components/FormLogin.vue';
import Auth from '../components/Auth.vue';

export default {
  name: 'Login',
  components: {
    Header,
    FormLogin,
    Auth,
    Footer
  },
  data () {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      googleSignInParams: {
        client_id: 'YOUR_APP_CLIENT_ID.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
</script>

<style lang="css" scoped>
a {
  color: #0000CC;
}
  .btn {
    color: #3F3C3C;
    background-color: #EFECEC;
  }
</style>
