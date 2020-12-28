<template>
  <div class="search-input input-group mb-3">
    <div class="input-group-prepend">
        <img src="@/assets/search.svg" alt="search">
    </div>
    <input type="text" class="form-control" :aria-label="$t('toolbar.search')" v-model="inputValue">
</div>
</template>

<script>
export default {
    name: 'SearchInput',
    props: {
        searchTerm: String,
    },
    data: function() {
        return {
            inputValue: '',
            debounce: this.$debounce(function(value) {this.$emit('update-searchterm',value)}, 200)
        }
    },
    watch: {
        inputValue: function(newValue) {
            this.debounce(newValue)
        }
    }
}
</script>

<style lang="scss">
@import '@/resources/styles/colors.scss';

.search-input {
    background-color: black;
    padding-right: 12px;
    border-radius: 20px;

    .form-control {
        background-color: black;
        border: 0;
        color: $main-color;

        &:focus {
            background-color: black;
            color: $main-color;
        }
    }
}
</style>