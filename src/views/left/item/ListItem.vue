<template>
  <div class="list-item">
      <p class="content">第{{item.id+1}}张</p>
<!--      <img src="src/assets/images/menu.png" @click.stop="removefun(item.id)"></img>-->
    <img src="../../../assets/images/menu.png" alt="" @click.stop="removefun(item.id)">
  </div>
</template>


<!--<dt class="list-item" v-for="(item, index) in imglist" :key="item.id" @click="chooseimage(index)" :class="activeClass == item.id ? 'li-active' : ''">-->
<!--第{{ index+1}}页-->
<!--<i  class="el-icon-more" @click="remove(item.id)"/>-->
<!--</dt>-->
<script>
import {useStore} from 'vuex'
export default {

  name: "ListItem",
  props: {
    item: {
      type: Object,
      default(){
        return {};
      }
    },
    removefun: {
      type: Function,
      default() {
        return null;
      }
    }
  },
  setup(props){
    const store = useStore();

    const remove = (index)=>{
      props.removefun(index);
    }
  }
}
</script>

<style scoped lang="scss">
.list-item:hover {
  text-decoration: none;
  background-color: #419FFF;
}

.list-item .li-active:hover {
  color: white;
}
.li-active {
  background-color: #1f81d2;
  box-shadow: 2px 0px 0px #efefef;
  border-right: none;
  color: #fff;
  padding: 0;
  width: 100%;
}
.el-icon-more {
  position: relative;
  flex: 1;
  left: 15%;
  margin-top: 10%;
}
.list-item{
  border-bottom: 1px solid #ddd;
  line-height: 50px;
  font-size: 15px;
  display: flex;
}
.content {
  flex: 1;
  position: relative;
  left: 5%;
}
img {
  width: 20px;
  height: 15px;
  position: relative;
  right: 5%;
  margin-top: 9%;
}
</style>
