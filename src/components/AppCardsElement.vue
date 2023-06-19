<template>
    <div class="app-cards-element">
        <h1>{{ store.yugiohApi[index].name }}</h1>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'AppCardsElement',

    props: {
        index: Number
    },

    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div.app-cards-element {
        background-color: #d48f38;
        padding: 1rem;
    }
</style>