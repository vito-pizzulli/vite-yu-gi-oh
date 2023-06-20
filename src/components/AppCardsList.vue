<template>
    <div class="app-cards-list">
        <h2>Found {{ store.yugiohApi.length }} cards</h2>
        <AppCardsElement v-for="card in store.yugiohApi"
            :cardElement="card"
        />
    </div>
</template>

<script>
import AppCardsElement from './AppCardsElement.vue';
import { store } from '../store.js';
export default {
    name: 'AppCardsList',
    
    components: {
        AppCardsElement
    },
    
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div.app-cards-list {
        @include flex(row, start, start, wrap);
        background-color: white;
        padding: 3rem;
        width: 80%;
        margin: 0 auto;

        h2 {
            background-color: black;
            color: white;
            padding: 1rem;
            flex-basis: 100%;
            border-radius: 10px;
        }
    }
</style>