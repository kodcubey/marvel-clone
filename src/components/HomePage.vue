<template>
  <h1 class="comic-title">~ comics ~</h1>
  <div class="card-container" v-if="isLoad">
    <CardComponent v-for="comic in comics" :key="comic.id" :comicArr="comic" />
  </div>
  <div v-else>
    <LoaderBar />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import CardComponent from "./CardComponent.vue";
import LoaderBar from "./LoaderBar.vue";

export default {
  name: "HomePage",
  mounted() {
    this.getComicsData();
  },
  computed: {
    ...mapState(["comics", "isLoad"]),
  },
  methods: {
    ...mapActions(["getComicsData"]),
  },
  components: {
    CardComponent,
    LoaderBar,
  },
};
</script>
<style scoped>
.card-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.comic-title {
  font-size: 6rem;
}
</style>
