<template>
  <div :class="['voice-item', {'selected': isSelected}]">
      <div class="fav-img" @click="toggleFavorite()">
        <img v-if="voice.isFavorite" src="@/assets/voice-favorite.svg" :alt="$t('voice.img_alt_fav')">
        <img v-else src="@/assets/voice-favorite-off.svg" :alt="$t('voice.img_alt_no_fav')">
      </div>
      <div class="voice-icon" @click="toggleSelection()">
          <img :src="getIcon(voice.icon)" :alt="voice.name">
      </div>
      <span class="voice-name" @click="toggleSelection()">{{ voice.name }}</span>
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
        toggleSelection() {
            this.isSelected = !this.isSelected;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', !this.voice.isFavorite)
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
        cursor: pointer;
    }
    .voice-icon {
        background-color: $main-color;
        border-radius: 100%;
        margin-bottom: 8px;
        padding: 2px;
        cursor: pointer;
    }

    .voice-name {
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
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