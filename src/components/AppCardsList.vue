<template>
    <div class="app-cards-list">
        <h2 v-if="(store.noCardsFound === false)">Found {{ store.yugiohApi.length }} cards.</h2>
        <h2 v-if="(store.noCardsFound === true)">No cards found with the inserted name.</h2>
        <AppCardsElement v-for="card in store.yugiohApi" v-if="(store.noCardsFound === false)"
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
        padding: 3rem;
        width: 80%;
        margin: 0 auto;

        h2 {
            background-image: url(../assets/img/header_background.png);
            border: 3px solid black;
            color: white;
            padding: 1rem;
            flex-basis: 100%;
            border-radius: 10px;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
    }
</style>