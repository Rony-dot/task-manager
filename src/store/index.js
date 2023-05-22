import { createStore } from "vuex";
import defaultBoard from "@/default-board";

// const board = defaultBoard

export default createStore({
  state: {
    board: defaultBoard
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
