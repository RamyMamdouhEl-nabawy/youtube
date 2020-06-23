<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-view />
    </nav>-->

    <div class="utube-body">
      <Home />
      <!--<Loader loadingText="Loading..." size="md"/>
      <img alt="Vue logo" src="./assets/logo.png" />-->
    </div>
  </div>
</template>

<script>
import Home from "./components/common/home/Home";

export default {
  name: "App",
  components: {
    Home
    // HelloWorld,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @media screen and (min-width: 992px) {
    background-color: $page-background;
  }
  /* margin-top: 60px; */
}
</style>
