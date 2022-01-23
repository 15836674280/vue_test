<template>
  <div>
    <!-- 全局的三级菜单 -->
    <TypeNav></TypeNav>
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <!-- Floor这个组件：自己在组件内部是没有发请求的，数据是父组件给的 -->
    <Floor />
    <Brand />
  </div>
</template>

<script>
//非路由组件在使用的时候分为三大步：定义、注册、使用
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Brand from "./Brand";
import Floor from "./Floor";
export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>