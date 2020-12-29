<template>
  <div class="category-filter input-group">
    <div class="filter-icon input-group-prepend">
      <img src="@/assets/filter.svg" :alt="$t('toolbar.category')" />
    </div>
    <select class="category-select custom-select" v-model="selectedCategory">
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
  @import '@/resources/styles/colors.scss';

  .category-filter.input-group {
    flex: none;
    width: fit-content;
    position: relative;
    padding-left: 12px;

    select,
    option {
      text-transform: capitalize;
      color: $main-color;
    }
    .filter-icon {
      margin-right: 8px;
    }
    select.category-select {
      border-radius: 5px;
      border: 0;
      background: black;
    }

    .select-arrow {
      position: absolute;
      top: 15px;
      right: 9px;
    }
  }
</style>
