import Board from '@/views/Board.vue'
import User from '@/views/User.vue'
import Post from '@/views/Post.vue'
import Write from '@/views/Write.vue'
import Settings from '@/views/Settings.vue'
import Home from '@/views/Home.vue'
import { authGuard } from './auth.js'

export default [
  {
    path: '/board/:boardId?',
    name: 'board',
    component: Board,
    props: true,
    beforeEnter: authGuard
  },
  {
    path: '/user/:username',
    name: 'user',
    component: User,
    props: true,
    beforeEnter: authGuard
  },
  {
    path: '/post/:postId',
    name: 'post',
    component: Post,
    props: true,
    beforeEnter: authGuard
  },
  {
    path: '/write/:postId?',
    name: 'write',
    component: Write,
    props: true,
    beforeEnter: authGuard
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    beforeEnter: authGuard
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: authGuard
  }
]
