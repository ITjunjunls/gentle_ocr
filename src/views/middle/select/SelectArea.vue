<template>
  <div class="buttons-area">
    <div class="buttons-group">
      <el-button type="primary" @click="firstImage">首页</el-button>
      <el-button type="primary" @click="prevImage">上一页</el-button>
      <el-button type="primary" @click="nextImage">下一页</el-button>
      <el-button type="primary" @click="lastImage">尾页</el-button>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex';

export default {

  name: "SelectArea",
  props: {
    changeScroll: {
      type: Function,
      default: null
    }
  },
  setup(props) {
    const store = useStore();
    //下面四个方法用于通过点击按钮切换照片
    const firstImage = () => {
      store.state.current_image = 0;
      props.changeScroll();
    }

    const lastImage = () => {
      store.state.current_image = store.state.imgdata.length - 1;
      props.changeScroll();
    }

    const prevImage = () => {
      if (store.state.current_image == 0) {
        //TODO 本来想如果是第一页就跳转到最后一页，不过滚动条方法有问题先搁置
        //props.showDialog();
        //alert('这已经是第一张了');
        store.state.current_image = store.state.imgdata.length - 1;
        props.changeScroll();
      } else {
        props.changeScroll();
        store.state.current_image = store.state.current_image - 1;
      }
    }

    const nextImage = () => {
      if (store.state.current_image == store.state.imgdata.length - 1) {
        // alert('这已经是最后一张了');
        store.state.current_image = 0;
        props.changeScroll();
      } else {
        props.changeScroll();
        store.state.current_image = store.state.current_image + 1;
      }
    }

    return {
      firstImage,
      lastImage,
      prevImage,
      nextImage
    }
  }
}
</script>

<style scoped lang="scss">
.buttons-area {

  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.buttons-group {
  width: 60%;
  height: auto;
  display: flex;
  position: relative;
  justify-content: space-around;
}
</style>
