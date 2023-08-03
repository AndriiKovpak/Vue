<template>
  <div id="simulation-table">
    <table class="table mb-0 ct-mt-20">
      <thead>
        <tr class="tr ct-font-gray-2 ct-font-14 ct-rounded-top-left bg-white">
          <th class="td" v-if="useCheckboxOnRow" />
          <th class="td" :key="index" v-for="(el, index) in options">
            {{ el.label }}
          </th>
          <th class="td"></th>
        </tr>
      </thead>
      <tbody class="tbody bg-white ct-font-12">
        <tr class="tr" :key="rowIndex" v-for="(row, rowIndex) in tableData">
          <td class="td" v-if="useCheckboxOnRow">
            <form-radios
              :value="checkedRow === rowIndex"
              :click="() => handleCheckboxClick(rowIndex)"
            />
            <form-status-button label="In Progress" type="progress" />
          </td>
          <td class="td" :key="tdIndex" v-for="(el, tdIndex) in options">
            {{ row[el.field_name] }}
          </td>
          <td class="td">
            <form-small-button
              icon="close"
              @click="handleRemoveRow(rowIndex)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="ct-rounded-bottom bg-white" style="height: 20px" />
    <div class="float-end">
      <form-action-button label="Reset" type="light2" disabled="false" />
      <form-action-button label="Apply" type="light3" disabled="true" />
    </div>
  </div>
</template>

<script>
import {
  FormRadios,
  FormStatusButton,
  FormSmallButton
} from '@components/Form';
import { FormActionButton } from '@components//Form';

export default {
  name: 'SimulationTable',
  props: ['options', 'resources', 'useCheckboxOnRow', 'threshold'],
  components: {
    FormRadios,
    FormStatusButton,
    FormSmallButton,
    FormActionButton
  },
  data() {
    return {
      checkedRow: -1,
      tableData: []
    };
  },
  watch: {
    resources(newVal) {
      this.tableData = newVal;
    }
  },
  mounted() {
    this.tableData = this.resources;
  },
  methods: {
    handleCheckboxClick(index) {
      this.checkedRow = index;
    },
    handleRemoveRow(id) {
      const tmp = this.tableData.filter((el, index) => index !== id);
      this.tableData = tmp;
    }
  }
};
</script>

<style>
#simulation-table .tbody {
  display: table-caption;
  flex: 1;
}

#simulation-table .tbody::-webkit-scrollbar {
  width: 5px;
}

#simulation-table .tbody::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px #333333;
}

#simulation-table .tr {
  width: 100%;
  display: flex;
}

#simulation-table .tr td:last-child {
  width: 13%;
}

#simulation-table .tr th:last-child {
  width: 13%;
}

#simulation-table .td {
  width: 33%;
}

#simulation-table tbody td:first-child {
  display: inline-flex;
}

#simulation-table tbody {
  min-height: 200px;
}

#simulation-table tbody tr {
  height: 37px;
}
</style>
