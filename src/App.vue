<template>
  <HeaderBar />
  <router-view />
  <FooterBar />
</template>

<script>
import HeaderBar from "./components/header/HeaderBar.vue";
import FooterBar from "./components/footer/FooterBar.vue";
export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
