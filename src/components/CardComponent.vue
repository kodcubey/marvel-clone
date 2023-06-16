<template>
  <div class="card">
    <router-link :to="'detail/' + comicArr.id">
      <img
        v-bind:src="
          comicArr.images.length != 0
            ? comicArr.images[0].path + '.jpg'
            : comicArr.thumbnail.path + '.jpg'
        "
        alt="not found"
      />
    </router-link>
    <button class="favorite-button">Favoriye Ekle</button>
    <p>{{ comicArr.title }}</p>
  </div>
</template>
<script>
export default {
  name: "CardComponent",
  props: {
    comicArr: Object,
  },
};
</script>
<style scoped>
.card {
  margin: 2%;
  width: 15%;
}

img {
  width: 100%;
  box-shadow: -1px 9px 15px 2px rgba(0, 0, 0, 0.53);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  height: 80%;
}

img:hover {
  transform: scale(1.05);
}

.favorite-button {
  width: 100%;
  height: 10%;
  border: 0;
  background: none;
  background-color: #151515;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2%;
}
</style>
