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
import Order from '@/pages/order'
import Center from '@/pages/center'
import RateWrite from '@/pages/centerPages/ratewrite'
import Trade from '@/pages/centerPages/trade'
import Personal from '@/pages/centerPages/personal'
import Saveinfo from '@/pages/centerPages/saveinfo'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:"/order",
  		name:"Order",
  		meta: {
	      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
  		component:Order
  	},
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
  		meta: {
	      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
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
      		meta: {
			      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
			    },
      		component: ShoppingBasket
      	},
      	{
      		path:"/center",
		  		name:"Center",
		  		component:Center,
		  		meta: {
			      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
			    },
		  		redirect:"/center/user",
		  		children:[
		      	{
		      		path: 'user',
		      		meta: {
					      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					    },
      				component: User
		      	},
		      	{
		      		path:"ratewrite",
				  		name:"RateWrite",
				  		meta: {
					      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					    },
				  		component:RateWrite
		      	},
		      	{
		      		path:"trade",
				  		name:"Trade",
				  		meta: {
					      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					    },
				  		component:Trade
		      	},
		      	{
		      		path:"personal/index",
				  		name:"Personal",
				  		meta: {
					      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					    },
				  		component:Personal
		      	},
		      	{
		      		path:"personal/saveinfo",
				  		name:"Saveinfo",
				  		meta: {
					      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
					    },
				  		component:Saveinfo
		      	}
      		]
      	}
      ]
    }
  ]
})
