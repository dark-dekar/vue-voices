<template>
  <div class="main-toolbar">
    <SearchInput v-on:update-searchterm="updateSearchterm" />
    <div class="filters">
      <CategoryFilter v-on:update-category="updateCategory" />
      <SortFilter v-on:update-sort="updateSort" />
    </div>
    <div class="toolbar-buttons">
      <ChangeLanguage />
      <RandomButton />
    </div>
  </div>
</template>

<script>
  import SearchInput from './components/SearchInput';
  import CategoryFilter from './components/CategoryFilter';
  import SortFilter from './components/SortFilter';
  import ChangeLanguage from './components/ChangeLanguage';
  import RandomButton from './components/RandomButton';

  export default {
    name: 'MainToolBar',
    components: {
      SearchInput,
      CategoryFilter,
      SortFilter,
      ChangeLanguage,
      RandomButton,
    },
    methods: {
      updateSearchterm(newSearchTerm) {
        newSearchTerm = newSearchTerm.trim();
        if (newSearchTerm === '') {
          newSearchTerm = undefined;
        }
        if (this.$route.query.searchTerm !== newSearchTerm) {
          const query = { ...this.$route.query };
          query.searchTerm = newSearchTerm;
          this.$router.replace({ query: query });
        }
      },
      updateCategory(newCategory) {
        if (this.$route.query.category !== newCategory) {
          const query = { ...this.$route.query };
          query.category = newCategory;
          this.$router.replace({ query: query });
        }
      },
      updateSort(newSort) {
        if (this.$route.query.sort !== newSort) {
          const query = { ...this.$route.query };
          query.sort = newSort;
          this.$router.replace({ query: query });
        }
      },
    },
  };
</script>

<style lang="scss">
  @import '@/resources/styles/breakpoints.scss';

  .main-toolbar {
    padding: 12px;
    display: flex;

    .filters {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
    .toolbar-buttons {
      display: flex;
    }
  }

  @media (max-width: $mobile-device) {
    .main-toolbar {
      display: block;
      .filters {
        justify-content: flex-end;
      }

      .toolbar-buttons {
        background-color: black;
        display: flex;
        position: fixed;
        z-index: 1;
        bottom: 12px;
        left: 12px;
        padding: 12px;
        border-radius: 50px;
      }
    }
  }
</style>
