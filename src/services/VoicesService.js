import voicesData from '../resources/data/voices.json';

class VoicesService {
  getAllVoices(favorites) {
    const ids = (favorites || []).map((fav) => fav.id);
    voicesData.forEach((voice) => {
      voice.isFavorite = ids.includes(voice.id);
    });
    return voicesData;
  }

  getFilteredList(favorites, searchTerm, category, sort) {
    const ids = favorites.map((fav) => fav.id);
    let voices = voicesData;
    if (category) {
      voices = voices.filter((voice) => voice.tags.includes(category));
    }
    if (searchTerm) {
      voices = voices.filter((voice) =>
        voice.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sort) {
      voices = this._sortVoices(voices);
      if (sort === 'desc') {
        voices.reverse();
      }
    }
    voices.forEach((voice) => {
      voice.isFavorite = ids.includes(voice.id);
    });
    return voices;
  }

  getAllCategories() {
    const categories = [];
    voicesData.forEach((voice) => categories.push(...voice.tags));
    return [...new Set(categories)];
  }

  getFavoriteVoices(favoriteIds) {
    const filteredList = voicesData.filter((voice) =>
      favoriteIds.includes(voice.id)
    );
    filteredList.forEach((voice) => {
      voice.isFavorite = true;
    });
    return filteredList;
  }

  _sortVoices(voices) {
    return voices.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
}

export default {
  install(Vue) {
    Vue.prototype.$voicesService = new VoicesService();
  },
};
