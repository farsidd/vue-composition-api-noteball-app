import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNotes from '@/views/ViewEditNotes.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  {
    path: '/note/edit/:id',
    name: 'edit-notes',
    component: ViewEditNotes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router