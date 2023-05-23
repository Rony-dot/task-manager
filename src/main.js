import { createApp } from "vue";
import '../index.css';
import 'tailwindcss/dist/tailwind.css';

import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
