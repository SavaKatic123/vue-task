<template>
  <div id="app">
    <ProductForm @add-item=""/>
    <ProductList 
      @remove-item="" 
      :items="items"
    />
  </div>
</template>

<script>
import ProductForm from './components/ProductForm.vue'
import ProductList from './components/ProductList.vue'

export default {
  data() {
    return {
      items: []
    }
  },

  components: {
    ProductForm,
    ProductList
  },

  methods: {
    addItem(item) {
      // to-do implement adding new item event handler
    },
    removeItem(index) {
      // to-do implement removing existing item event handler
    }
  }
};
</script>

<style lang="sass">
  @import '/styles/_app.scss';
</style>