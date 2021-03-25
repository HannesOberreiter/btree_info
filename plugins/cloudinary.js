import Vue from "vue";
import Cloudinary from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "btreecloud",
    secure: true,
  },
});
