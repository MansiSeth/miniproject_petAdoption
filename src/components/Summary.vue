<template>
  <div class="summary">
    <div>Subtotal: {{ formatPrice(subtotal) }}</div>
    <div>Taxes:{{formatPrice(taxes) }}</div>
    <div>Total: {{ formatPrice(total) }}</div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    subtotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    taxes: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      return typeof price === 'number' ? `$${price.toFixed(2)}` : '';
    },
  },
};
</script>

<style>
.summary {
  background-color: #FFE7C2;
  border-radius: 10px;
  padding: 16px;
  font-size: 32px;
  margin-top: 16px;
}
</style>
