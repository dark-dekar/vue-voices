<template>
  <div class="category-filter input-group">
    <div class="input-group-prepend">
      <label class="input-group-text">Options</label>
    </div>
    <select class="custom-select" v-model="selectedCategory">
      <option value=""> {{ $t('toolbar.all') }}</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
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
        console.info(newValue);
        if (newValue === '') newValue = undefined;
        this.$emit('update-category', newValue);
      },
    },
  };
</script>

<style lang="scss">
  .category-filter {
    select,
    option {
      text-transform: capitalize;
    }
  }
</style>
