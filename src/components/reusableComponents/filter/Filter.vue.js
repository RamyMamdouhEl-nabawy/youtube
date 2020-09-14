export default {
  name: "video-Filter",
  data() {
    return {
      videosType: [],
      videosUploadDate: [],
      selectedType: "",
      selectedDate: "",
    };
  },
  props: {
    videoType: {
      type: Array,
      default: function() {
        return [
          { key: "all", val: "video" },
          { key: "channel", val: "channel" },
          { key: "playlist", val: "playlist" },
        ];
      },
    },
    videoUploadDate: {
      type: Array,
      default: function() {
        return [
          { key: "today", val: "today" },
          { key: "this week", val: "this week" },
          { key: "this month", val: "this month" },
        ];
      },
    },
  },
  created() {
    this.videosType = this.videoType;
    this.videosUploadDate = this.videoUploadDate;
  },
  methods: {
    chosenType: function() {
      this.$emit("chosenType", this.selectedType);
    },
    chosenDate: function() {
      this.$emit("chosenDate", this.selectedDate);
    },
  },
};
