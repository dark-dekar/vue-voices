import voicesData from '../resources/data/voices.json';

class VoicesService {
    getAllVoices() {
        voicesData.forEach(fav => {
            fav.isFavorite = false;
        });
        return voicesData;
    }
}

export default {
    install(Vue) {
        Vue.prototype.$voicesService = new VoicesService()
    }
};