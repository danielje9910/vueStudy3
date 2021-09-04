<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { moduleName } from "@/store/ZeroChoStudy/ticTecToStore";

const { mapState, mapMutations } = createNamespacedHelpers(moduleName);

export default {
  computed: {
    ...mapState(["tableData", "turn"]),
  },
  data() {
    return {
      cellData: "",
    };
  },
  methods: {
    ...mapMutations(["setTurn", "setTableDate"]),
    onClickTd(e) {
      let payload = {
        rowIndex: e.target.parentElement.rowIndex,
        cellIndex: e.target.cellIndex,
      };

      this.cellData = this.turn;
      this.setTableDate(payload);
      this.setTurn();
    },
  },
};
</script>