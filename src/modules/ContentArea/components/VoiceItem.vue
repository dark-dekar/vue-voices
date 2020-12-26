<template>
  <div class="voice-item">
      <div class="voice-icon">
      </div>
      <span class="voice-name">{{ voice.name }}</span>
  </div>
</template>

<script>
export default {
    name: 'VoiceItem',
    props: {
        voice: Object,
    },
    data: function () {
        return {
            isSelected: false,
        }
    }
}
</script>

<style>

</style>