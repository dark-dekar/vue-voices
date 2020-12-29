<template>
  <div class="voice-category">
    <div class="category-header">
      <h3>{{ title }}</h3>
      <div class="divisor"></div>
    </div>
    <div class="voice-list">
      <VoiceItem
        v-for="(voice, index) in voices"
        :key="voice.id"
        :voice="voice"
        v-on:toggle-favorite="toggleFavoriteState($event, index)"
      />
    </div>
  </div>
</template>

<script>
  import VoiceItem from './VoiceItem';

  export default {
    name: 'VoiceCategory',
    props: {
      title: String,
      voices: Array,
    },
    components: {
      VoiceItem,
    },
    methods: {
      toggleFavoriteState: function(event, index) {
        if (event) {
          this.$store.commit('addFavoriteToList', this.voices[index]);
        } else {
          this.$store.commit('removeFavoritefromList', this.voices[index].id);
        }
      },
    },
  };
</script>

<style lang="scss">
  @import '@/resources/styles/breakpoints.scss';

  .voice-category {
    padding: 24px 86px 0 36px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .category-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      margin-left: 20px;

      h3 {
        flex: 0;
        margin: 0;
        font-size: 18px;
        text-transform: uppercase;
        color: #858585;
        white-space: nowrap;
      }
      .divisor {
        flex: 1;
        height: 0;
        border-bottom: 1px solid;
        margin-left: 12px;
        color: #2b2b2b;
      }
    }

    .voice-list {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 12px 0 24px;
    }
  }

  @media (max-width: $mobile-device) {
    .voice-category {
      padding: 0 20px 0 0;
    }
  }
</style>
