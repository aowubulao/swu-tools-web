import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home')
const Grades = () => import('../views/Grades')
const Courses = () => import('../views/Courses')
const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: '首页 | 西南大学助手' } },
  { path: '/grades', name: 'grades', component: Grades, meta: { title: '成绩查询 | 西南大学助手' } },
  { path: '/courses', name: 'courses', component: Courses, meta: { title: '课表查询 | 西南大学助手' } },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
