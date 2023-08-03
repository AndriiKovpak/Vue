<template>
  <simulation-status />
  <simulation-target @changeTableState="handleShowSummary" />
  <div v-if="toggle" id="simulation-summary">
    <h3 class="ct-mt-30 ct-fw-ex-bold ct-font-24">Simulation Summary</h3>
    <div class="row">
      <div class="col-md-4">
        <app-card title="ID 12345678" type="large" top="0">
          <simulation-details />
        </app-card>
      </div>
      <div class="col-md-8">
        <app-card title="Parameter" type="large" top="0">
          <simulation-parameter @onAddQueueClick="handleAddQueueClick" />
        </app-card>
      </div>
    </div>
    <app-card
      title="Actual Business Performance (Simulation Target)"
      type="large"
      top="20"
    >
      <simulation-performance />
    </app-card>
    <simulation-table
      :useCheckboxOnRow="true"
      :options="tableOptions"
      :resources="loadedData"
      :threshold="threshold"
    />
  </div>
</template>

<script>
import { AppCard } from '@components/App';
import SimulationDetails from '@views/simulation/details';
import SimulationPerformance from '@views/simulation/performance';
import SimulationParameter from '@views/simulation/parameter';
import SimulationTable from '@views/simulation/table';
import SimulationTarget from '@views/simulation/target';
import SimulationStatus from '@views/simulation/status';
import {
  SIMULATION_RESULT_TABLE,
  DEMO_SIMULATION_RESULT_DATA
} from '@constants';

export default {
  name: 'AppSimulationPage',
  components: {
    SimulationStatus,
    SimulationTarget,
    AppCard,
    SimulationDetails,
    SimulationPerformance,
    SimulationParameter,
    SimulationTable
  },
  data() {
    return {
      tableOptions: SIMULATION_RESULT_TABLE,
      loadedData: [],
      toggle: false,
      threshold: 10
    };
  },
  mounted() {
    this.loadedData = this.calcData(10);
  },
  methods: {
    handleShowSummary(val) {
      if (JSON.stringify(val).length > 2) {
        this.toggle = true;
      } else {
        this.toggle = false;
      }
    },
    handleAddQueueClick(val) {
      this.loadedData = this.calcData(val);
    },
    calcData(val) {
      const tmp = DEMO_SIMULATION_RESULT_DATA.filter(
        (el) => parseFloat(el.threshold) <= parseInt(val, 10) / 100
      );
      return tmp;
    }
  }
};
</script>
