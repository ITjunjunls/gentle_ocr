<template>
  <div id="right">
    <div class="buttons-area">
      <el-button type="primary" @click="rotateLeft">左旋转</el-button>
      <el-button type="primary" @click="rotateRight">右旋转</el-button>
    </div>
    <div class="buttons-area">
      <el-button type="primary" @click="grey">灰度化</el-button>
      <el-button type="primary" @click="binary">二值化</el-button>
    </div>
  </div>
</template>

<script>
import {changePicToGrey, rotatePicLeft, rotatePicRight, changePicIntoBinary} from "@/network/right";
import {useStore} from 'vuex';
import {ElMessage} from 'element-plus'

export default {
  name: "Right",
  setup() {

    const store = useStore();

    const grey = () => {
      changePicToGrey(store.state.imgdata[store.state.current_image].url).then(res => {
        if (res.result === true) {
          console.log('灰度化之后的图片地址为->' + res.filepath);
          store.state.imgdata[store.state.current_image].url = res.filepath;
          ElMessage({
            showClose: true,
            message: '图片修改成功',
            type: 'success'
          });
          console.log("灰度化结束");
        } else {
          ElMessage({
            showClose: true,
            message: '内部错误',
            type: 'error'
          });
          console.log("灰度化失败");
        }

      })
    }

    const binary = () => {
      changePicIntoBinary(store.state.imgdata[store.state.current_image].url).then(res => {
        if (res.result === true) {
          console.log('二值化之后的图片地址为->' + res.filepath);
          store.state.imgdata[store.state.current_image].url = res.filepath;
          ElMessage({
            showClose: true,
            message: '图片修改成功',
            type: 'success'
          });
          console.log("二值化结束");
        } else {
          ElMessage({
            showClose: true,
            message: '内部错误',
            type: 'error'
          });
          console.log("二值化失败");
        }

      })
    }

    const rotateLeft = () => {
      rotatePicLeft(store.state.imgdata[store.state.current_image].url).then(res => {
        if (res.result === true) {
          console.log('左旋转之后的图片地址为->' + res.filepath);
          store.state.imgdata[store.state.current_image].url = res.filepath;
          ElMessage({
            showClose: true,
            message: '图片修改成功',
            type: 'success'
          });
          console.log("左旋转结束");
        } else {
          ElMessage({
            showClose: true,
            message: '内部错误',
            type: 'error'
          });
          console.log("左旋转失败");
        }

      })
    }

    const rotateRight = () => {
      rotatePicRight(store.state.imgdata[store.state.current_image].url).then(res => {
        if (res.result === true) {
          console.log('右旋转之后的图片地址为->' + res.filepath);
          store.state.imgdata[store.state.current_image].url = res.filepath;
          ElMessage({
            showClose: true,
            message: '图片修改成功',
            type: 'success'
          });
          console.log("右旋转结束");
        } else {
          ElMessage({
            showClose: true,
            message: '内部错误',
            type: 'error'
          });
          console.log("右旋转失败");
        }

      })
    }


    return {
      grey,
      binary,
      rotateLeft,
      rotateRight
    }
  }
}
</script>

<style scoped lang="scss">
#right {
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .buttons-area {
    height: 30%;
    width: 90%;
    display: flex;
    justify-content: center;
  }

  .el-button {
    height: min-content;
    margin-top: 10px;
  }
}
</style>
