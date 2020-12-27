import voicesData from '../resources/data/voices.json';

class VoicesService {
    getAllVoices() {
        return voicesData;
    }
}

export default {
    install(Vue) {
        Vue.prototype.$voicesService = new VoicesService()
    }
};