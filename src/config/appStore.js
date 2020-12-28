import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        favorites: [],
    },
    mutations: {
        setFavoriteList(state, newFavorites) {
            if (newFavorites) {
                state.favorites = newFavorites;
            } else {
                console.error('New Favorite list is not valid');
            }
        },    
        addFavoriteToList(state, newFavorite) {
            const favIndex = state.favorites.findIndex(fav => fav.id === newFavorite.id);
            if (favIndex < 0) {
                state.favorites.push(newFavorite);
            }
        },    
        removeFavoritefromList(state, favoriteId) {
            const favIndex = state.favorites.findIndex(fav => fav.id === favoriteId);
    
            if (favIndex >= 0) {
                state.favorites.splice(favIndex, 1);
            } else {
                console.error('Unknown favorite');
            }
        },
        resetFavoriteList(state) {
            state.favorites = [];
        },
    }
})
