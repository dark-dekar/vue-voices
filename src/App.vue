<template>
  <div id="app">
    <MainToolBar />
    <router-view></router-view>
  </div>
</template>

<script>
  import MainToolBar from './modules/MainToolBar/MainToolBar';

  export default {
    name: 'App',
    components: {
      MainToolBar,
    },
  };
</script>

<style lang="scss">
  @import '@/assets/styles/colors.scss';
  @import '@/assets/styles/customScrollBar.scss';

  #app {
    background: $background-color;
    height: 100%;
    width: 100%;
    color: $main-color;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }
</style>
