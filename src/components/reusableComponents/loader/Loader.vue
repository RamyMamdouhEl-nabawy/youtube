<template>
  <div class="loader-container" v-bind:class=" 'loader-container--' + size">
    <div class="loader-container__icon fa fa-spinner fa-spin" role="status"></div>
    <div
      class="loader-conatiner__text"
      v-bind:class="loadingText.length > 0 ?  '' : 'loader-container__text--hidden'"
    >{{loadingText}}</div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      withText: false
    };
  },
  props: {
    loadingText: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "sm"
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>