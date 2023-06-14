<template lang="">
  <header>
    <router-link to="/">Home</router-link> |
    <router-link to="/favorite"
      >Favorite Page <i class="fa-sharp fa-solid fa-heart"></i
    ></router-link>
  </header>
</template>
<script>
export default {
  name: "HeaderBar",
};
</script>
<style scoped></style>
