<template>
  <div id="app-card" :class="`ct-mt-${top}`">
    <div :class="`card-${type}`">
      <div :class="`card-title-${type}`">{{ title }}</div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: ['title', 'type', 'top']
};
</script>

<style>
.card-small {
  background: #000000;
  border-radius: 6px;
  padding: 12px 16px;
}

.card-normal {
  background: #f7f7f7;
  border-radius: 6px;
  padding: 12px 16px;
}

.card-large {
  background: #ffffff;
  padding: 30px 20px;
  border-radius: 12px;
}

.card-title-small {
  font-size: 12px;
}

.card-title-normal {
  font-size: 14px;
  font-weight: 600;
  color: #4f4f4f;
}

.card-title-large {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333333;
}
</style>
