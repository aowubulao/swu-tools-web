<template>
  <v-app style="background-color: #FAFAFA">
    <div>
      <Navigation/>
      <ScrollToTop/>
      <transition name="slide-fade" mode="out-in">
        <router-view/>
      </transition>
      <Footer/>
    </div>
  </v-app>
</template>

<script>
  import ScrollToTop from "./components/ScrollToTop";
  import Navigation from "./components/Navigation";
  import Footer from "./components/Footer"

  export default {
    name: 'app',
    components: {
      Navigation,
      ScrollToTop,
      Footer
    },
    data () {
      return {

      }
    },
    mounted() {

    }
  }
</script>

<style>

</style>
