<template>
  <div class="voice-category">
      <div class="category-header">
          <h3>{{ title }}</h3>
          <div class="divisor"></div>
      </div>
      <div class="voice-list">
          <span v-for="voice in voices" :key="voice.id"> {{voice.name}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'VoiceCategory',
  props: {
    title: String,
    voices: Array,
  }
}
</script>

<style lang="scss">
.voice-category {
    padding: 24px 74px;
    .category-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

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
            color: #2B2B2B;
        }
    }
}
</style>