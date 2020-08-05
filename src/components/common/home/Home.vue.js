import axios from "axios";
import SearchBar from "../searchBar/SearchBar.vue";
import VideoHolder from "../../reusableComponents/videoHolder/VideoHolder";
import Loader from "../../reusableComponents/loader/Loader";
import filter from "../../reusableComponents/filter/Filter";

const key = "AIzaSyCRVjARE3jcSUIFn9j_SWblCsDOOrnFU8w";

export default {
  props: {
    msg: String,
  },
  components: {
    SearchBar,
    VideoHolder,
    Loader,
    "Video-Filter": filter,
  },
  async created() {
    this.loaderDisplayToogle = true;
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
      allVideos: [],
      startSearch: false,
      loaderDisplayToogle: false,
      filteredVideos: [],
    };
  },
  methods: {
    updateVideos: function(updatedVideos) {
      this.allVideos = updatedVideos;
    },
    // for toggling display of loader component.
    loaderDisplay: function(displayLoader) {
      this.loaderDisplayToogle = displayLoader;
    },
    ddlChosenType: function(type) {
      this.filteredVideos = this.allVideos;
      const selectedVideoType = this.allVideos.filter(function(vidKind) {
        return vidKind.id.kind === `youtube#${type}`;
      });
      this.filteredVideos = selectedVideoType.sort();
    },
    ddlChosenDate: function(date) {
      console.log(date);
    },
  },
};
