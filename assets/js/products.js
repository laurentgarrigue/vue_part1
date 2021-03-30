import Vue from 'vue';

const template = ` <h1>
                Hello {{ firstName }} !
            </h1>`;

const app = new Vue({
    el: '#app',
    data() {
        return {
            firstName: 'Ryan',
        };
    },
    template: template,
});

window.app = app;
