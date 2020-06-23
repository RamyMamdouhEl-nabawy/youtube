<template>
  <div class="header-container">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-2">
          <img src="../../../assets/youtube-logo-png.jpg" class="header-container__logo" />
          <div class="header-container__title">YouTube</div>
          <span class="header-container__country">EG</span>
        </div>
        <div class="col-md-7 col-10">
          <div class="row">
            <div
              class="header-container__search-box col-10"
              v-bind:class="[displaySearch ? '' : 'header-container__search-box--Visibility']"
            >
              <input type="text" class v-model="searchBox" @keyup.enter="getVideos" />
              <span class="fa fa-times clear-search" v-on:click="clearSearch" />
            </div>
            <div class="header-container__search-icon col-2">
              <i class="fa fa-search" v-on:click="DisplaySeachBox"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  searchBox: "",
  name: "SearchBar",
  beforeMount() {
    this.$emit("loadingDisplay", this.loading);
  },
  components: {},
  data() {
    return {
      searchBox: this.searchBox,
      displaySearch: false,
      loading: false,
      videos: []
    };
  },
  methods: {
    // Toggelig SearchBox in mobile screens.
    DisplaySeachBox() {
      var searchValue = this.displaySearch;
      if (!searchValue) {
        this.displaySearch = true;
      } else {
        this.displaySearch = false;
      }
    },
    // Clearing search from data.
    clearSearch() {
      this.searchBox = "";
    },
    // Retreive videos from youtube through search.
    async getVideos() {
      // AIzaSyCUm8G7j9BcQ0BFZquGUUL4Xx7oWTe2lMk
      // AIzaSyBsLJZkpHP_2SjuoHx3gX198O9yHyFKD_M
      const key = "AIzaSyCRVjARE3jcSUIFn9j_SWblCsDOOrnFU8w";
      const baseURL =
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=" +
        this.searchBox +
        "&key=" +
        key;
      this.loading = true;
      try {
        const result = await axios.get(baseURL);
        if (result.data.items) {
          this.videos = result.data.items;
          this.loading = false;
          this.$emit("searchedVideos", result.data.items);
        }
      } catch (err) {
        console.error(err);
      }

      this.$emit("loadingDisplay", this.loading);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>