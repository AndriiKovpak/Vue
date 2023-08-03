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
          ct-pl-70
          ct-pr-40
          ct-pt-8
          ct-pb-8
          ct-rounded
          ct-shadow
          dropdown-toggle
        "
        :id="`form-filterable-input-${label}`"
        :placeholder="placeholder"
        aria-label="Group"
        autocomplete="off"
        v-model="message"
        @focus="dropdownFocus"
        @blur="dropdownBlur"
      />
      <span class="ct-position-right">
        <form-small-button
          v-if="message.length > 0 || button === 'search'"
          :icon="button"
          @click="handleRemove"
        />
      </span>
    </div>
    <div class="dropdown">
      <ul
        ref="dropdown"
        class="dropdown-menu ct-font-14 w-100"
        :class="`display: ${openMenu} ? none : block`"
      >
        <li
          :key="index"
          v-for="(menu, index) in options"
          @click="handleSetGroup(menu)"
        >
          <span class="dropdown-item">
            {{ menu }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FormSmallButton from '@components/Form/small-button';
import { isEmpty } from 'ramda';

export default {
  name: 'FormDropdownInput',
  components: {
    FormSmallButton
  },
  props: ['label', 'button', 'placeholder', 'options'],
  data() {
    return {
      message: ''
    };
  },
  computed: {
    openMenu() {
      return isEmpty(this.message);
    }
  },
  methods: {
    handleRemove() {
      this.message = '';
    },
    handleSetGroup(val) {
      this.message = val;
      this.$refs.dropdown.style.display = 'none';
    },
    dropdownFocus() {
      this.$refs.dropdown.style.display = 'block';
    },
    dropdownBlur() {
      setTimeout(() => {
        this.$refs.dropdown.style.display = 'none';
      }, 200);
    }
  }
};
</script>

<style>
.dropdown-menu {
  top: -15px;
}
</style>
