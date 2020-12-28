import voicesData from "../resources/data/voices.json";

class VoicesService {
  getAllVoices() {
    voicesData.forEach((voice) => {
      voice.isFavorite = false;
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
    voicesData.forEach((fav) => {
      fav.isFavorite = ids.includes(fav.id);
    });
    return voicesData;
  }
}

export default {
  install(Vue) {
    Vue.prototype.$voicesService = new VoicesService();
  },
};
