import { createApp } from 'vue';
import { createStore } from "vuex";

import App from './App.vue';

const app = createApp(App);

const store = createStore({
    state() {
        return {
          counter: 0
        };
    },
    mutations: {
        addOne(state) {
            state.counter++;
        },
        add10(state, payload) {
            state.counter += payload.value;
        }
    }
})

app.use(store);
app.mount('#app');
