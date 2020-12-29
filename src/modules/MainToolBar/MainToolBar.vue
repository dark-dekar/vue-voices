<template>
  <div class="main-toolbar">
    <SearchInput v-on:update-searchterm="updateSearchterm" />
    <div class="filters">
      <CategoryFilter v-on:update-category="updateCategory" />
    </div>
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
    },
  };
</script>

<style lang="scss">
  .main-toolbar {
    padding: 12px;
    display: flex;

    .filters {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
  }
</style>
