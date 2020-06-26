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

import VueProgressBar from 'vue-progressbar';

import swal from 'sweetalert2';
window.swal = swal;

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

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
    { path: "/Users", component: Users }
];

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});

const app = new Vue({
    router
}).$mount("#app");