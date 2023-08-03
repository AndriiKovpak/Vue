<template>
  <div id="form-filterable-input">
    <div class="input-group mb-3">
      <span class="ct-fw-bold ct-font-14 ct-font-gray-2 ct-position-left">
        {{ label }}
      </span>
      <input
        type="text"
        class="
          form-control
          ct-font-gray-1
          ct-font-14
          ct-pt-8
          ct-pb-8
          ct-pr-40
          ct-rounded
          ct-shadow
        "
        :class="label ? 'ct-pl-70' : ''"
        :placeholder="placeholder"
        aria-label="Group"
        v-model="message"
      />
      <span class="ct-position-right">
        <form-small-button
          v-if="message.length > 0 || button === 'search'"
          :icon="button"
          @click="handleRemove"
        />
      </span>
    </div>
  </div>
</template>

<script>
import FormSmallButton from '@components/Form/small-button';

export default {
  name: 'FormFilterableInput',
  components: {
    FormSmallButton
  },
  props: ['label', 'button', 'placeholder'],
  data() {
    return {
      message: ''
    };
  },
  methods: {
    handleRemove() {
      this.message = '';
    }
  }
};
</script>

<style>
.ct-position-left {
  position: absolute;
  top: 8px !important;
  z-index: 4;
  left: 16px;
}

.ct-position-right {
  position: absolute;
  right: 8px;
  z-index: 4;
  top: 6px !important;
}

.ct-shadow {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #eef6fe !important;
}
</style>
