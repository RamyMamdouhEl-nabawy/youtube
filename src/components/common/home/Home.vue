<template>
  <div>
    <SearchBar v-on:searchedVideos="updateVideos($event)" />
    <div class="container">
      <Loader
        v-on:loadingDisplay="loaderDisplay($event)"
        v-if="loaderDisplayToogle"
        loadingText="Loading..."
        size="lg"
      />
      <div v-for="(searchVideo,index) in searchedVideos" :key="index">
        <VideoHolder
          :videoId="searchVideo.id.videoId"
          :videoDescription="searchVideo.snippet.description"
          :videoTitle="searchVideo.snippet.title"
        />
      </div>
      <div v-for="(videosList,index) in allVideos" :key="index">
        <VideoHolder
          :videoId="videosList.id.videoId"
          :videoDescription="videosList.snippet.description"
          :videoTitle="videosList.snippet.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "../searchBar/SearchBar";
import VideoHolder from "../../reusableComponents/videoHolder/VideoHolder";
import Loader from "../../reusableComponents/loader/Loader";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    SearchBar,
    VideoHolder,
    Loader
  },
  async created() {
    const key = "AIzaSyCRVjARE3jcSUIFn9j_SWblCsDOOrnFU8w";
    const baseURL =
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=" +
      key +
      "&chart=mostPopular&maxResults=5";
    try {
      const result = await axios.get(baseURL);
      if (result.data.items) {
        this.allVideos = result.data.items;
      }
    } catch (err) {
      console.error(err);
    }
  },
  data() {
    return {
      searchedVideos: [],
      allVideos: [],
      loaderDisplayToogle: false
    };
  },
  methods: {
    updateVideos: function(updatedVideos) {
      this.searchedVideos = updatedVideos;
    },
    loaderDisplay: function(display) {
      console.log(display);
      this.loaderDisplayToogle = display;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style.scss";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
