import Vue from 'vue';
import App from './pages/products';

const app = new Vue({
    render: (h) => h(App),
}).$mount('#app');

window.app = app;
