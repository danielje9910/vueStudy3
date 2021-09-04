<template>
  <tr>
    <td-component v-for="(item, index) in rowsData" :key="index">
    </td-component>
  </tr>
</template>

<script>
import TdComponent from "@/components/ZeroChoStudy/TdComponent";

export default {
  components: {
    TdComponent,
  },
  props: {
    rowsData: Array,
  },
};
</script>