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
      darkTheme: false,
      allVideos: [],
      startSearch: false,
      loaderDisplayToogle: false,
      filteredVideos: [],
      customMode: {
        backgroundColor: "",
        color: "",
      },
      dispayUserMenu: false,
    };
  },
  methods: {
    toogle: function() {
      if (this.darkTheme == false) this.darkTheme = true;
      else this.darkTheme = false;
    },
    updateVideos: function(updatedVideos) {
      this.allVideos = updatedVideos;
      this.filteredVideos = updatedVideos;
    },
    // for toggling display of loader component.
    loaderDisplay: function(displayLoader) {
      this.loaderDisplayToogle = displayLoader;
    },
    ddlChosenType: function(type) {
      if (type === "") return (this.filteredVideos = this.allVideos);
      else {
        const selectedVideoType = this.allVideos.filter(
          (vidKind) => vidKind.id.kind === `youtube#${type}`
        );
        selectedVideoType.length !== 0
          ? (this.filteredVideos = selectedVideoType.sort())
          : (this.filteredVideos = this.allVideos);
      }
    },
    ddlChosenDate: function(date) {
      console.log(date);
    },
    dispayingUserMenu: function() {
      this.dispayUserMenu == false
        ? (this.dispayUserMenu = true)
        : (this.dispayUserMenu = false);
    },
  },
};
