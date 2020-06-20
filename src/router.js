import Vue from "vue";
import Router from "vue-router";
import Home from "./components/common/home/Home";

Vue.use(Router);
export default new Router({
  router: [{ path: "/", name: "home", component: Home }]
});
