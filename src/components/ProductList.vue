<template>
  <div id="product-list">
    <header>
      <strong>Product List</strong>
    </header>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Option</th>
      </tr>
      <tr v-for="item in items" :key="item.id">

      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeItem(index) {
      // to-do implement handler for removing existing item
    }
  }
};
</script>
