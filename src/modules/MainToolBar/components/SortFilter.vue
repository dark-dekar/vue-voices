<template>
  <div class="sort-filter input-group">
    <div class="filter-icon input-group-prepend">
      <img src="@/assets/order.svg" :alt="$t('toolbar.category')" />
    </div>
    <select class="sort-select custom-select" v-model="selectedOrder">
      <option
        v-for="(order, index) in filterOrders"
        :key="index"
        :value="order.value"
      >
        {{ order.name }}
      </option>
    </select>
    <img class="select-arrow" src="@/assets/select-arrow.svg" />
  </div>
</template>

<script>
  export default {
    name: 'SortFilter',
    data: function() {
      return {
        selectedOrder: 0,
        filterOrders: [
          { name: this.$t('toolbar.popular'), value: 0 },
          { name: this.$t('toolbar.asc'), value: 1 },
          { name: this.$t('toolbar.des'), value: 2 },
        ],
      };
    },
    created() {
      this.selectedOrder =
        this.filterOrders.find(
          (order) => order.value === this.$route.query.sort
        ) || 0;
    },
    watch: {
      selectedOrder: function(newValue) {
        if (newValue === 0) newValue = undefined;
        this.$emit('update-sort', newValue);
      },
    },
  };
</script>

<style lang="scss">
  @import '@/resources/styles/colors.scss';

  .sort-filter.input-group {
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
    select.sort-select {
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
