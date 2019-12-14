<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col s12 m8 offset-m2">
            <div class="login card-panel grey lighten-4 black-text center">
              <h3>Login</h3>
              <form>
                <div class="input-field">
                  <!--<i class="material-icons prefix">email</i>-->
                  <!--<label for="email">Email</label>-->
                  <input type="text" id="email" v-model="email" placeholder="email">
                </div>
                <div class="input-field">
                  <!--<i class="material-icons prefix">lock</i>-->
                  <!--<label for="password">Pass</label>-->
                  <input type="password" id="password" v-model="password" placeholder="password">
                </div>
                <button @click="login()" class="btn btn-large grey lighten-4 black-text" type="submit">Login</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiAccount } from '@mdi/js';

export default {
    data () {
      return {
        email: '',
        password: ''
    }
  },
    methods: {
      login (e) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
          alert(`You are logged in as ${this.email}`);
          this.$router.push('/logsuccess');
        },
        err => {
          alert(err.message);
        }
      );
      }
    }
}
</script>

<style lang="css" scoped>
h3 {
  margin-bottom: 10px;
}
.input-field {
  align-items: center;
}
.btn {
  width: 200px;
}
</style>
