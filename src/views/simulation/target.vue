<template>
  <div class="ct-mt-30">
    <h3 class="ct-fw-ex-bold ct-font-24">Simulation Target</h3>
    <div class="row">
      <div class="col-3">
        <!-- <form-dropdown-input
          label="Group"
          button="close"
          :options="menuItems"
        /> -->
        <form-input label="Group" button="close" />
      </div>
      <div class="col-3">
        <form-input label="Site" button="close" />
      </div>
      <div class="col-3">
        <form-input label="Entity" button="close" />
      </div>
      <div class="col-3">
        <form-input button="search" placeholder="Search" />
      </div>
    </div>
  </div>
  <div class="">
    <app-table
      :useCheckboxOnRow="true"
      :options="tableOptions"
      :resources="loadedData"
      @changeTableState="handleTableStateChange"
    />
  </div>
</template>

<script>
import { AppTable } from '@components/App';
import { FormInput } from '@components/Form';
import {
  SIMULATION_TARGET_TABLE,
  DEMO_SIMULATION_TARGET_BODY_DATA
} from '@constants';

const options = ['ABC', 'XYZ'];

export default {
  name: 'SimulationTarget',
  components: {
    AppTable,
    FormInput
  },
  data() {
    return {
      tableOptions: SIMULATION_TARGET_TABLE,
      loadedData: DEMO_SIMULATION_TARGET_BODY_DATA,
      menuItems: options
    };
  },
  methods: {
    handleTableStateChange(val) {
      this.$emit('changeTableState', val);
    }
  }
};
</script>
