<template class=''>
  <div class="login text-center d-flex flex-column justify-content-center">
    <h1 v-text='title' />
    <div class='container p-4 rounded'>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model='loginForm.user' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model='loginForm.pass' type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <button @click='login' type="button" class="btn btn-primary">Ingresar</button>
    </div>
  </div>
</template>


<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { firebase } from '../config/firebase'

const auth = getAuth( firebase )


export default {
  data() {
    return {
      title: 'Login',
      loginForm: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    login() {
      signInWithEmailAndPassword( auth, this.loginForm.user, this.loginForm.pass )
        .then( credentials => {
          console.log( credentials )
          this.$router.push('home')
        }).catch( error => {
          console.log( error )
          alert( 'Correo o contrasena invalida' )
        } )
    }
  }
}

</script>

<style scoped>
.login {
  min-height: 100vh;
}

.container {
  max-width: 25rem;
  background-color: #ccc;
}
</style>
