<template>
  <div class="app-table ct-p-3">
    <table class="table mb-0">
      <thead>
        <tr
          class="
            tr
            ct-font-14 ct-font-gray-2 ct-shadow
            bg-white
            ct-rounded-top-left
          "
        >
          <th
            class="td"
            v-if="useCheckboxOnRow"
            :style="
              status
                ? 'display: inline-flex; width: 33%'
                : 'display: initial; width: 25px'
            "
          />
          <th class="td" :key="index" v-for="(el, index) in options">
            {{ el.label }}
          </th>
          <th v-if="status" class="td"></th>
        </tr>
      </thead>
      <tbody class="tbody bg-white ct-shadow">
        <tr
          class="tr ct-font-12"
          :key="rowIndex"
          v-for="(row, rowIndex) in resources"
          :class="checkedRows.includes(rowIndex) && 'selected-row'"
        >
          <td
            class="td"
            v-if="useCheckboxOnRow"
            :style="
              status
                ? 'display: inline-flex; width: 33%'
                : 'display: initial; width: 25px'
            "
          >
            <form-checkbox
              :value="checkedRows.includes(rowIndex)"
              @onClick="(val) => handleCheckboxClick(rowIndex, val)"
              :disabled="
                status &&
                countCheckedRow >= 3 &&
                !checkedRows.includes(rowIndex)
              "
            />
            <form-status-button v-if="status" :label="status" type="complete" />
          </td>
          <td class="td" :key="tdIndex" v-for="(el, tdIndex) in options">
            {{ row[el.field_name] }}
          </td>
          <td
            v-if="status"
            class="td text-decoration-underline ct-cursor-pointer ct-fw-bold"
          >
            Switch
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="
        table-footer
        bg-white
        justify-content-between
        d-flex
        ct-rounded-bottom ct-shadow ct-m-1
      "
    >
      <div class="ct-m-auto-0 ct-font-12">
        <form-checkbox v-if="!status" :value="setAll" @onClick="handleSetAll" />
        <img v-else :src="pngCheckbox" width="14" />
        <b class="ms-2">{{ countCheckedRow }}</b>
        {{ status ? 'model' : 'entity' }} selected.
        {{ status && '*Max selection: 3 models.' }}
      </div>
      <div v-if="!status">
        <form-action-button
          @click="handleUnselect"
          label="Unselect"
          type="light1"
          :disabled="setAll"
        />
        <form-action-button
          @click="handleReverse"
          label="Reverse"
          type="light1"
          :disabled="setAll"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  FormCheckbox,
  FormActionButton,
  FormStatusButton
} from '@components/Form';
import pngCheckbox from '@assets/images/icons/Indeterminate-Disable.png';

export default {
  name: 'AppTable',
  props: ['options', 'resources', 'useCheckboxOnRow', 'status'],
  components: {
    FormCheckbox,
    FormActionButton,
    FormStatusButton
  },
  data() {
    return {
      countCheckedRow: 0,
      checkedRows: [],
      setAll: false,
      pngCheckbox: pngCheckbox
    };
  },
  methods: {
    handleCheckboxClick(index, val) {
      this.checkedRows = val
        ? [...this.checkedRows, index]
        : this.checkedRows.filter((el) => el !== index);

      this.countCheckedRow = val
        ? this.countCheckedRow + 1
        : this.countCheckedRow - 1;

      this.$emit('changeTableState', this.checkedRows);
      this.$emit(
        'changeTableChart',
        this.resources.filter(
          (el, elIndex) => this.checkedRows.indexOf(elIndex) !== -1
        )
      );
    },
    handleSetAll(val) {
      this.setAll = val;
      this.countCheckedRow = val ? this.resources.length : 0;
      this.checkedRows = val ? this.resources.map((_, index) => index) : [];
      this.$emit('changeTableState', this.checkedRows);
    },
    handleUnselect() {
      this.setAll = false;
      this.countCheckedRow = 0;
      this.checkedRows = [];
      this.$emit('changeTableState', this.checkedRows);
    },
    handleReverse() {}
  }
};
</script>

<style>
.ct-rounded-top-left {
  border-radius: 12px 12px 0 0;
}

.app-table .tbody {
  display: table-caption;
  flex: 1;
  height: 200px;
  overflow: auto;
}

.table-footer {
  height: 40px;
}

.app-table .tbody::-webkit-scrollbar {
  width: 5px;
}

.app-table .tbody::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px #333333;
}

.app-table .tr {
  width: 100%;
  display: flex;
}

.app-table th {
  align-self: flex-end;
}

.app-table th:first-child {
  text-align: center;
}

.app-table td:first-child {
  margin-left: 8px;
}
.app-table .td {
  width: 33%;
}

.app-table .td:first-child {
  width: 25px;
}

.app-table th:first-child {
  padding-left: 25px;
}

.app-table .ct-p-3 {
  padding: 36px 40px;
}

.ct-shadow {
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.15);
}

.app-table .ct-m-1 {
  padding: 1px 16px;
}

.selected-row {
  background-color: #f1f4ff !important;
}
</style>
