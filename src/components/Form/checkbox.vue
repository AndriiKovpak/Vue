<template>
  <input
    class="form-check-input"
    type="checkbox"
    id="inlineCheckbox"
    :checked="value"
    @click="handleClick"
  />
</template>

<script>
export default {
  name: 'FormCheckbox',
  props: ['value'],
  methods: {
    handleClick(event) {
      this.$emit('onClick', event.target.checked);
    }
  }
};
</script>

<style>
.form-check-input:checked {
  background-color: #4f4f4f !important;
}

.form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgb(192 179 179 / 25%) !important;
}
</style>
