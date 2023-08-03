<template>
  <div class="d-flex ct-font-gray-3 ct-font-14">
    <div>
      <span class="fw-bold pe-2">Time Now</span>
      <span class="pe-3">02:56PM 09/01/2021</span>
      <span class="pe-3">&#183;</span>
    </div>
    <div>
      <span class="fw-bold pe-2">Data Updated</span>
      <span>02:30PM 09/01/2021</span>
    </div>
  </div>
  <div class="ct-mt-20 d-flex justify-content-between">
    <div class="d-flex">
      <date-picker v-model="dateSelected.date">
        <template #default="{ togglePopover }">
          <div class="d-flex">
            <div class="ct-bg-gray-1 ct-rounded-start ct-p-2 ct-mr-1">
              <div class="fw-bold pe-2 text-light ct-font-12">Start Date</div>
              <div
                class="pe-3 text-light ct-font-14 ct-cursor-pointer"
                @click.stop="handleSelected($event, dateStart, togglePopover)"
              >
                {{ dateStart.date.toLocaleDateString() }}
              </div>
            </div>
            <div class="ct-bg-gray-1 me-3 ct-rounded-end ct-p-2">
              <div class="fw-bold pe-2 text-light ct-font-12">End Date</div>
              <div
                class="pe-3 text-light ct-font-14 ct-cursor-pointer"
                @click.stop="handleSelected($event, dateEnd, togglePopover)"
              >
                {{ dateEnd.date.toLocaleDateString() }}
              </div>
            </div>
          </div>
        </template>
      </date-picker>
      <div class="ct-bg-gray-1 me-3 ct-rounded ct-p-2">
        <div class="fw-bold pe-2 text-light ct-font-12">Currency</div>
        <form-dropdown :list="currencyList" ref="dropdown1" />
      </div>
      <div class="ct-bg-gray-1 ct-rounded ct-p-2">
        <div class="fw-bold pe-2 text-light ct-font-12">Entity Type</div>
        <form-dropdown :list="entityTypeList" ref="dropdown2" />
      </div>
    </div>
    <div class="ct-m-inherit">
      <form-action-button
        label="Reset"
        type="dark"
        disabled="false"
        @click="handleReset"
      />
    </div>
  </div>
</template>

<script>
import { DatePicker } from 'v-calendar';
import { CURRENCY, ENTITY_TYPE } from '@constants';
import { FormActionButton, FormDropdown } from '@components/Form';

export default {
  name: 'SimulationStatus',
  components: {
    DatePicker,
    FormActionButton,
    FormDropdown
  },
  data() {
    return {
      dateStart: { date: new Date() },
      dateEnd: { date: new Date() },
      dateSelected: {},
      currencyList: CURRENCY,
      entityTypeList: ENTITY_TYPE
    };
  },
  methods: {
    handleReset() {
      this.$refs.dropdown1.initialize();
      this.$refs.dropdown2.initialize();
      this.dateStart.date = new Date();
      this.dateEnd.date = new Date();
    },
    handleSelected(e, date, toggle) {
      this.dateSelected = date;
      toggle({ ref: e.target });
    }
  }
};
</script>

<style>
.ct-p-2 {
  padding: 12px 16px;
  width: 200px;
}
</style>
