<template>
  <div class="container-fluid">
    <div class="row">
      <app-sidebar />
      <div class="col-sm p-4 min-vh-100 bg-light">
        <app-navbar />
        <router-view :key="$route.path" />
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script>
import { AppNavbar, AppSidebar, AppFooter } from '@components/App';

export default {
  name: 'AppDashboardLayout',
  components: {
    AppSidebar,
    AppNavbar,
    AppFooter
  }
};
</script>
