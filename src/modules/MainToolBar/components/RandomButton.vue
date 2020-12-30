<template>
  <div class="random-button">
    <img src="@/assets/button-random.svg" />
  </div>
</template>

<script>
  export default {
    name: 'RandomButton',
    methods: {},
  };
</script>

<style lang="scss">
  @import '@/resources/styles/breakpoints.scss';

  .random-button {
    padding-left: 12px;
  }

  @media (max-width: $mobile-device) {
    .random-button {
      padding-left: 0;
    }
  }
</style>
