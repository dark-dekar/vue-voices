<template>
  <div class="content-area custom-scrollbar">
    <VoiceCategory
      v-if="showFavorites && favoriteVoices && favoriteVoices.length > 0"
      :title="$t('categories.favorite')"
      :voices="favoriteVoices"
      :isFavoriteCategory="true"
    />
    <VoiceCategory
      :title="$t('categories.pro')"
      :voices="voices"
      ref="proVoices"
    />
  </div>
</template>

<script>
  import VoiceCategory from './components/VoiceCategory';
  export default {
    name: 'ContentArea',
    data: function() {
      return {
        showFavorites: true,
        favoriteVoices: [],
        voices: [],
      };
    },
    created() {
      const queryParams = this.$route.query;
      const isFiltered = this.isFiltered(queryParams);
      this.showFavorites = !isFiltered;
      this.favoriteVoices = this.$store.state.favorites;
      this.voices = isFiltered
        ? this.getFilteredVoices(queryParams)
        : this.$voicesService.getAllVoices();
    },
    methods: {
      isFiltered(queryParams) {
        return (
          queryParams.searchTerm || queryParams.category || queryParams.sort
        );
      },
      getFilteredVoices(queryParams) {
        return this.$voicesService.getFilteredList(
          this.favoriteVoices,
          queryParams.searchTerm,
          queryParams.category,
          queryParams.sort
        );
      },
    },
    watch: {
      favoriteVoices: function(favorites) {
        const ids = favorites.map((fav) => fav.id);
        this.voices.forEach((fav) => {
          fav.isFavorite = ids.includes(fav.id);
        });
      },
      $route(to) {
        if (this.isFiltered(to.query)) {
          this.showFavorites = false;
          this.voices = this.getFilteredVoices(to.query);
        } else {
          this.showFavorites = true;
          this.voices = this.$voicesService.getAllVoices(this.favoriteVoices);
        }
      },
    },
    components: {
      VoiceCategory,
    },
  };
</script>

<style lang="scss">
  .content-area {
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
