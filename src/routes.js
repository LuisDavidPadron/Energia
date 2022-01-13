import { createWebHistory, createRouter } from 'vue-router'
import Capitulo3 from "@/pages/Capitulo3.vue"
import Capitulo4 from "@/pages/Capitulo4.vue"
import Capitulo1 from "@/pages/Capitulo1.vue"
import Capitulo2 from "@/pages/Capitulo2.vue"
import AcercaDe from "@/pages/AcercaDe.vue"
import Inicio from "@/pages/Inicio.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Inicio,
  },
  {
    path: "/capitulo3",
    name: "Capitulo 3",
    component: Capitulo3,
  },
  {
    path: "/capitulo2",
    name: "Capitulo 2",
    component: Capitulo2,
  },
  {
    path: "/capitulo1",
    name: "Capitulo 1",
    component: Capitulo1,
  },
  {
    path: "/capitulo4",
    name: "Capitulo 4",
    component: Capitulo4,
  },
  {
    path: "/acerca-de",
    name: "acerca de",
    component: AcercaDe,
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      setTimeout(function() {document.querySelector(to.hash).scrollIntoView({ behavior: 'auto' });}, 100);
      return {
        selector: to.hash,
        behavior: 'auto',
      }
    }
  }
});

export default router;