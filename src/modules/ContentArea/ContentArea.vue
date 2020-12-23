<template>
  <div>
      Voices!!!
      <button class="btn btn-primary" @click="bla">Test</button>
  </div>
</template>

<script>
export default {
  name: 'ContentArea',
  methods: {
    bla: function() {
      this.$i18n.locale = 'es';
    }
  }
}
</script>

<style>

</style>