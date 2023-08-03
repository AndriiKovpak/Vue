<template>
  <div class="row">
    <div class="col">
      <app-card title="Inventory Availability" type="normal">
        <div class="ct-font-24 ct-fw-light ct-font-gray-1">97.62%</div>
      </app-card>
    </div>
    <div class="col">
      <app-card title="Residual Inventory " type="normal">
        <div class="ct-font-24 ct-fw-light ct-font-gray-1">33.22%</div>
      </app-card>
    </div>
    <div class="col">
      <app-card title="Replenishment Trips" type="normal">
        <div class="ct-font-24 ct-fw-light ct-font-gray-1">987</div>
      </app-card>
    </div>
    <div class="col">
      <app-card title="Cost of Trips" type="normal">
        <div class="ct-font-24 ct-fw-light ct-font-gray-1">$80,000</div>
      </app-card>
    </div>
    <div class="col">
      <app-card title="Cost of Inventory " type="normal">
        <div class="ct-font-24 ct-fw-light ct-font-gray-1">$50,000</div>
      </app-card>
    </div>
  </div>
</template>

<script>
import AppCard from '@components/App/card';

export default {
  name: 'SimulationPerformance',
  components: {
    AppCard
  }
};
</script>
