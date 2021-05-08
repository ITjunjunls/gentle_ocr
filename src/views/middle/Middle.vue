<template>
  <div class="middle">
    <image-view></image-view>
    <el-divider direction="horizontal"></el-divider>
    <select-area :changeScroll="changeScroll"></select-area>
    <!--    <select-area :showDialog="showDialog"></select-area>-->
    <!--    <el-dialog-->
    <!--        title="提示"-->
    <!--        v-model="dialogVisible"-->
    <!--        width="30%"-->
    <!--        :before-close="handleClose">-->
    <!--      <span>已经是第一张了</span>-->
    <!--      <template #footer>-->
    <!--        <span class="dialog-footer">-->
    <!--          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
    <!--        </span>-->
    <!--      </template>-->
    <!--    </el-dialog>-->
  </div>
</template>

<script>
import SelectArea from "@/views/middle/select/SelectArea";
import ImageView from "@/views/middle/imageview/ImageView";

export default {
  name: "Middle",
  // data() {
  //   return {
  //     dialogVisible: false
  //   };
  // },
  // methods: {
  //   showDialog() {
  //     this.dialogVisible = true;
  //
  //   },
  //   handleClose(done) {
  //     this.$confirm('已经是第一张了')
  //         .then(_ => {
  //           done();
  //           this.dialogVisible = false;
  //         })
  //         .catch(_ => {
  //         });
  //   }
  // },
  components: {
    SelectArea,
    ImageView,
  },
  props: {
    changeScrollByHome: {
      type: Function,
      default: null
    }
  },
  setup(props) {
    const changeScroll = () => {
      props.changeScrollByHome();
    }
    return {
      changeScroll
    }
  }
}
</script>

<style scoped lang="scss">
.middle {
  height: 100vh;
  display: flex;
  width: 70vw;
  flex-direction: column;
  flex-wrap: nowrap;
}
</style>
