<template>
  <div class="search-input input-group">
    <div class="input-group-prepend">
      <img src="@/assets/search.svg" :alt="$t('toolbar.search')" />
    </div>
    <input
      type="text"
      class="form-control"
      :aria-label="$t('toolbar.search')"
      v-model="inputValue"
    />
    <img
      class="reset-icon"
      src="@/assets/search-close.svg"
      :alt="$t('toolbar.reset')"
      @click="inputValue = ''"
    />
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
    data: function() {
      return {
        inputValue: '',
        debounce: this.$debounce(function(value) {
          this.$emit('update-searchterm', value);
        }, 200),
      };
    },
    created() {
      this.inputValue = this.$route.query.searchTerm || '';
    },
    watch: {
      inputValue: function(newValue) {
        this.debounce(newValue);
      },
    },
  };
</script>

<style lang="scss">
  @import '@/resources/styles/colors.scss';

  .search-input {
    max-width: 252px;
    background-color: black;
    padding-right: 12px;
    border-radius: 20px;

    .form-control {
      background-color: black;
      border: 0;
      color: $main-color;

      &:focus {
        background-color: black;
        color: $main-color;
      }
    }
    .reset-icon {
      cursor: pointer;
    }
  }
</style>
