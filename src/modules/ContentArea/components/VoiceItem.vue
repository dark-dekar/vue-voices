<template>
  <div :class="['voice-item', {'selected': isSelected}]" @click="toggleSelection()">
      <div class="fav-img">
        <img v-if="isFavorite" src="@/assets/voice-favorite.svg" alt="Favorite">
        <img v-else src="@/assets/voice-favorite-off.svg" alt="Favorite">
      </div>
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
        isFavorite: Boolean,
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
        toggleSelection() {
            this.isSelected = !this.isSelected;
        }
    }
}
</script>

<style lang="scss">
@import '@/resources/styles/colors.scss';

.voice-item {
    position: relative;
    height: fit-content;
    text-align: center;
    margin: 0 20px 24px;
    cursor: pointer;

    .fav-img {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        background-color: $hint-color;
        border-radius: 100%;
        width: 26px;
        height: 26px;
        justify-content: center;
        align-items: center;
    }
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
        .fav-img {
            display: flex;
        }
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