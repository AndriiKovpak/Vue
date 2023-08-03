<template>
  <div>
    <p class="ct-font-14 ct-fw-bold">
      Replenishment Triggering Threshold
      <span class="ms-3 ct-fw-normal">{{ value }}%</span>
    </p>
    <div>
      <vue-slider
        v-model="value"
        :order="false"
        :min="min"
        :max="max"
        :marks="[-100, 0, 100]"
        :tooltip="'always'"
        :tooltip-placement="['bottom']"
        :process-style="{ backgroundColor: '#1C9151' }"
        :dot-options="dotOptions"
        :process="process"
      >
        <template v-slot:tooltip="{ value }">
          <div class="custom-tooltip">{{ value }}%</div>
        </template>
        <template v-slot:dot>
          <img src="@assets/images/icons/slider.png" class="custom-dot" />
        </template>
      </vue-slider>
      <div class="text-end mt-4">
        <form-action-button
          label="Add to queue"
          type="light1"
          disabled="false"
          @click="handleAddQueue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import FormActionButton from '@components/Form/action-button';

export default {
  name: 'SimulationParameter',
  components: {
    VueSlider,
    FormActionButton
  },
  data: function () {
    return {
      value: 10,
      process: (dotsPos) => [[50, dotsPos[0]]],
      min: -100,
      max: 100,
      dotOptions: [{ tooltip: 'always' }]
    };
  },
  methods: {
    handleAddQueue() {
      this.$emit('onAddQueueClick', this.value);
    }
  }
};
</script>

<style>
.custom-tooltip {
  transform: translateY(5px);
  font-weight: bold;
  top: -10px;
  position: relative;
}

.custom-dot {
  position: relative;
  top: -18px;
  left: -10px;
}

.vue-slider-ltr {
  height: 10px !important;
}
</style>
