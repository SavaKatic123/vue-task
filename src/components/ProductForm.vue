<template>
  <div id="add-product">
    <header>
      <strong>Add Product</strong>
    </header>
    <div id="product-form">
      <label for="id">ID</label>
      <input type="text" name="id" placeholder="Product ID..."/>

      <label for="name">Name</label>
      <input type="text" name="name" placeholder="Product Name..."/>

      <input type="submit" value="Add Product"/>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newItem: {
        id: '',
        name: ''
      }
    };
  },
  methods: {
    addItem() {
      // to-do implement handler for adding new item and validate user input
    }
  }
};
</script>