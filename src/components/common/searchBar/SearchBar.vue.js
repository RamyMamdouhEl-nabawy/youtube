import axios from "axios";

export default {
  name: "SearchBar",
  searchBox: "",
  data() {
    return {
      searchBox: this.searchBox,
      displaySearch: false,
      loading: false,
      videos: [],
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
      this.$emit("loadingDisplay", this.loading);

      try {
        const result = await axios.get(baseURL);
        if (result.data.items) {
          this.videos = result.data.items;
          this.$emit("searchedVideos", result.data.items);
          this.loading = false;
        }
      } catch (err) {
        console.error(err);
      }
      this.$emit("loadingDisplay", this.loading);
    },
  },
};
