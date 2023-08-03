<template>
  <div>
    <v-chart class="chart" :option="option" ref="chart" autoresize />
  </div>
</template>

<script>
import { watch, ref, defineComponent } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, LineChart } from 'echarts/charts';
import { LegendComponent, GridComponent } from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';

use([CanvasRenderer, LegendComponent, GridComponent, BarChart, LineChart]);

export default defineComponent({
  name: 'ModelAdminChart',
  props: ['data'],
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: 'light'
  },
  setup(props) {
    const series = ref([
      {
        name: 'Actual',
        type: 'bar',
        data: [
          220.0, 44.9, 17.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
          3.3
        ]
      }
    ]);

    const colors = ['#ECC44B', '#8EC57A', '#8EC57A'];
    const option = ref({
      color: colors,

      legend: {
        right: '10%'
      },
      xAxis: [
        {
          name: 'Date',
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            symbol: ['none', 'arrow']
          },
          data: [
            '08/01',
            '08/02',
            '08/03',
            '08/04',
            '08/05',
            '08/06',
            '08/07',
            '08/08',
            '08/09',
            '08/10',
            '08/11',
            '08/12'
          ]
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Withdrawal',
          min: 0,
          position: 'left',
          symbol: 'arrow',
          axisLine: {
            lineStyle: {
              color: '#000000'
            },
            symbol: ['none', 'arrow'],
            show: true
          },
          axisLabel: {
            formatter: '{value} K'
          }
        }
      ],
      series: series
    });

    watch(props, (newVal) => {
      series.value = [];
      series.value.push({
        name: 'Actual',
        type: 'bar',
        data: [
          220.0, 44.9, 17.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
          3.3
        ]
      });

      newVal.data.forEach((element) => {
        const newSeries = {
          name: element.model_name,
          type: 'line',
          data: element.data
        };

        series.value.push(newSeries);
      });
    });

    return { option };
  }
});
</script>

<style scoped>
.chart {
  height: 400px;
  width: 90%;
}
</style>
