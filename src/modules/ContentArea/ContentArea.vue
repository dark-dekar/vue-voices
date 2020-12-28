<template>
  <div class="content-area custom-scrollbar">
      <VoiceCategory v-if="favoriteVoices && favoriteVoices.length > 0" :title="$t('categories.favorite')" :voices="favoriteVoices"/>
      <VoiceCategory :title="$t('categories.pro')" :voices="voices"/>
  </div>
</template>

<script>
import VoiceCategory from './components/VoiceCategory';
export default {
  name: 'ContentArea',
  data: function () {
    return {
      favoriteVoices:[],
      voices: [],
    }
  },
  created() {
    this.favoriteVoices = this.$store.state.favorites;
    this.voices = this.$voicesService.getAllVoices();
  },
  watch: {
    favoriteVoices: function (favorites){
      const ids = favorites.map(fav => fav.id);
      this.voices.forEach(fav => {
        if(ids.includes(fav.id)) {
          fav.isFavorite = true;
        } else {
          fav.isFavorite = false;
        }
      });
    }
  },
  components: {
    VoiceCategory
  }
}
</script>

<style lang="scss">
.content-area {
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>