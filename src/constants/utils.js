import pngSimulation from '@assets/images/icons/simulation.png';
import pngConfiguration from '@assets/images/icons/configuration.png';
import pngModel from '@assets/images/icons/model.png';
import pngPerformance from '@assets/images/icons/performance.png';
import pngReplenishment from '@assets/images/icons/replenishment.png';

export const SIDEBAR_LIST = [
  {
    label: 'Simulation',
    link: '',
    image: pngSimulation
  },
  {
    label: 'Performance',
    link: 'performance',
    image: pngPerformance
  },
  {
    label: 'Replenishment',
    link: 'replenishment',
    image: pngReplenishment
  },
  {
    label: 'Configuration',
    link: 'configuration',
    image: pngConfiguration
  },
  {
    label: 'Model(Admin)',
    link: 'model-admin',
    image: pngModel
  }
];

export const CURRENCY = ['USD', 'GBP'];

export const ENTITY_TYPE = ['Convenient Store', 'Convenient Store1'];
