import VueRouter from 'vue-router';

// TODO: extract when components get large
const routes = [
  {
    path: '/',
    component: () => import('./modules/contacts/views/ContactList.vue'),
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
