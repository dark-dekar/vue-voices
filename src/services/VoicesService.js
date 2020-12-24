import voidesData from '../resources/data/voices.json';

class VoicesService {
    getAllVoices() {
        return voidesData;
    }
}

export default {
    install(Vue, options) {
        console.info(Vue);
        console.info(options);
        Vue.prototype.$voicesService = new VoicesService()
    }
};