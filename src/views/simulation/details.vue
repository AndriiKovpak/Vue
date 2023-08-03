<template>
  <div class="ct-font-14" style="min-height: 103px">
    <div class="row mb-1">
      <div class="col-3 ct-font-gray-2 ct-fw-ex-bold">Model</div>
      <div class="col-9 ct-font-gray-1">ensemble_lgbm_xx_xxxv2.0</div>
    </div>
    <div class="row mb-1">
      <div class="col-3 ct-font-gray-2 ct-fw-ex-bold">Period</div>
      <div class="col-9 ct-font-gray-1">07/01/21 - 07/31/21</div>
    </div>
    <div class="row">
      <div class="col-3 ct-font-gray-2 ct-fw-ex-bold">Target</div>
      <div v-if="readMore" class="col-9 ct-font-gray-1">
        {{ targets }}
      </div>
      <div v-if="!readMore" class="col-9 ct-font-gray-1">
        {{ targets.length > 100 ? `${targets.substring(0, 56)}...` : targets }}
      </div>
    </div>
  </div>
  <p
    @click="this.readMore = !this.readMore"
    class="text-end text-decoration-underline ct-cursor-pointer ct-mb-0"
  >
    {{ readMore ? 'Less' : ' More' }}
  </p>
</template>

<script>
const targets =
  '23904, 04342, 74342, 44342, 04342, 74342, 44342, 04342, 74342, 44342, 04342, 74342, 44342, 04342, 74342, 44342, 04342, 74342, 44342, 76342, 68554, 64623, 23414, 13412, 13414, 46356';

export default {
  name: 'SimulationSummaryDetails',
  data() {
    return {
      targets: targets,
      readMore: false
    };
  },
  methods: {}
};
</script>
