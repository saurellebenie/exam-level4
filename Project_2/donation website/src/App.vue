<script>
import Header from './components/Pages/Header.vue';
import Footer from './components/Pages/Footer.vue';
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <div>
    <Header />
    <div class="main">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.main{
  margin-top: 2rem;
}
</style>
