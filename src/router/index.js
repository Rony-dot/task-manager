import { createRouter, createWebHistory } from "vue-router";
import Board from "../views/Board.vue";
import task from '../views/Task.vue'

const routes = [
  {
    path: "/",
    name: "board",
    component: Board,
    children: [
      {
        path: 'task/:id',
        name: task ,
        component: task
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
