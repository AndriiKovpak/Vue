<template>
  <p :class="`status ct-mb-0 status-${type}`">
    {{ label }}
  </p>
</template>

<script>
export default {
  name: 'FormStatusButton',
  props: ['label', 'type']
};
</script>

<style>
.status {
  font-size: 10px;
  text-align: center;
  font-weight: 400;
  color: #ffffff;
  padding: 2px 4px;
  border-radius: 2px;
  margin-left: 8px;
  width: 74px;
}

.status-progress {
  background: #1c3391;
}

.status-complete {
  background: #1c9151;
}

.status-queued {
  background: #ec9d14;
}
</style>
