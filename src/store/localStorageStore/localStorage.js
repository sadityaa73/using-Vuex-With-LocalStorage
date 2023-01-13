import { version } from '/Users/adityasingh/Desktop/miniprojects/localStorageWithVuex/loaclstoragewithvuex/package.json';
export default {
    state: {
        version: "",
        formData: []
    },
    getters: {
        gettingFormData(state) {
            return state.fromData;
        }
    },
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('store')) {
                let store = JSON.parse(localStorage.getItem('store'));

                // Check the version stored against current. If different, don't
                // load the cached version
                if (store.version == version) {
                    this.replaceState(
                        Object.assign(state, store)
                    );
                } else {
                    state.version = version;
                }
            }
        },
        setUpdatedData(state, payload) {
            state.formData.push(payload);
        }
    },
    actions: {
        getUpdatedData(context, payload) {
            context.commit("setUpdatedData", payload)
        }
    }
}