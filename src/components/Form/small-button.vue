<template>
  <button class="btn btn-light ct-w-24">
    <img
      v-if="icon === 'close'"
      class="ct-btn"
      src="@assets/images/icons/close.png"
    />
    <img
      v-if="icon === 'search'"
      class="ct-btn"
      src="@assets/images/icons/search.png"
    />
  </button>
</template>

<script>
export default {
  name: 'FormSmallButton',
  props: ['icon']
};
</script>

<style>
.ct-btn-close {
  background: #c4c4c4 !important;
}

.ct-btn {
  width: 10px !important;
  height: 10px !important;
  position: relative;
  top: -7px;
  left: -5px;
}

.ct-w-24 {
  width: 24px;
  height: 24px;
}
</style>
