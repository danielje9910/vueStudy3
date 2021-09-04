<template>
  <div>
    <h1>틱텍토</h1>

    <table-component :tableData="tableData" />
    <div>현재 차례는 {{ turn }}차례 입니다.</div>
  </div>
</template>

<script>
/**
 * 이번예제로 배워야 할 사항들
 *
 * 1. this.$set : vue에서는 배열에 인덱스를 참조하여 수정할경우 사용해야 화면에 바로 반영됨
 *    예) tableData[0][1] = 'O' -> this.$set(tableData[0], 1, 'O')
 *
 * 2. this.$root : 최상위 컨포넌트에 값을 참조시 활용
 *    this.$parent : 바로 위 컴포넌트에 값을 참조시 활용
 *
 * 3. slot 개념, key Index 개념
 *
 * (종합)
 * 1. 1 번은 vuex에 mutations를 이용하니 번지수로 변경해도 화면에 바로 반영되어 보이고 있슴,
 * 강의는 vuex를 사용하지 않고 this.$root를 이용하여 강의
 *
 * 2. table에 rowIndex 값과 cellIndex 값은 클릭시 e.target값에서 추출해서 가져 올수 있어서
 * 강의 처럼 부모에서 자식으로 인덱스값을 건네 주지 않고 바로 참조하여 사용
 */
import { createNamespacedHelpers } from "vuex";
import { moduleName } from "@/store/ZeroChoStudy/ticTecToStore";

import TableComponent from "@/components/ZeroChoStudy/TableComponent";

const { mapState } = createNamespacedHelpers(moduleName);

export default {
  components: {
    TableComponent,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["tableData", "turn"]),
  },
};
</script>

<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
