<template>
  <div class="sort voice-filter input-group">
    <div class="filter-icon input-group-prepend">
      <img src="@/assets/order.svg" :alt="$t('toolbar.category')" />
    </div>
    <select class="filter-select custom-select" v-model="selectedOrder">
      <option value="">{{ $t('toolbar.popular') }}</option>
      <option value="asc">{{ $t('toolbar.asc') }}</option>
      <option value="desc">{{ $t('toolbar.desc') }}</option>
    </select>
    <img class="select-arrow" src="@/assets/select-arrow.svg" />
  </div>
</template>

<script>
  export default {
    name: 'SortFilter',
    data: function() {
      return {
        selectedOrder: '',
        filterOrders: [
          { name: this.$t('toolbar.popular'), value: '' },
          { name: this.$t('toolbar.asc'), value: 'asc' },
          { name: this.$t('toolbar.desc'), value: 'desc' },
        ],
      };
    },
    created() {
      this.selectedOrder = this.$route.query.sort || '';
    },
    watch: {
      selectedOrder: function(newValue) {
        if (newValue === '') newValue = undefined;
        this.$emit('update-sort', newValue);
      },
    },
  };
</script>

<style lang="scss">
  @import './select-styles.scss';

  .sort.voice-filter {
    padding-left: 24px;
  }

  @media (max-width: $mobile-device) {
    .sort.voice-filter {
      padding-left: 12px;
    }
  }
</style>
