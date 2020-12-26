<template>
  <div>
      <VoiceCategory title="blalblab" :voices="voices"/>
      <VoiceCategory title="blalblab" :voices="voices"/>
  </div>
</template>

<script>
import VoiceCategory from './components/VoiceCategory';
export default {
  name: 'ContentArea',
  data: function () {
    return {
      voices: []
    }
  },
  created() {
    this.voices = this.$voicesService.getAllVoices();
  },
  components: {
    VoiceCategory
  }
}
</script>

<style lang="scss">

</style>