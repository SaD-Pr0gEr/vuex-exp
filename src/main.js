import { createApp } from 'vue';

import App from './App.vue';
import BaseButton from "@/components/UI/BaseButton"
import store from "@/store/index";

const app = createApp(App);
app.component("BaseButton", BaseButton)

app.use(store);
app.mount('#app');
