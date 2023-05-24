/* eslint-disable */
import { createStore } from "vuex";
import defaultBoard from "@/default-board";
import { saveStatePlugin } from "@/utils";

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default createStore({
  plugins : [saveStatePlugin],
  state: {
    // board: board // redundant that's why we will use the below  
     board
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
