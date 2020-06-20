<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-view />
    </nav>-->
    <SearchBar />
    <img alt="Vue logo" src="./assets/logo.png" />
    <Home />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import SearchBar from "./components/common/searchBar/SearchBar";
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/common/home/Home";

export default {
  name: "App",
  components: {
    SearchBar,
    HelloWorld,
    Home
  }
};
</script>

<style lang="scss">
@import './Colors.scss';
@import './CommonStyles.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $page-background;
  /* margin-top: 60px; */
}
</style>
