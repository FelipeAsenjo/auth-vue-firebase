<template>
  <div class="home">
    <Navbar />
    <h1 v-text='title' class='text-center mt-5' />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
      title: 'Bienvenidos al Home'
    }
  }
}
</script>
