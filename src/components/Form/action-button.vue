<template>
  <button type="button" :class="`btn btn-${type}`" :disabled="!disabled">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'FormActionButton',
  props: ['label', 'type', 'disabled']
};
</script>

<style>
.btn-dark {
  background: #4f4f4f !important;
  color: #ffffff !important;
  border-radius: 6px !important;
  margin: 5px;
  font-size: 14px !important;
  font-weight: 600 !important;
}

.btn-dark:hover {
  background: #636363 !important;
}

.btn-dark:active {
  background: #231f20 !important;
}

.btn-light1 {
  background: #eeeeee !important;
  color: #333333 !important;
  border-radius: 6px !important;
  border-color: #eeeeee !important;
  margin: 5px;
  font-size: 12px !important;
  font-weight: 600 !important;
}

.btn-light2 {
  background: #ffefef !important;
  color: #ff0202 !important;
  border-radius: 6px !important;
  border-color: #eeeeee !important;
  margin: 10px;
  padding: 12px 16px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
}

.btn-light3 {
  background: #eeeeee !important;
  color: #9ba8b0 !important;
  border-radius: 6px !important;
  border-color: #eeeeee !important;
  padding: 12px 16px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
}

.btn-light:hover {
  background: #e8e8e8 !important;
}

.btn-light:active {
  background: #dedede !important;
}
</style>
