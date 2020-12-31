import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function saveToLocalStorage(favoritesArray) {
  localStorage.setItem(
    'favorites',
    JSON.stringify(favoritesArray.map((fav) => fav.id))
  );
}

export default new Vuex.Store({
  state: {
    favorites: [],
  },
  mutations: {
    setFavoriteList(state, newFavorites) {
      if (newFavorites && Array.isArray(newFavorites)) {
        state.favorites = newFavorites;
        saveToLocalStorage(state.favorites);
      } else {
        console.error('New Favorite list is not valid');
      }
    },
    addFavoriteToList(state, newFavorite) {
      const favIndex = state.favorites.find((fav) => fav.id === newFavorite.id);
      if (!favIndex) {
        state.favorites.push(newFavorite);
        saveToLocalStorage(state.favorites);
      }
    },
    removeFavoritefromList(state, favoriteId) {
      const favIndex = state.favorites.findIndex(
        (fav) => fav.id === favoriteId
      );

      if (favIndex >= 0) {
        state.favorites.splice(favIndex, 1);
        saveToLocalStorage(state.favorites);
      } else {
        console.error('Unknown favorite');
      }
    },
    resetFavoriteList(state) {
      state.favorites = [];
    },
  },
});
