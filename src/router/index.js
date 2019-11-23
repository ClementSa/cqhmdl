import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/Index.vue";
import Company from "../views/Company";
import News from "../views/News";
import Product from "../views/Product";
import Advert from "../views/Advert";
import Case from "../views/Case";
import About from "../views/About";
import Culture from "../views/Culture";
import MsgBoard from "../components/MsgBoard";
import Map from "../components/Map";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Index", component: Index },
  { path: "/company", name: "company", component: Company },
  { path: "/news", name: "news", component: News },
  { path: "/advert", name: "advert", component: Advert },
  { path: "/product", name: "product", component: Product },
  { path: "/case", name: "case", component: Case },
  {
    path: "/about",
    name: "about",
    component: About,
    children: [
      {
        path: "msgboard",
        name: "msgboard",
        component: MsgBoard
      },
      {
        path: "map",
        name: "map",
        component: Map
      }
    ]
  },
  { path: "/culture", name: "culture", component: Culture }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
