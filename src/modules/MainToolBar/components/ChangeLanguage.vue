<template>
  <div :class="['change-language', { dropup: isHandset }]">
    <img
      class="dropdown-toggle"
      data-toggle="dropdown"
      src="@/assets/translate.svg"
    />

    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a
        :class="['dropdown-item', { selected: lang === selectedLang }]"
        href="#"
        v-for="lang in availableLanguages"
        :key="lang"
        @click="toggleLanguage(lang)"
        >{{ lang }}</a
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChangeLanguage',
    data: function() {
      return {
        isHandset: false,
        selectedLang: this.$i18n.locale,
        availableLanguages: this.$i18n.availableLocales,
      };
    },
    created() {
      this.isMobile();
      window.addEventListener('resize', this.isMobile);
    },
    destroyed() {
      window.removeEventListener('resize', this.isMobile);
    },
    methods: {
      toggleLanguage(lang) {
        if (this.$i18n.locale !== lang) {
          this.$i18n.locale = lang;
          this.selectedLang = lang;
        }
      },
      isMobile() {
        const isMobile = window.matchMedia(
          'only screen and (max-width: 768px)'
        );
        this.isHandset = isMobile.matches ? true : false;
      },
    },
  };
</script>

<style lang="scss">
  @import '@/resources/styles/colors.scss';
  @import '@/resources/styles/breakpoints.scss';

  .change-language {
    display: flex;
    padding: 0 10px 0 22px;
    cursor: pointer;

    .dropdown-menu {
      background-color: black;
      .dropdown-item {
        text-transform: capitalize;
        color: $main-color;

        &:hover {
          background-color: $background-color;
        }

        &.selected {
          color: $hint-color;
          font-weight: 600;
        }
      }
    }
  }

  @media (max-width: $mobile-device) {
    .change-language {
      position: absolute;
      z-index: 1;
      bottom: 12px;
      left: 12px;
      padding: 12px;
      border-radius: 50px;
      background-color: black;
    }
  }
</style>
