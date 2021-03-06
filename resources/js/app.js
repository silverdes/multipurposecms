/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from 'vue';
import moment from 'moment';

window.Vue = require("vue");
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

window.Form = Form;

import VueRouter from "vue-router";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Users from "./components/Users";
import Developer from "./components/Developer";

import VueProgressBar from 'vue-progressbar';

import swal from 'sweetalert2';

window.swal = swal;


window.fire = new Vue();

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
});

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.filter('upText', function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('myDate', function(date) {
    return moment(date).format('MMMM Do YYYY')
});
Vue.use(VueRouter);

const routes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/profile", component: Profile },
    { path: "/Users", component: Users },
    { path: "/developer", component: Developer }
];

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});
window.toast = toast;

const app = new Vue({
    router
}).$mount("#app");