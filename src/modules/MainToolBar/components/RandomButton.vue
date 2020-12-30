<template>
  <div class="random-button" @click="selectRandom">
    <img src="@/assets/button-random.svg" />
  </div>
</template>

<script>
  export default {
    name: 'RandomButton',
    methods: {
      selectRandom() {
        window.dispatchEvent(new CustomEvent('select-random', { detail: 1 }));
      },
    },
  };
</script>

<style lang="scss">
  @import '@/resources/styles/breakpoints.scss';

  .random-button {
    padding-left: 12px;
    cursor: pointer;
  }

  @media (max-width: $mobile-device) {
    .random-button {
      padding-left: 0;
    }
  }
</style>
