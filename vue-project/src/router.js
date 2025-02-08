import Blog from "./Blog.vue";
import Contact from "./Contact.vue";
import HomePage from "./HomePage.vue";

export const routes = [
  {path: '/', component: HomePage},
  {path: '/blog', component: Blog},
  {path: '/contact', component:  Contact},
]
