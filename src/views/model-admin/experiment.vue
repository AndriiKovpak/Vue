<template>
  <div class="ct-mt-30">
    <h3 class="ct-fw-ex-bold ct-font-24">Experiment Models</h3>
    <div class="row">
      <div class="col-3 offset-9">
        <form-input button="search" placeholder="Search" />
      </div>
    </div>
  </div>
  <div class="">
    <app-table
      :useCheckboxOnRow="true"
      status="In Production"
      :options="tableOptions"
      :resources="loadedData"
      @changeTableState="handleTableStateChange"
      @changeTableChart="handleTableChartChange"
    />
  </div>
</template>

<script>
import { AppTable } from '@components/App';
import { FormInput } from '@components/Form';
import { MODEL_TARGET_TABLE, DEMO_MODEL_RESULT_DATA } from '@constants';

export default {
  name: 'SimulationTarget',
  components: {
    AppTable,
    FormInput
  },
  data() {
    return {
      tableOptions: MODEL_TARGET_TABLE,
      loadedData: DEMO_MODEL_RESULT_DATA
    };
  },
  methods: {
    handleTableStateChange(val) {
      this.$emit('changeTableState', val);
    },
    handleTableChartChange(val) {
      this.$emit('changeTableChart', val);
    }
  }
};
</script>
