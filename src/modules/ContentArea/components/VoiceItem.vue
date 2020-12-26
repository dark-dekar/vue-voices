<template>
  <div :class="['voice-item', {'selected': isSelected}]" @click="changeSelection()">selected
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
        },        
        changeSelection() {
            this.isSelected = !this.isSelected;
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
    cursor: pointer;

    .voice-icon {
        background-color: $main-color;
        border-radius: 100%;
        margin-bottom: 8px;
        padding: 2px;
    }

    .voice-name {
        font-size: 14px;
        font-weight: 600;
    }

    &:hover {
        .voice-icon {
            background-color: $hint-color;
        }

        .voice-name {
            color: $hint-color;
        }
    }

    &.selected {
        .voice-icon {
            background-color: $accent-color;
        }

        .voice-name {
            color: $accent-color;
        }
    }
}
</style>