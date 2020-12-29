<template>
  <div class="category voice-filter input-group">
    <div class="filter-icon input-group-prepend">
      <img src="@/assets/filter.svg" :alt="$t('toolbar.category')" />
    </div>
    <select class="filter-select custom-select" v-model="selectedCategory">
      <option value=""> {{ $t('toolbar.all') }}</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
    <img class="select-arrow" src="@/assets/select-arrow.svg" />
  </div>
</template>

<script>
  export default {
    name: 'CategoryFilter',
    data: function() {
      return {
        selectedCategory: '',
        categories: this.$voicesService.getAllCategories(),
      };
    },
    created() {
      this.selectedCategory = this.$route.query.category || '';
    },
    watch: {
      selectedCategory: function(newValue) {
        if (newValue === '') newValue = undefined;
        this.$emit('update-category', newValue);
      },
    },
  };
</script>

<style lang="scss">
  @import './select-styles.scss';

  .category.voice-filter {
    padding-left: 12px;
  }
</style>
