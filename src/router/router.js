import { Router } from "@vaadin/router";

const oulet = document.getElementById("app");

const router = new Router(oulet);

router.setRoutes([
  {
    path: "/",
    component: "home-page",
  },
  {
    path: "/gallery",
    component: "galeria-imagenes",
  },
  {
    path: "/direction",
    component: "direction-page",
  },
  {
    path: "/blog",
    component: "blog-page",
  },
  {
    path: "/contacto",
    component: "contacto-page",
  },
  {
    path: "/adopcion",
    component: "adopcion-page",
  },
  {
    path: "(.*)",
    redirect: "/",
  },
]);

export { router };
