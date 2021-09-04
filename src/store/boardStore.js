const moduleName = "boardStore";

import axios from "axios";
import router from "@/router";

const module = {
  namespaced: true,
  state: {
    boardList: [],
    boardInfo: {},
  },
  getters: {
    boardSize(state) {
      console.log("boardSize > state.boardList.length", state.boardList.length);
      return state.boardList.length;
    },
  },
  mutations: {
    boardList(state, payload) {
      state.boardList = payload;
    },
    addUser(state, payload) {
      state.boardList.push(payload);
    },
    boardInfo(state, payload) {
      state.boardInfo = payload;
    },
  },
  actions: {
    actBoardList({ commit }, payload) {
      console.log("actBoardList > payload", payload);
      axios
        .get("http://localhost:8080/api/boardList", {
          params: payload,
        })
        .then((response) => {
          console.log("actions > response", response);
          commit("boardList", response.data);
        })
        .catch((err) => {
          console.log("error", err);
        })
        .then(() => {});
    },
    actBoardInfo({ commit }, payload) {
      console.log("actBoardInfo > payload", payload);
      axios
        .get("http://localhost:8080/api/boardInfo", {
          params: payload,
        })
        .then((response) => {
          console.log("actBoardInfo > response", response);
          commit("boardInfo", response.data);
        })
        .catch((err) => {
          console.log("error", err);
        })
        .then(() => {});
    },
    actAddBoard(context, payload) {
      console.log("actAddBoard > payload", payload);
      axios
        .post("http://localhost:8080/api/insertBoardList", payload)
        .then(() => {
          router.push({ name: "boardList" });
        })
        .catch((err) => {
          console.log("error", err);
        })
        .then(() => {
          console.log("then");
        });
    },
  },
};

export { module, moduleName };
