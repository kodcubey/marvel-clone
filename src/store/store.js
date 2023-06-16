import { createStore } from "vuex";

export default createStore({
  state: {
    comics: [],
    comicsId: [],
    favoriteitem: [],
    isLoad: false,
  },
  getters: {},
  mutations: {
    setComicsData(state, data) {
      state.comics = data.data.results;
    },

    setComicsId(state, data) {
      state.comicsId = data.data.results[0];
    },

    addFavoriteItem(state, data) {
      state.buttonText = "Favorilerden Çıkar";
      let getData = JSON.parse(sessionStorage.getItem("favorites"));
      let changeData = JSON.parse(JSON.stringify(data));
      let isTrue = false;
      // datada veri varsa
      if (getData.length != 0) {
        getData.map((element) => {
          // data da bulunan itemlerın varlığı kontrol ediliyor
          if (element.id == changeData.id) {
            isTrue = true;
          }
        });

        // item yoksa ekleyip güncellenecek
        if (!isTrue) {
          state.favoriteitem.push(changeData);
          sessionStorage.setItem(
            "favorites",
            JSON.stringify(state.favoriteitem)
          );
        } else {
          // item varsa var olan değeri alsın ve üzerine eklesin
          state.favoriteitem = getData;
          state.favoriteitem.push(changeData);
          sessionStorage.setItem(
            "favorites",
            JSON.stringify(state.favoriteitem)
          );
        }
      } else {
        // datada hiçbir veri yoksa
        state.favoriteitem.push(changeData);
        sessionStorage.setItem("favorites", JSON.stringify(state.favoriteitem));
      }
    },

    removeFavoriteItem(state, id) {
      state.buttonText = "Favorilere Ekle";
      let getData = JSON.parse(sessionStorage.getItem("favorites"));
      const newGetData = getData.filter((items) => items.id !== id);
      state.favoriteitem = newGetData;
      sessionStorage.setItem("favorites", JSON.stringify(state.favoriteitem));
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
