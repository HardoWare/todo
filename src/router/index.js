import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: 'Home | Todo'
      },
      component: HomeView,
      props: true,
    },
    {
      path: '/list/:id',
      name: 'List',
        meta: {
            title: 'List | Todo'
        },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EditView.vue'),
      props: true
    },
    {
      path: '/new',
      name: 'New',
      meta: {
          title: 'New | Todo'
      },
      component: () => import('../views/NewListView.vue'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
