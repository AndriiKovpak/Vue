<template>
  <div id="sidebar" class="col-sm-auto sticky-top">
    <div
      class="
        d-flex
        flex-sm-column flex-row flex-nowrap
        align-items-center
        sticky-top
      "
    >
      <a href="/" class="d-block p-3">
        <img src="@assets/images/logos/logo.png" class="m-auto" width="40" />
      </a>
      <ul
        class="
          nav nav-pills nav-flush
          flex-sm-column flex-row flex-nowrap
          mb-auto
          mx-auto
          text-center
          align-items-center
          mt-4
        "
      >
        <li
          class="nav-item w-100"
          v-bind:key="index"
          v-for="(item, index) in items"
        >
          <router-link
            v-bind:to="'/' + item.link"
            class="nav-link py-3 px-2 d-grid"
          >
            <img v-bind:src="item.image" class="ct-m-0-auto ct-mb-14" />
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { SIDEBAR_LIST } from '@constants';

export default {
  name: 'AppSidebar',
  data() {
    return {
      items: SIDEBAR_LIST
    };
  }
};
</script>

<style>
#sidebar a {
  color: #333333;
  opacity: 0.5;
  size: 14px;
  line-height: 22px;
  font-weight: 400;
}

#sidebar a.router-link-exact-active {
  color: #333333;
  opacity: 1;
  background: #f7f7f7;
  border-radius: 16px;
  font-weight: 600;
}
</style>
