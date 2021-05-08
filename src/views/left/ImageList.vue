<template>
  <div id="left" class="left-div">
    <dl id="filelist" class="left-menu">
      <transition-group name="list" tag="p" appear>
        <dt class="list-item" v-for="(item, index) in $store.state.imgdata" :key="item.id"
            @click="select_item(index)"
            :class="{dtActive : $store.state.current_image === index}">
          第{{ index + 1 }}页
          <i class="el-icon-more" @click.stop="remove(index)"></i>
        </dt>
        <!--        <list-item v-for="(item, index) in $store.state.imgdata" :key="item.id" :item="item" :removefun="removefun"></list-item>-->
      </transition-group>
    </dl>
    <el-divider direction="vertical">asdfas</el-divider>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {reactive, ref, onMounted} from 'vue'
import ListItem from "@/views/left/item/ListItem";
import {getImageList} from "@/network/left";

export default {
  name: "ImageList",
  components: {
    ListItem
  },
  setup() {

    const store = useStore();

    // let current_index = reactive({
    //   value: store.state.current_image
    // });

    const remove = (index) => {
      console.log(store.state.imgdata)
      store.state.imgdata.splice(index, 1);
      sleep(100).then(() => {
        initList();
      })
    }

    const initList = () => {
      // 每做一次删除，都要初始化一下列表，这样以后会方便很多，但缺点是动画略微重复
      for (let i = 0; i < store.state.imgdata; i++) {
        store.state.imgdata[i].id = i;
      }
    }

    const sleep = (time) => {
      // 这里睡眠主要是为了动画能够展示出来，要不太快了没有效果了
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    //这个方法主要是控制item背景色，选中哪个item就将class添加上去
    const select_item = (index) => {
      // console.log(index);
      let i = index;
      store.state.current_image = i;
      //current_index.value = store.state.current_image;
      // console.log(index);
      // console.log(store.state.current_image);
    }

    const changeScroll = () => {
      document.getElementsByClassName('list-item')[store.state.current_image].scrollIntoView();
    }

    onMounted(() => {

      getImageList().then(res => {
        var list = [];
        for (var i = 0; i < res.list.length; i++) {
          var imgobject = {
            url: '',
            id: 0
          };
          imgobject.url = res.list[i];
          imgobject.id = i;
          list.push(imgobject);
        }
        store.state.imgdata = list;
        console.log(store.state.imgdata);
      })
    })

    return {
      remove,
      select_item,
      changeScroll
    }
  },
  // methods: {
  //   removefun(index) {
  //     console.log(index)
  //     this.remove(index);
  //   }
  // }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/imagelist.css";

.left-div {
  width: 15vw;
  height: 100vh;

  .el-icon-more {
    position: relative;
    left: 30%;
  }
}
</style>
