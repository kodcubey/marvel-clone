<template lang="">
  <header>
    <nav>
      <router-link to="/"><p>ana sayfa</p></router-link>
      <div class="dropdown">
        <span><i class="fa-sharp fa-regular fa-heart custom-heart"></i> <span class="favorite-count">0</span></span>
        <div class="dropdown-content">
          <p>Hello World!</p>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "HeaderBar",
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
header nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 15px;
}

header nav a:first-child {
  text-decoration: none;
  color: white;
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
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 2;
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
</style>
