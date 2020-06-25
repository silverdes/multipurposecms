/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Users from "./components/Users";

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