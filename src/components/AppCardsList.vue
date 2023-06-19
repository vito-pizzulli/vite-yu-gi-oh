<template>
    <div class="app-cards-list">
        <h2>Found {{ store.yugiohApi.length }} elements</h2>
        <AppCardsElement v-for="card in store.yugiohApi" />
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
        background-color: white;
        padding: 1rem;
    }
</style>