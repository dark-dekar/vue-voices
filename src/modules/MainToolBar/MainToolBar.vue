<template>
  <div class="main-toolbar">
    <SearchInput/>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput';

export default {
  name: 'MainToolBar',
  components: {
    SearchInput
  }
}
</script>

<style lang="scss">
.main-toolbar {
  padding: 12px
}
</style>