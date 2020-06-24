<template>
  <div class="filter-container">
    <b-dropdown id="dropdown-1" text="Type" class="m-md-2 filter-container__DDL">
      <b-dropdown-item v-for="(type,index) in videosType" :key="index">{{type.val}}</b-dropdown-item>
    </b-dropdown>

    <b-dropdown id="dropdown-2" text="Upload Date" class="m-md-2 filter-container__DDL">
      <b-dropdown-item v-for="(videoDate,index) in videosUploadDate" :key="index">{{videoDate.val}}</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      videosType: [],
      videosUploadDate: [],
      selectedType: "",
      selectedDate: ""
    };
  },
  props: {
    videoType: {
      type: Array,
      default: function() {
        return [
          { key: "all", val: "all" },
          { key: "channel", val: "channel" },
          { key: "playlist", val: "playlist" }
        ];
      }
    },
    videoUploadDate: {
      type: Array,
      default: function() {
        return [
          { key: "today", val: "today" },
          { key: "this week", val: "this week" },
          { key: "this month", val: "this month" }
        ];
      }
    }
  },
  created() {
    this.videosType = this.videoType;
    this.videosUploadDate = this.videoUploadDate;
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>