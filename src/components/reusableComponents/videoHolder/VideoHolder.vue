<template>
  <div class="container media-container">
    <div class="row">
      <div
        class="media-container__video col-md-4 col-6"
        @mouseover="mouseOverVideo"
      >
        <iframe
          :src="singleVideoId"
          frameborder="0"
          allow="accelerometer; autoplay; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <!-- <object :data="singleVideoId" width="100%" height="100%"></object> -->
        <!-- <video controls :src="'http://www.youtube.com/watch?v='+ videoId" type="video/youtube">
        </video>-->
      </div>
      <div class="media-container__details-holder col-md-6 col-5">
        <div class="row">
          <div class="media-container__live-icon" v-if="LiveVideo"></div>
          <div class="media-container__title">{{ videoTitle }}</div>
        </div>
        <div class="row">
          <div class="media-container__validation-icon" v-if="LiveVideo"></div>
          <div class="media-container__subtitle">
            {{ videoSubTitle }}
            <span
              class="fa fa-check-circle media-container__verificaion-icon"
            ></span>
          </div>
          <div class="media-container__viewers">
            <span class="media-container__viewers-number">15</span>
            <span class="media-container__viewers-txt">Views</span>
          </div>
          <div class="media-container__years">
            <span class="media-container__years-number">
              {{ videoPublishedYear }}
            </span>
            <span class="media-container__years-txt">
              {{ yearsAgo }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="media-container__description">{{ videoDescription }}</div>
        </div>
        <div class="row">
          <div class="media-container__hint">[CCS]</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import myVideo from "vue-video";

export default {
  name: "VideoHolder",
  components: {
    // myVideo
  },
  // async created () {

  // },
  data() {
    return {
      LiveVideo: false,
      singleVideoId: `https://www.youtube.com/embed/${this.videoId}`,
      // singleVideoId2: "http://www.youtube.com/watch?v=" + this.videoId
    };
  },
  props: {
    mediaType: {
      type: String,
      default: "video",
    },
    videoTitle: {
      type: String,
      default: "",
    },
    videoSubTitle: {
      type: String,
      default: "",
    },
    videoDescription: {
      type: String,
      default: "",
    },
    videoId: {
      type: String,
      default: "",
    },
    videoDate: {
      type: String,
      default: "",
    },
  },
  methods: {
    mouseOverVideo: function(e) {
      e.target.scrollIntoView({ behavior: "smooth", block: "center" });
    },
  },
  computed: {
    videoPublishedYear: function() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var newDate = new Date();
      const videoPublishYear = this.videoDate.substring(0, 4);
      const videoPublishedMonth = this.videoDate.substring(5, 7);
      var videoYear = newDate.getFullYear() - videoPublishYear;
      // var videoMonth = newDate.getMonth() + 1 - videoPublishedMonth;
      return videoYear == 0 ? monthNames[videoPublishedMonth - 1] : videoYear;
    },
    yearsAgo: function() {
      return typeof this.videoPublishedYear == "string"
        ? `This year`
        : `Years ago`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>