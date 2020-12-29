import voicesData from '../resources/data/voices.json';

class VoicesService {
  getAllVoices(favorites) {
    const ids = (favorites || []).map((fav) => fav.id);
    voicesData.forEach((voice) => {
      voice.isFavorite = ids.includes(voice.id);
    });
    return voicesData;
  }
  getFilteredList(favorites, searchTerm) {
    if (searchTerm) {
      return voicesData.filter((fav) =>
        fav.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    const ids = favorites.map((fav) => fav.id);
    voicesData.forEach((voice) => {
      voice.isFavorite = ids.includes(voice.id);
    });
    return voicesData;
  }
  getAllCategories() {
    const categories = [];
    voicesData.forEach((voice) => categories.push(...voice.tags));
    return [...new Set(categories)];
  }
}

export default {
  install(Vue) {
    Vue.prototype.$voicesService = new VoicesService();
  },
};
