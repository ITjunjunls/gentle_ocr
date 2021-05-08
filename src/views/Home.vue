<template>
  <div class="home">
    <image-list ref="imagelist"></image-list>
    <middle :changeScrollByHome="changeScrollByHome"></middle>
    <el-divider direction="vertical"></el-divider>
    <right></right>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageList from "@/views/left/ImageList";
import Middle from "@/views/middle/Middle";
import Right from "@/views/right/Right";
import {ref} from 'vue'


export default {
  name: 'Home',
  components: {
    ImageList,
    Middle,
    Right
  },
  setup() {
    // const changeScrollByHome = ()=>{
    //   console.log('home的changescroll吊用了');
    //   ref.imagelist.changeScroll();
    // }
    return {
      //changeScrollByHome
    }
  },
  methods: {
    changeScrollByHome() {
      this.$refs.imagelist.changeScroll();
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  width: 100vw;
}

.el-divider {
  height: 100vh;
}
</style>
