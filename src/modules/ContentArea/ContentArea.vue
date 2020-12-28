<template>
  <div class="content-area custom-scrollbar">
    <VoiceCategory
      v-if="showFavorites && favoriteVoices && favoriteVoices.length > 0"
      :title="$t('categories.favorite')"
      :voices="favoriteVoices"
    />
    <VoiceCategory :title="$t('categories.pro')" :voices="voices" />
  </div>
</template>

<script>
  import VoiceCategory from "./components/VoiceCategory";
  export default {
    name: "ContentArea",
    data: function() {
      return {
        showFavorites: true,
        favoriteVoices: [],
        voices: [],
      };
    },
    created() {
      this.favoriteVoices = this.isFiltered(this.$route.query)
        ? []
        : this.$store.state.favorites;
      this.voices = this.$voicesService.getAllVoices();
    },
    methods: {
      isFiltered(queryParams) {
        return !!queryParams.searchTerm;
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
        } else {
          this.showFavorites = true;
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
