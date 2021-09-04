const moduleName = "ticTecToStore";

const module = {
  namespaced: true,
  state: {
    tableData: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    turn: "O",
  },
  mutations: {
    setTurn(state, payload) {
      state.turn = state.turn === "O" ? "X" : "O";
    },
    setTableDate(state, payload) {
      state.tableData[payload.rowIndex][payload.cellIndex] = state.turn;
    },
  },
  actions: {},
};

export { module, moduleName };
