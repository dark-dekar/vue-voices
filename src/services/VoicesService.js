import voicesData from '../resources/data/voices.json';

class VoicesService {
  getAllVoices(favorites) {
    const ids = (favorites || []).map((fav) => fav.id);
    voicesData.forEach((voice) => {
      voice.isFavorite = ids.includes(voice.id);
    });
    return voicesData;
  }
  getFilteredList(favorites, searchTerm, category) {
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
}

export default {
  install(Vue) {
    Vue.prototype.$voicesService = new VoicesService();
  },
};
