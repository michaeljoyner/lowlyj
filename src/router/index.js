import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Posts from '@/components/Posts'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/running',
      name: 'Running',
      component: Posts,
      props: {category: 'running'}
    },
    {
      path: '/banting',
      name: 'Banting',
      component: Posts,
      props: {category: 'Banting'}
    },
    {
      path: '/photography',
      name: 'Photography',
      component: Posts,
      props: {category: 'photography'}
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  }
})
