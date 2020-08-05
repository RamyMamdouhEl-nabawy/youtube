export default {
  name: "Loader",
  data() {
    return {
      withText: false,
    };
  },
  props: {
    loadingText: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "sm",
    },
  },
};
