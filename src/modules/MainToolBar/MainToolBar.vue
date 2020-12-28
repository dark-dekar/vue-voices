<template>
  <div class="main-toolbar">
    <SearchInput v-on:update-searchterm="updateSearchterm"/>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput';

export default {
  name: 'MainToolBar',
  components: {
    SearchInput
  },
  methods: {
    updateSearchterm(newSearchTerm) {
      console.info(newSearchTerm);
    }
  }
}
</script>

<style lang="scss">
.main-toolbar {
  padding: 12px
}
</style>