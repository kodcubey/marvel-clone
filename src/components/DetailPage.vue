<template>
  <div class="detail-container" v-if="isLoad">
    <div class="image-container">
      <img
        v-bind:src="
          comicsId.thumbnail
            ? comicsId.thumbnail.path + '.' + comicsId.thumbnail.extension
            : null
        "
        alt="not found"
      />
      <div>
        <a>Favoriye Ekle <i class="fa-sharp fa-regular fa-heart"></i></a>
        <!-- <i class="fa-sharp fa-regular fa-heart"></i>
        <i class="fa fa-heart" aria-hidden="true"></i> -->
      </div>
    </div>
    <div class="content-text">
      <h1>{{ comicsId.title }}</h1>
      <p>
        {{ comicsId.description }}
      </p>
    </div>
  </div>
  <div v-else>
    <LoaderBar />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import LoaderBar from "./LoaderBar.vue";
export default {
  name: "DetailPage",
  mounted() {
    this.getComicsId(this.$route.params.id);
  },
  computed: {
    ...mapState(["comicsId", "isLoad"]),
  },
  methods: {
    ...mapActions(["getComicsId"]),
  },
  components: { LoaderBar },
};
</script>
<style scoped>
.detail-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.detail-container .image-container {
  display: flex;
  flex-direction: column;
}

.detail-container .image-container div {
  margin-top: 4%;
}

.detail-container .image-container div a {
  text-decoration: none;
  color: black;
  font-size: 24px;
  cursor: pointer;
}
.detail-container .image-container div i {
  color: red !important;
  font-size: 24px;
}

img {
  width: 300px;
}
.content-text {
  width: 40%;
  margin: 0 50px;
}
</style>
