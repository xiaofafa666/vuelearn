import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Detail = () => import('../views/detail/Detail')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)

const routes = [
    {path:'',redirect: '/home'},
    { path: '/Home', component: Home },
    { path: '/category',component:Category},
    { path: '/detail/:iid',component:Detail},
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
]
const router =new VueRouter({
    routes:routes,
    mode:'history',
})
export default router