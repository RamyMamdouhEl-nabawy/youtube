<script>
import axios from "axios";

export default {
  methods: {
    //get Data from API.
    async getData(url) {
      try {
        const result = await axios.get(url);
        return result.data;
      } catch (err) {
        console.error(err);
      }
    },
    //posting data through API.
    async postReq(url, reqObj) {
      try {
        const result = await axios.post(url, reqObj);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>