<template>
  <div class="voice-item">
      <div class="voice-icon">
          <img :src="getIcon(voice.icon)" :alt="voice.name">
      </div>
      <span class="voice-name">{{ voice.name }}</span>
  </div>
</template>

<script>
export default {
    name: 'VoiceItem',
    props: {
        voice: Object,
    },
    data: function () {
        return {
            isSelected: false,
        }
    },
    methods: {
        getIcon(icon) {
            return require('@/assets/'+icon)
        }
    }
}
</script>

<style lang="scss">
@import '@/resources/styles/colors.scss';

.voice-item {
    height: fit-content;
    text-align: center;
    margin: 0 20px 24px;

    .voice-icon {
        background-color: $main-color;
        border-radius: 100%;
        margin-bottom: 12px;
        padding: 2px;
    }

    .voice-name {
        font-size: 14px;
        font-weight: 600;
    }
}
</style>