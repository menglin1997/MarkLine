/*
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-05-29 15:14:54
 * @LastEditors: zml
 * @LastEditTime: 2020-05-29 17:20:58
 */ 
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
