<template>
  <CldImage
    :publicId="`${url}`"
    :alt="`${alt}`"
    :class="`${custom}`"
    dpr="auto"
    responsive="width"
    width="auto"
    quality="auto"
    fetchFormat="auto"
    crop="scale"
    responsive_placeholder="blank"
    loading="”lazy”"
  >
    <cld-placeholder 
    type="pixelate">
  </cld-placeholder>
  </CldImage>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "sample",
    },
    alt: {
      type: String,
      default: "",
    },
    custom: {
      type: String,
      default: "",
    },
  },
};
</script>