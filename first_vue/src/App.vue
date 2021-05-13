<template>
  <div id="app">
    <!--需要缓存组件-->
    <keep-alive>
      <!--router-view组件是一个 functional 组件，渲染路径匹配到的视图组件-->
      <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath"></router-view>
    </keep-alive>
    <!--不需要缓存组件-->
    <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath"></router-view>
<!--    <moduleFooter></moduleFooter>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
