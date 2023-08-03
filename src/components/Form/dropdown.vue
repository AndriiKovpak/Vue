<template>
  <div
    class="text-light ct-font-14 ct-cursor-pointer"
    id="dropdownMenu"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {{ selectedVal }}
  </div>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
    <li :key="index" v-for="(el, index) in list" @click="handleSelected(el)">
      <a class="dropdown-item ct-cursor-pointer ct-font-14">{{ el }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FormDropdown',
  props: ['list'],
  data() {
    return {
      selectedVal: this.list[0]
    };
  },
  methods: {
    handleSelected(val) {
      this.selectedVal = val;
    },
    initialize() {
      const temp = this.list[0];
      this.selectedVal = temp;
    }
  }
};
</script>
