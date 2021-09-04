<template>
  <table>
    <tr-component
      v-for="(item, index) in tableData"
      :key="index"
      :rowsData="item"
    >
    </tr-component>
  </table>
</template>

<script>
import TrComponent from "@/components/ZeroChoStudy/TrComponent";

export default {
  components: {
    TrComponent,
  },
  props: {
    tableData: Array,
  },
};
</script>