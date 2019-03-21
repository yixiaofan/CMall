import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import List from '@/pages/list'
import ShoppingBasket from '@/pages/shoppingBasket'
import User from '@/pages/user'
import Search from '@/pages/search'
import Goods from '@/pages/goods'
import Buy from '@/pages/buy'
import Admin from '@/pages/admin'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:"/admin",
  		name:"Admin",
  		component:Admin
  	},
  	{
  		path:"/search",
  		name:"Search",
  		component:Search
  	},
  	{
  		path:"/buy",
  		name:"Buy",
  		component:Buy
  	},
  	{
  		path:"/goods",
  		name:"Goods",
  		component:Goods
  	},
    {
      path: '/',
      name: 'Index',
      redirect:"/home",
      component: Index,
      children:[
      	{
      		path: 'home',
      		component: Home
      	},
      	{
      		path: 'list',
      		component: List
      	},
      	{
      		path: 'shoppingBasket',
      		component: ShoppingBasket
      	},
      	{
      		path: 'user',
      		component: User
      	}
      ]
    }
  ]
})
