<template>
  <div class="content-area custom-scrollbar">
      <VoiceCategory :title="$t('categories.favorite')" :voices="favoriteVoices"/>
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
    this.favoriteVoices = this.$root.$data.state.favorites;
    this.voices = this.$voicesService.getAllVoices();
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