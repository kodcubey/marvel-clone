<template>
  <HeaderBar />
  <div class="container">
    <router-view />
  </div>
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
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Bebas Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 18px;
}

.container {
  width: 1200px;
  margin: 5% auto;
}
</style>
