export default {
    state: {
        favorites: [],
    },
    setFavoriteList(newFavorites) {
        if (newFavorites) {
            this.state.favorites = newFavorites;
        }
        console.error('New Favorite list is not valid');
    },    
    addFavoriteToList(newFavorite) {
        this.state.favorites.push(newFavorite);
    },    
    resetFavoriteList() {
        this.state.favorites = [];
    },
}
