<template>
    <base-container title="Vuex">
        <h3>{{ count }}</h3>
        <button @click="add">Add 1</button>
        <button @click="add10">Add 10</button>
    </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
    components: {
        BaseContainer,
    },
    computed: {
        count() {
            return this.$store.state.counter
        }
    },
    methods: {
        add() {
            this.$store.commit("addOne")
        },
        add10() {
            this.$store.commit("add10", {value: 10})
        }
    }
};
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
