<template>
  <div id="app">
    <router-view></router-view>
    <MaintabBar></MaintabBar>
  </div>
</template>

<script>
import MaintabBar from "components/content/mainTabbar/MainTabBar"
export default {
  name: 'App',
  components: {
    MaintabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
