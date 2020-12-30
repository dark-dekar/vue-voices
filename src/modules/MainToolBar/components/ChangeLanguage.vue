<template>
  <div class="change-language">
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
        selectedLang: this.$i18n.locale,
        availableLanguages: this.$i18n.availableLocales,
      };
    },
    methods: {
      toggleLanguage(lang) {
        if (this.$i18n.locale !== lang) {
          this.$i18n.locale = lang;
          this.selectedLang = lang;
        }
      },
    },
  };
</script>

<style lang="scss">
  @import '@/resources/styles/colors.scss';

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
</style>
