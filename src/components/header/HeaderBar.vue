<template lang="">
  <header>
    <nav>
      <router-link to="/"><p>ana sayfa</p></router-link>
      <img class="logo" src="@/assets/logo.png" />
      <div class="dropdown">
        <span class="favorite-text"
          >FAVORİLERİM <i class="fa fa-heart" aria-hidden="true"></i>
          {{ favoriteitem.length }}
        </span>
        <div class="dropdown-content">
          <p v-for="favorite in favoriteitem" :key="favorite.id">
            <router-link :to="'detail/' + favorite.id">{{
              favorite.title
            }}</router-link>
          </p>
        </div>
      </div>
    </nav>
  </header>
  <section class="slider-image-wrapper">
    <img src="@/assets/slider.jpg" class="kapak-resmi" alt="" />
    <h1>
      Hello everyone, <br />
      I'm Samet, welcome to my website.
    </h1>
  </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "HeaderBar",
  computed: {
    ...mapState(["favoriteitem"]),
  },
};
</script>
<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: #202020;
  z-index: 3;
}

.logo {
  width: 10%;
}

.kapak-resmi {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(30%);
}

.slider-image-wrapper h1 {
  position: absolute;
  top: 20%;
  left: 10%;
  color: #f9f9f9;
  font-size: 4rem;
  text-align: left;
}

header nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.8);
}

header nav a:first-child {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  transition: all 1s ease;
}

header nav a:first-child:hover {
  color: #e62429;
}
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 2;
}

.dropdown-content a {
  color: #e62429 !important;
}

.dropdown-content p {
  margin: 10px 0;
}

.slider-image-wrapper {
  width: 100%;
  height: 50vh;
  overflow: hidden;
}

.custom-heart {
  font-size: 1.5rem;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.favorite-count {
  color: white;
}

.favorite-text {
  color: white;
  font-size: 1.5rem;
}

.favorite-text i {
  color: #e62429;
}
</style>
