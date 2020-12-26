<template>
  <div id="app">
    <MainToolBar/>
    <ContentArea/>
  </div>
</template>

<script>
import ContentArea from './modules/ContentArea/ContentArea';
import MainToolBar from './modules/MainToolBar/MainToolBar';

export default {
  name: 'App',
  components: {
    ContentArea,
    MainToolBar
  }
}
</script>

<style lang="scss">
@import './resources/styles/colors.scss';
@import './resources/styles/customScrollBar.scss';

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