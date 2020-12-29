<template>
  <div class="main-toolbar">
    <SearchInput v-on:update-searchterm="updateSearchterm" />
    <CategoryFilter v-on:update-category="updateCategory" />
  </div>
</template>

<script>
  import SearchInput from './components/SearchInput';
  import CategoryFilter from './components/CategoryFilter';

  export default {
    name: 'MainToolBar',
    components: {
      SearchInput,
      CategoryFilter,
    },
    methods: {
      updateSearchterm(newSearchTerm) {
        newSearchTerm = newSearchTerm.trim();
        if (newSearchTerm === '') {
          newSearchTerm = undefined;
        }
        if (this.$route.query.searchTerm !== newSearchTerm) {
          this.$router.replace({ query: { searchTerm: newSearchTerm } });
        }
      },
      updateCategory(newCategory) {
        if (this.$route.query.category !== newCategory) {
          this.$router.replace({ query: { category: newCategory } });
        }
      },
    },
  };
</script>

<style lang="scss">
  .main-toolbar {
    padding: 12px;
  }
</style>
