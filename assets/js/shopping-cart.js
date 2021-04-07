import Vue from 'vue';
import App from '@/pages/shopping-cart';

const app = new Vue({
    render: (h) => h(App),
}).$mount('#app');

window.app = app;
