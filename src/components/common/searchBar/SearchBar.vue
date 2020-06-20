<template>
  <div class="header-container">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-2">
          <img src="../../../assets/youtube-logo-png.jpg" class="header-container__logo" />
          <div class="header-container__title">YouTube</div>
          <span class="header-container__country">EG</span>
        </div>
        <div class="col-md-7 col-10">
          <div class="row">
            <div
              class="header-container__search-box col-10"
              v-bind:class="[displaySearch ? '': 'header-container__search-box--Visibility']"
            >
              <input type="text" class v-model="searchBox" />
              <span class="fa fa-times clear-search" v-on:click="clearSearch" />
            </div>
            <div class="header-container__search-icon col-2">
              <i class="fa fa-search" v-on:click="DisplaySeachBox"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  searchBox: "",
  name: "SearchBar",
  data() {
    return {
      searchBox: this.searchBox,
      displaySearch: false
    };
  },
  methods: {
    DisplaySeachBox() {
      var searchValue = this.displaySearch;
      if (!searchValue) {
        this.displaySearch = true;
      } else {
        this.displaySearch = false;
      }
    },
    clearSearch() {
      this.searchBox = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../CommonStyles.scss";
@import "../../../Colors.scss";

.header-container {
  background-color: red;
  padding: 1.25rem;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  &__logo {
    display: inline-block;
    width: 2.25rem;
    height: auto;
  }

  &__title {
    display: none;

    @media screen and (min-width: 992px) {
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
    }
  }

  &__country {
    display: none;
    padding-left: 0.25rem;
    vertical-align: top;
    color: #888;
    font-size: 10px;

    @media screen and (min-width: 992px) {
      display: inline-block;
    }
  }

  &__search-box {
    padding: 0;
    border: 1px solid $greycolor;
    background-color: #fff;

    &--Visibility {
      visibility: hidden;
      @media screen and (min-width: 992px) {
        visibility: initial;
      }
    }

    &:focus {
      border-color: blue;
    }

    input[type="text"] {
      width: 90%;
      border: none;
    }

    input[type="text"]:focus {
      outline: none;
    }
  }

  &__search-icon {
    color: #fff;
    font-size: 1rem;
    justify-content: center;
    display: flex;
    align-items: center;

    @media screen and (min-width: 992px) {
      color: #999;
      background-color: $greycolor;
    }
  }

  @media screen and (min-width: 992px) {
    position: relative;
    background-color: #fff;

    .clear-search {
      display: none;
    }
  }
}
</style>