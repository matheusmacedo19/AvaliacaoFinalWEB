import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Usuario from "../components/Usuario.vue";
import Produtos from "../components/Produtos.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/usuario",
    name: "Usuario",
    component: Usuario,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/produtos",
    name: "Produtos",
    component: Produtos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
