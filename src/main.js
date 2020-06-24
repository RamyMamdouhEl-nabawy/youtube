import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  Router,
  render: h => h(App)
}).$mount("#app");
