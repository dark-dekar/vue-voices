<template>
  <div>
      Voices!!!
  </div>
</template>

<script>
export default {
  name: 'ContentArea',
  data: function () {
    return {
      voices: []
    }
  },
  created() {
    this.voices = this.$voicesService.getAllVoices();
  }
}
</script>

<style>

</style>