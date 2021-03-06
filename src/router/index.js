import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Plants from '../views/Plants.vue';
import Player from '../views/Player.vue';
import Garden from '../views/Garden.vue';
import Shop from '../views/Shop.vue';
import Settings from '../views/Settings.vue';
import Statistics from '../views/Statistics.vue';
import Achievements from '../views/Achievements.vue';
import WateringCans from '../views/WateringCans.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plants',
    name: 'Plants',
    component: Plants,
  },
  {
    path: '/player',
    name: 'player',
    component: Player,
  },
  {
    path: '/garden',
    name: 'garden',
    component: Garden,
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/watering-cans',
    name: 'watering-cans',
    component: WateringCans,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics,
  },
  {
    path: '/achievements',
    name: 'achievements',
    component: Achievements,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
