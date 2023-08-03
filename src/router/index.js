import { createRouter, createWebHistory } from 'vue-router';

import AppDashboardLayout from '@layouts/dashboard-layout';

import Simulation from '@views/simulation';
import Performance from '@views/performance';
import Replenishment from '@views/replenishment';
import Configuration from '@views/configuration';
import ModelAdmin from '@views/model-admin';

const routes = [
  {
    path: '/',
    component: AppDashboardLayout,
    children: [
      {
        path: '',
        name: 'Simulation',
        component: Simulation
      },
      {
        path: '/performance',
        name: 'Performance',
        component: Performance
      },
      {
        path: '/replenishment',
        name: 'Replenishment',
        component: Replenishment
      },
      {
        path: '/configuration',
        name: 'Configuration',
        component: Configuration
      },
      {
        path: '/model-admin',
        name: 'ModelAdmin',
        component: ModelAdmin
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
