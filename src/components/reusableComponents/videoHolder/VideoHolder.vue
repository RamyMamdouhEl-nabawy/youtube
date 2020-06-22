<template>
  <div class="container media-container">
    <div class="row">
      <div class="media-container__video col-md-4 col-6">
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
          <div class="media-container__title">{{videoTitle}}</div>
        </div>
        <div class="row">
          <div class="media-container__validation-icon" v-if="LiveVideo"></div>
          <div class="media-container__subtitle">
            R.M
            <span class="fa fa-check-circle media-container__verificaion-icon"></span>
          </div>
          <div class="media-container__viewers">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> updating class viewers.
            <span class="media-container__viewers-number">15</span>
            <span class="media-container__viewers-txt">Views</span>
          </div>
          <div class="media-container__years">
            <span class="media-container__years-number">2</span>
            <span class="media-container__years-txt">years ago</span>
          </div>
        </div>
        <div class="row">
          <div class="media-container__description">{{videoDescription}}</div>
=======
            <span class="media-container__veiwers-number">15</span>
            <span class="media-container__veiwers-txt">Views</span>
          </div>
          <div class="media-container__years">
            <span class="media-container__veiwers-number">2</span>
            <span class="media-container__veiwers-txt">years ago</span>
          </div>
        </div>
        <div class="row">
          <div
            class="media-container__description"
          >hello its me ramy mamdouh and this is my first Vue app</div>
>>>>>>> ftr-videoHolder
        </div>
        <div class="row">
          <div class="media-container__hint">[CCS]</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
// import myVideo from "vue-video";

export default {
  name: "VideoHolder",
  components: {
    // myVideo
  },
=======
export default {
  name: "VideoHolder",
>>>>>>> ftr-videoHolder
  // async created () {

  // },
  data() {
    return {
<<<<<<< HEAD
      LiveVideo: false,
      singleVideoId: "https://www.youtube.com/embed/" + this.videoId,
      singleVideoId2: "http://www.youtube.com/watch?v=" + this.videoId
=======
      LiveVideo: true
>>>>>>> ftr-videoHolder
    };
  },
  props: {
    mediaType: {
      type: String,
      default: "video"
<<<<<<< HEAD
    },
    videoTitle: {
      type: String,
      default: ""
    },
    videoDescription: {
      type: String,
      default: ""
    },
    videoId: {
      type: String,
      default: ""
=======
>>>>>>> ftr-videoHolder
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>