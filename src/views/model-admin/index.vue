<template>
  <simulation-status />
  <model-admin-experiment @changeTableChart="handleChartData" />
  <app-card title="Model Comprison" type="large" top="20">
    <model-admin-chart :data="chartData" />
  </app-card>
</template>

<script>
import { AppCard } from '@components/App';
import ModelAdminExperiment from '@views/model-admin/experiment';
import SimulationStatus from '@views/simulation/status';
import ModelAdminChart from '@views/model-admin/chart';

export default {
  name: 'AppModelAdminPage',
  components: {
    SimulationStatus,
    ModelAdminExperiment,
    AppCard,
    ModelAdminChart
  },
  data() {
    return {
      chartData: []
    };
  },
  methods: {
    handleChartData(val) {
      this.chartData = val;
    }
  }
};
</script>
