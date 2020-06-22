<template>
  <div class="container media-container">
    <div class="row">
      <div class="media-container__video col-md-4 col-5">
        <!-- <video src="https://youtu.be/iqmO1RlqorU" width="1499" height="568"></video> -->
        <iframe
          src="https://www.youtube.com/embed/iqmO1RlqorU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="media-container__details-holder col-6">
        <div class="row">
          <div class="media-container__live-icon" v-if="LiveVideo"></div>
          <div class="media-container__title">Ramy Mamdouh El-Nabawy</div>
        </div>
        <div class="row">
          <div class="media-container__validation-icon" v-if="LiveVideo"></div>
          <div class="media-container__subtitle">
            R.M
            <span class="fa fa-check-circle media-container__verificaion-icon"></span>
          </div>
          <div class="media-container__viewers">
            <span class="media-container__veiwers-number">15</span>
            <span class="media-container__veiwers-txt">Views</span>
          </div>
          <div class="media-container__years">
            <span class="media-container__years-number">2</span>
            <span class="media-container__years-txt">years ago</span>
          </div>
        </div>
        <div class="row">
          <div
            class="media-container__description"
          >hello its me ramy mamdouh and this is my first Vue app</div>
        </div>
        <div class="row">
          <div class="media-container__hint">[CCS]</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoHolder",
  // async created () {

  // },
  data() {
    return {
      LiveVideo: false
    };
  },
  props: {
    mediaType: {
      type: String,
      default: "video"
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>