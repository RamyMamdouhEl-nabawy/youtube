<template>
  <div>
    <SearchBar
      v-on:searchedVideos="updateVideos($event)"
      v-on:loadingDisplay="loaderDisplay($event)"
    />
    <div class="container">
      <Video-Filter />
      <div v-if="loaderDisplayToogle">
        <Loader loadingText="Loading" size="lg" />
      </div>

      <div v-if="loaderDisplayToogle === false">
        <div v-for="(searchVideo,index) in searchedVideos" :key="index">
          <VideoHolder
            :videoId="searchVideo.id.videoId"
            :videoDescription="searchVideo.snippet.description"
            :videoTitle="searchVideo.snippet.title"
            :videoSubTitle="searchVideo.snippet.channelTitle"
          />
        </div>
        <div v-for="(videosList,index) in allVideos" :key="`nx${index}`">
          <VideoHolder
            v-if="searchedVideos.length === 0"
            :videoId="videosList.id"
            :videoDescription="videosList.snippet.description"
            :videoTitle="videosList.snippet.title"
            :videoSubTitle="videosList.snippet.channelTitle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "../searchBar/SearchBar";
import VideoHolder from "../../reusableComponents/videoHolder/VideoHolder";
import Loader from "../../reusableComponents/loader/Loader";
import Filter from "../../reusableComponents/filter/Filter";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    SearchBar,
    VideoHolder,
    Loader,
    "Video-Filter": Filter
  },
  async created() {
    this.loaderDisplayToogle = true;
    const key = "AIzaSyCRVjARE3jcSUIFn9j_SWblCsDOOrnFU8w";
    const baseURL =
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=" +
      key +
      "&chart=mostPopular&maxResults=5";
    try {
      const result = await axios.get(baseURL);
      if (result.data.items) {
        this.allVideos = result.data.items;
        this.loaderDisplayToogle = false;
      }
    } catch (err) {
      console.error(err);
    }
  },
  updated() {
    this.startSearch = true;
  },
  data() {
    return {
      searchedVideos: [],
      allVideos: [],
      startSearch: false,
      loaderDisplayToogle: false
    };
  },
  methods: {
    updateVideos: function(updatedVideos) {
      this.searchedVideos = updatedVideos;
    },
    // for toggling display of loader component.
    loaderDisplay: function(displayLoader) {
      console.log(displayLoader);
      this.loaderDisplayToogle = displayLoader;
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
