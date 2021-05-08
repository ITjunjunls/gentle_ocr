<template>
  <div class="image-view">
    <img :src="$store.state.imgdata[$store.state.current_image].url" alt="">
  </div>
</template>

<script>
export default {
  name: "ImageView",

}
</script>

<style scoped lang="scss">
.image-view {
  margin-top: 3%;
  width: 100%;
  height: 80vh;
  display: table-cell;
  text-align: center;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
