<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" v-text='title' />
        <button @click='logout' class="btn btn-info ms-auto">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth'
import { firebase } from '../config/firebase'

const auth = getAuth( firebase )

export default {
  name: 'Navbar',
  data() {
    return {
      title: 'Auth-Vue'
    }
  },
  methods: {
    logout() {
      auth.signOut()
        .then( () => {
          this.$router.push('login')
        } )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
