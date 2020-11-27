// import myVideo from "vue-video";

export default {
  name: "VideoHolder",
  components: {
    // myVideo
  },
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
      var currentDate = new Date();
      const videoPublishYear = this.videoDate.substring(0, 4);
      const videoPublishedMonth = this.videoDate.substring(5, 7);
      const videoPublishedDay = this.videoDate.substring(8, 10);
      //calculating date from video publish date till current date.
      let videoYear = currentDate.getFullYear() - videoPublishYear;
      let videoMonth = monthNames[Number(videoPublishedMonth) - 1];
      let videoDay = currentDate.getDate() - videoPublishedDay;
      //check whether date is at current year to display month and if its at current month it will calculate from publish day till current day.
      let lessThanYear =
        currentDate.getMonth() + 1 == videoPublishedMonth
          ? `${videoDay} Days ago`
          : videoMonth;
      return videoYear == 0 ? lessThanYear : videoYear;
    },
    yearsAgo: function() {
      return typeof this.videoPublishedYear == "string"
        ? `This year`
        : `Years ago`;
    },
  },
};
