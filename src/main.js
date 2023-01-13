import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

store.subscribe((mutation, state) => {

    // Store the state object as a JSON string
    localStorage.setItem('store', JSON.stringify(state));
});