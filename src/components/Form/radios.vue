<template>
  <input type="radio" id="radio" name="radio" :checked="value" value="12345" />
</template>

<script>
export default {
  name: 'FormRadios',
  props: {
    click: { type: Function },
    value: { type: Boolean }
  },
  methods: {
    handleClick(event) {
      this.checked = event.target.checked;
      this.click(event.target.selected);
    }
  }
};
</script>

<style>
#radio:checked {
  background-color: red;
}
</style>
