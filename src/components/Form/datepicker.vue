<template>
  <date-picker v-model="date">
    <template #default="{ togglePopover }">
      <div
        class="pe-3 text-light ct-font-14 ct-cursor-pointer"
        @click.stop="dateSelected($event, date, togglePopover)"
      >
        {{ date.toLocaleDateString() }}
      </div>
    </template>
  </date-picker>
</template>

<script>
import { DatePicker } from 'v-calendar';

export default {
  name: 'FormDatepicker',
  components: {
    DatePicker
  },
  data() {
    return {
      date: new Date()
    };
  },
  methods: {
    dateSelected(e, date, toggle) {
      this.date = date;
      toggle({ ref: e.target });
    }
  }
};
</script>

<style>
.vc-container-hide {
  display: none;
}
.vc-container-show {
  display: inline-flex;
}
</style>
