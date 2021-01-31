<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-view />
    </nav>-->
    <div class="utube-body">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./components/common/home/Home";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import "./Colors.scss";
@import "./CommonStyles.scss";

.utube-body {
  margin-top: 4.25rem;
  @media screen and (min-width: 992px) {
    margin: 0;
  }
}

#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkgrey;
  @media screen and (min-width: 992px) {
    background-color: $page-background;
  }
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // color: #2c3e50;
}
</style>
