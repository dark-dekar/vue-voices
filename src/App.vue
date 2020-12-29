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
    created() {
      try {
        const favoriteIds = JSON.parse(localStorage.getItem('favorites'));
        this.$store.commit(
          'setFavoriteList',
          this.$voicesService.getFavoriteVoices(favoriteIds)
        );
      } catch {
        console.log('No valid favorites found');
      }
    },
  };
</script>

<style lang="scss">
  @import '@/resources/styles/colors.scss';
  @import '@/resources/styles/customScrollbar.scss';

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
