import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{

		path: '/home',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
		children: [{
				path: '/android',
				name: 'android',
				component: () => import('@/views/Android.vue')
			},
			{
				path: '/ios',
				name: 'ios',
				component: () => import('@/views/iOS.vue')
			},
			{
				path: '/web',
				name: 'web',
				component: () => import('@/views/Web.vue')
			},
			{
				path: '/data',
				name: 'data',
				component: () => import('@/views/Data.vue')
			},
			{
				path: '/server',
				name: 'server',
				component: () => import('@/views/Server.vue')
			},
			{
				path: '/details',
				name: 'details',
				component: ()=> import('@/views/Details.vue')
			}
			

		]

	},
	{
		path: '/',
		redirect: '/android'
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
