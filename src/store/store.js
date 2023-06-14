import { createStore } from "vuex";

export default createStore({
  state: {
    comics: [],
    comicsId: [],
    isLoad: false,
  },
  getters: {},
  mutations: {
    setComicsData(state, data) {
      console.log(data.data.results);
      state.comics = data.data.results;
    },

    setComicsId(state, data) {
      console.log(data.data.results[0]);
      state.comicsId = data.data.results[0];
    },
  },
  actions: {
    async getComicsData({ commit }) {
      await fetch(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=5764e1ee85b388629a5c00c07ed1c25e&hash=851c7291c5f9a7310786431f74af9aca"
      )
        .then((response) => response.json())
        .then((data) => {
          this.state.isLoad = true;
          commit("setComicsData", data);
        })
        .catch((err) => console.error(err));
    },

    async getComicsId({ commit }, id) {
      return await fetch(
        `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=5764e1ee85b388629a5c00c07ed1c25e&hash=851c7291c5f9a7310786431f74af9aca`
      )
        .then((response) => response.json())
        .then((data) => {
          this.state.isLoad = true;
          commit("setComicsId", data);
        })
        .catch((err) => console.log(err));
    },
  },
});
