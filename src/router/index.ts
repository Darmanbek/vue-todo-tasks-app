import { createRouter, createWebHistory } from "vue-router"
import { HomeView, NotFoundView } from "../views"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			// component: HomeView
			component: HomeView
		},
		{
			path: "/:filter",
			name: "filter",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: HomeView
		},
		{
			path: "/:pathMatch(.*)",
			name: "not-found",
			component: NotFoundView
		}
	]
})

export default router
