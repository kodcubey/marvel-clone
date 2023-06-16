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
    <div style="display: inline" @click="toggle">
      <button
        class="favorite-button"
        @click="
          checkFavoriteItem(comicArr.id)
            ? removeFavoriteItem(comicArr.id)
            : addFavoriteItem(comicArr)
        "
      >
        {{ isText ? "Favorilerden Çıkar" : "Favorilere Ekle" }}
      </button>
    </div>
    <p>{{ comicArr.title }}</p>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "CardComponent",
  props: {
    comicArr: Object,
  },
  computed: {
    ...mapState(["favoriteitem", "buttonText"]),
  },
  data() {
    return {
      isText: this.checkFavoriteItem(this.comicArr.id),
    };
  },
  methods: {
    ...mapMutations(["addFavoriteItem", "removeFavoriteItem"]),
    checkFavoriteItem(id) {
      let getData = JSON.parse(sessionStorage.getItem("favorites"));
      for (let i = 0; i < getData.length; i++) {
        if (getData[i].id == id) {
          return true;
        }
      }

      return false;
    },

    toggle() {
      this.isText = !this.isText;
    },
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
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2%;
}
</style>
