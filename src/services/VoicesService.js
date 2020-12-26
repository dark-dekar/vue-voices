import voidesData from '../resources/data/voices.json';

class VoicesService {
    getAllVoices() {
        return voidesData;
    }
}

export default {
    install(Vue) {
        Vue.prototype.$voicesService = new VoicesService()
    }
};