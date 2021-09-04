<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name: 'Home'}">
    home
    </router-link>
  </div>
</template>

<script>
export default {
  created() {
    console.log('About start')
    console.log('router', this.$router)
    console.log('route', this.$route)
  },
}
</script>
